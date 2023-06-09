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
    render(whereTORender, whatToRender) {
        document.querySelector(whereTORender).appendChild(whatToRender);
    }
}

class Yubtub {
    header;
    main;
    aside;
    renderer;
    app;

    constructor(app, data) {
        this.app = app;
        this.renderer = new Renderer();
        this.header = new Header();
        this.renderer.render("body", this.header.htmlElement);
        this.main = new Main(this, data);
        this.aside = new Aside(this, data);
    }

    
}

class Header {
    htmlElement;

    constructor() {
        // this.htmlElement = document.createElement("header");
        // this.htmlElement.classList.add("header");
    }


}

class Main {
    yubtub;
    data;
    htmlElement;

    constructor(yubtub, data) {
        this.yubtub = yubtub;
        this.data = data;
        this.htmlElement = document.createElement("main");
        this.htmlElement.classList.add("yubtub__main");
        this.yubtub.renderer.render("body", this.htmlElement);
        this.video = new Video(data);
        this.comments = new Comments();
    }
}

class Video {
    data;
    htmlElement;

    constructor(data) {
        this.data = data;
        this.htmlElement = document.createElement("video");
        this.htmlElement.classList.add("yubtub__mainVideo");
        this.htmlElement.src = "./videos/" + data["video"];

    }
}

class Comments {
    comment;

    constructor() {
        this.comment = new Comment(this);
    }
}

class Comment {
    comments;

    constructor(comments) {
        this.comments = comments;
    }
}

class Aside {
    yubtub;
    nextVideo;
    htmlElement;

    constructor(yubtub, data) {
        this.yubtub = yubtub;

        this.htmlElement = document.createElement("aside");
        this.htmlElement.classList.add("yubtub__aside");
        // this.yubtub.renderer.render("body", this.htmlElement);
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
        this.htmlElement.classList.add("yubtub__video");
        this.htmlElement.src = "./videos/" + data.video;
        this.aside.yubtub.renderer.render("aside", this.htmlElement);
        this.htmlElement.onclick = this.videoClicked;
    }

    videoClicked = () => {
        this.aside.yubtub.app.switcher.switch(this.data["link"]);
    }
}

const app = new App()
