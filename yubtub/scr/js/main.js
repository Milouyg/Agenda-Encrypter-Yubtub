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
    yubtub;
    cleaner;
    app;

    constructor(app, data) {
        this.app = app; // Class app
        this.data = data;
        this.yubtub = new Yubtub(this.app, data[0]);
        this.cleaner = new Cleaner();
    }

    switch(link) {
        this.cleaner.clean("body");
        this.yubtub = new Yubtub(this.app, this.data[link]);
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

    constructor(app, data) {
        this.app = app;
        this.renderer = new Renderer();
        this.header = new Header();
        this.renderer.render("body", this.header.htmlElement);
        this.renderer.render("header", this.header.text);

        this.htmlElementDivYubtub = document.createElement("div");
        this.htmlElementDivYubtub.classList.add("yubtub");

        this.renderer.render("body", this.htmlElementDivYubtub);

        this.main = new Main(this, data);
        this.aside = new Aside(this, data);
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

    data;
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

    constructor(yubtub, data) {
        this.yubtub = yubtub;
        this.data = data;



        this.htmlElementMain = document.createElement("main");
        this.htmlElementMain.classList.add("yubtub__main");

        this.htmlElementSection = document.createElement("section");
        this.htmlElementSection.classList.add("yubtub__section");

        this.htmlElementFigure = document.createElement("figure");
        this.htmlElementFigure.classList.add("yubtub__figure");

        this.htmlElementStarTop = document.createElement("i");
        this.htmlElementStarTop.classList = "fa-regular fa-star yubtub__icon yubtub__icon--starTop";

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
        this.htmlElementSpan.innerText = "Lorem Ipsum";

        this.htmlElementDivRight = document.createElement("div");
        this.htmlElementDivRight.classList.add("yubtub__group--right");

        this.htmlElementIconStarBottom = document.createElement("i");
        this.htmlElementIconStarBottom.classList = "fa-regular fa-star yubtub__icon yubtub__icon--starBottom";

        this.htmlElementsIconArrow = document.createElement("i");
        this.htmlElementsIconArrow.classList = "fa-solid fa-right-long yubtub__icon yubtub__icon--arrow";


        this.yubtub.renderer.render(".yubtub", this.htmlElementMain);
        this.yubtub.renderer.render(".yubtub__main", this.htmlElementSection);
        this.yubtub.renderer.render(".yubtub__section", this.htmlElementFigure);
        this.yubtub.renderer.render(".yubtub__figure", this.htmlElementIcon);
        this.yubtub.renderer.render(".yubtub__figure", this.htmlElementStarTop);
        this.video = new Video(data);
        this.yubtub.renderer.render(".yubtub__figure", this.video.htmlElement);
        this.yubtub.renderer.render(".yubtub__figure", this.htmlElementDivGroup);
        this.yubtub.renderer.render(".yubtub__group", this.htmlElementDivLeft);
        this.yubtub.renderer.render(".yubtub__group--left", this.htmlElementIconCircle);
        this.yubtub.renderer.render(".yubtub__group--left", this.htmlElementSpan);
        this.yubtub.renderer.render(".yubtub__group", this.htmlElementDivRight);
        this.yubtub.renderer.render(".yubtub__group--right", this.htmlElementIconStarBottom);
        this.yubtub.renderer.render(".yubtub__group--right", this.htmlElementsIconArrow);
        this.comments = new Comments(this, data);
    }
}

class Video {
    data;
    htmlElement;

    constructor(data) {
        this.data = data;
        this.htmlElement = document.createElement("video");
        this.htmlElement.classList.add("yubtub__video");
        this.htmlElement.src = "./scr/videos/" + data["video"];

    }
}

class Comments {
    main;
    data;
    comment;

    htmlElementUl;
    htmlElementLi;
    htmlElementIconCircleUl;
    htmlElementText;

    constructor(main, data) {
        this.main = main;
        this.data = data;

        this.htmlElementUl = document.createElement("ul");
        this.htmlElementUl.classList.add("yubtub__comments");
        this.main.yubtub.renderer.render(".yubtub__main", this.htmlElementUl);
        this.generateComments(3);
        this.comment = new Comment(this);
        
    }

    generateComments(amount){
        for(let i = 0; i < amount; i++){
            this.htmlElementLi = document.createElement("li");
            this.htmlElementLi.classList.add("yubtub__comment");
            this.htmlElementLi.setAttribute("id", i);

            this.htmlElementIconCircleUl = document.createElement("i");
            this.htmlElementIconCircleUl.classList = "fa-regular fa-circle yubtub__icon yubtub__icon--circle";
    
            this.htmlElementText = document.createElement("p");
            this.htmlElementText.classList.add("yubtub__text");
            this.htmlElementText.innerText = "Lorem ipsum..";
    
            this.main.yubtub.renderer.render(".yubtub__comments", this.htmlElementLi);
            this.main.yubtub.renderer.render("#\\3" + i, this.htmlElementIconCircleUl);
            this.main.yubtub.renderer.render("#\\3" + i, this.htmlElementText);
        }
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
        this.comments.main.yubtub.renderer.render(".yubtub__main", this.comment)
        }
}

class Aside {
    yubtub;
    data;
    nextVideo;
    htmlElement;

    constructor(yubtub, data) {
        this.yubtub = yubtub;
        this.data = data;
        console.log(this.yubtub)

        this.htmlElement = document.createElement("aside");
        this.htmlElement.classList.add("yubtub__aside");
        this.yubtub.renderer.render(".yubtub", this.htmlElement);
        this.nextVideo = new NextVideo(this, data);
    }
}

class NextVideo {
    data;
    aside;
    htmlElement;

    constructor(aside, data) {
        this.aside = aside;
        this.data = data;
        this.htmlElement = document.createElement("video");
        this.htmlElement.classList.add("yubtub__nextVideo");
        this.htmlElement.src = "./scr/videos/" + data.video;
        this.aside.yubtub.renderer.render("aside", this.htmlElement);
        this.htmlElement.onclick = this.videoClicked;
    }

    videoClicked = () => {
        this.aside.yubtub.app.switcher.switch(this.data["link"]);
    }
}

const app = new App()
