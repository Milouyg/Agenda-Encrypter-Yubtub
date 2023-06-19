class Api {
    data;
    url;

    constructor(url) {
        this.url = url;
    }

    async getData() {
        await fetch(this.url)
            .then((response) => {
                return response.json();
            }).then((data) => {
                this.data = data["data"];
            })
        return this.data;
    }
}

class App {
    api;
    switcher;

    constructor() {
        this.api = new Api("../scr/data/data.json");
        this.api.getData().then((data) => {
            this.switcher = new Switcher(this, data);
        });
    }
}

class Switcher {
    allData;
    yubtub;
    cleaner;
    app;

    constructor(app, data) {
        this.app = app; // Class app
        this.allData = data;

        this.yubtub = new Yubtub(this.app, this.allData, this.allData[0]);
        this.cleaner = new Cleaner();
    }

    switch(newReceivedNumber) {
        this.cleaner.clean("body");
        this.yubtub = new Yubtub(this.app, this.allData, this.allData[newReceivedNumber]);
    }

}

class Cleaner {
    clean(whereToClean) {
        document.querySelector(whereToClean).innerHTML = "";
    }
}

class Renderer {
    render(whereToRender, whatToRender) {
        document.querySelector(whereToRender).appendChild(whatToRender);
    }
}

class Yubtub {
    header;
    yubtub;
    main;
    aside;
    renderer;
    app;

    constructor(app, allData, dataObject) {
        this.app = app;

        this.renderer = new Renderer();
        this.header = new Header();
        this.renderer.render("body", this.header.htmlElement);
        this.renderer.render("header", this.header.text);

        this.htmlElementDivYubtub = document.createElement("div");
        this.htmlElementDivYubtub.classList.add("yubtub");

        this.renderer.render("body", this.htmlElementDivYubtub);

        this.main = new Main(this, dataObject);
        this.aside = new Aside(this, allData);
    }
}

class Header {
    htmlElement;
    text;

    constructor() {
        this.htmlElement = document.createElement("header");
        this.htmlElement.classList.add("header");

        this.text = document.createElement("p");
        this.text.classList.add("header__p");
        this.text.innerText = "Milou";
    }
}

class Main {

    dataObject;
    htmlElementDivYubtub;
    htmlElementMain;
    htmlElementSection;

    htmlElement
    htmlElementFigure;
    htmlElementStarTop;

    htmlElementDivGroup;
    htmlElementDivLeft;
    htmlElementIconCircle;
    htmlElementSpan;
    htmlElementDivRight;
    htmlElementIconStarBottom;
    htmlElementsIconArrow;

    constructor(yubtub, dataObject) {
        this.yubtub = yubtub;
        this.dataObject = dataObject;

        this.htmlElementMain = document.createElement("main");
        this.htmlElementMain.classList.add("yubtub__main");

        this.htmlElementSection = document.createElement("section");
        this.htmlElementSection.classList.add("yubtub__section");

        this.htmlElementFigure = document.createElement("figure");
        this.htmlElementFigure.classList.add("yubtub__figure");

        this.htmlElementStarTop = document.createElement("i");
        this.htmlElementStarTop.classList = "fa-solid fa-star yubtub__icon yubtub__icon--starTop";

        this.htmlElementIcon = document.createElement("i");
        this.htmlElementIcon.classList.add("yubtub__icon");

        this.htmlElementDivGroup = document.createElement("div");
        this.htmlElementDivGroup.classList.add("yubtub__group");

        this.htmlElementDivLeft = document.createElement("div");
        this.htmlElementDivLeft.classList.add("yubtub__group--left");

        this.htmlElementIconCircle = document.createElement("i");
        this.htmlElementIconCircle.classList = "fa-regular fa-circle yubtub__icon yubtub__icon--circle";

        this.htmlElementSpan = document.createElement("span");
        this.htmlElementSpan.classList.add("yubtub__p");
        this.htmlElementSpan.innerText = dataObject["title"];

        this.htmlElementDivRight = document.createElement("div");
        this.htmlElementDivRight.classList.add("yubtub__group--right");

        this.htmlElementIconStarBottom = document.createElement("i");
        this.htmlElementIconStarBottom.classList = "fa-solid fa-star yubtub__icon yubtub__icon--starBottom";
        this.htmlElementIconStarBottom.addEventListener("click", ()=>{

            if(dataObject["isFavourite"] === false){
                this.htmlElementIconStarBottom.style.color = "rgb(252, 255, 93)";
                this.htmlElementStarTop.style.color = "rgb(252, 255, 93)";
                dataObject["isFavourite"] = true;
                alert("This video is added to your favourites :D");
            }
            else{
                dataObject["isFavourite"] = false;
                this.htmlElementIconStarBottom.style.color = "transparent";
                this.htmlElementStarTop.style.color = "transparent";
            }
        });

        this.htmlElementsIconArrow = document.createElement("i");
        this.htmlElementsIconArrow.classList = "fa-solid fa-right-long yubtub__icon yubtub__icon--arrow";
        
        this.htmlElementsIconArrow.addEventListener("click", () =>{
            this.yubtub.app.switcher.switch(dataObject["link"]);
        })

        this.yubtub.renderer.render(".yubtub", this.htmlElementMain);
        this.yubtub.renderer.render(".yubtub__main", this.htmlElementSection);
        this.yubtub.renderer.render(".yubtub__section", this.htmlElementFigure);
        this.yubtub.renderer.render(".yubtub__figure", this.htmlElementIcon);
        this.yubtub.renderer.render(".yubtub__figure", this.htmlElementStarTop);
        this.video = new Video(dataObject);

        this.video.htmlElement.addEventListener("ended", () => {
            this.yubtub.app.switcher.switch(dataObject["link"]);
        });

        this.yubtub.renderer.render(".yubtub__figure", this.video.htmlElement);
        this.yubtub.renderer.render(".yubtub__figure", this.htmlElementDivGroup);
        this.yubtub.renderer.render(".yubtub__group", this.htmlElementDivLeft);
        this.yubtub.renderer.render(".yubtub__group--left", this.htmlElementIconCircle);
        this.yubtub.renderer.render(".yubtub__group--left", this.htmlElementSpan);
        this.yubtub.renderer.render(".yubtub__group", this.htmlElementDivRight);
        this.yubtub.renderer.render(".yubtub__group--right", this.htmlElementIconStarBottom);
        this.yubtub.renderer.render(".yubtub__group--right", this.htmlElementsIconArrow);
        this.comments = new Comments(this);
    }
    
}

class Video {
    dataObject;
    htmlElement;

    constructor(dataObject) {
        this.dataObject = dataObject;
        this.htmlElement = document.createElement("video");
        this.htmlElement.classList.add("yubtub__video");
        this.htmlElement.src = "./scr/videos/" + dataObject["video"];
        this.htmlElement.muted = true;
        // this.htmlElement.play();
    }
}

class Comments {
    main;
    comment;

    htmlElementUl;
    htmlElementLi;
    htmlElementIconCircleUl;
    htmlElementText;

    constructor(main) {
        this.main = main;

        this.htmlElementUl = document.createElement("ul");
        this.htmlElementUl.classList.add("yubtub__comments");
        this.main.yubtub.renderer.render(".yubtub__main", this.htmlElementUl);
        this.comment = new Comment(this);
    }

    generateComment(timeStamp, value){
            this.htmlElementLi = document.createElement("li");
            this.htmlElementLi.classList.add("yubtub__comment");
            this.htmlElementLi.setAttribute("id", "ts" + timeStamp) // ts stands for timeStamp

            this.htmlElementIconCircleUl = document.createElement("i");
            this.htmlElementIconCircleUl.classList = "fa-regular fa-circle yubtub__icon yubtub__icon--circle";

            this.htmlElementText = document.createElement("p");
            this.htmlElementText.classList.add("yubtub__text");
            this.htmlElementText.innerText = value;
    
            this.main.yubtub.renderer.render(".yubtub__comments", this.htmlElementLi);
            this.main.yubtub.renderer.render("#ts" + timeStamp, this.htmlElementIconCircleUl);
            this.main.yubtub.renderer.render("#ts" + timeStamp, this.htmlElementText);
    }
}

class Comment {
    comments;
    comment;

    constructor(comments) {
        this.comments = comments;
        this.comment = document.createElement("textarea");
        this.comment.classList.add("yubtub__textarea");
        this.comment.setAttribute("placeholder", "Jouw comment");
        this.comment.addEventListener("keyup", (e) => {
            if(e.code === "Enter"){
                this.pushComment(e["timeStamp"], e["target"]["value"]);
                this.comment.value = "";
            }
        })
        this.comments.main.yubtub.renderer.render(".yubtub__main", this.comment)
        }

    pushComment(timeStamp, value){
        this.comments.generateComment(timeStamp, value);
    }
}

class Aside {
    yubtub;
    allData;
    nextVideo;
    htmlElement;

    constructor(yubtub, allData) {
        this.yubtub = yubtub;
        this.allData = allData;

        this.htmlElement = document.createElement("aside");
        this.htmlElement.classList.add("yubtub__aside");
        this.yubtub.renderer.render(".yubtub", this.htmlElement);
        this.nextVideo = new NextVideo(this, allData);
    }
}

class NextVideo {
    allData;
    aside;
    htmlElement;

    constructor(aside, allData) {
        this.aside = aside;
        this.allData = allData;
        this.generateVideos(allData);
    }

    generateVideos(allData){
        for(let i = 0; i < allData.length; i++){
            this.htmlElement = document.createElement("video");
            this.htmlElement.classList.add("yubtub__nextVideo");
            this.htmlElement.src = "./scr/videos/" + allData[i]["video"];
            this.aside.yubtub.renderer.render("aside", this.htmlElement);
            this.htmlElement.addEventListener("click", () =>{
                this.videoClicked(allData[i]);
            });
        }
    }

    videoClicked = (newDataObject) => {
        this.aside.yubtub.app.switcher.switch(newDataObject["id"]);
    }
}

const app = new App()
