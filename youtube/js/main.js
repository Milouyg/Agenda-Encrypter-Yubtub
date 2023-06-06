class Api{
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
                this.data = data;
            })
        return this.data;
    }
}

class App {
    api;
    switcher;
    data = [
    {
        id: 0,
        video: "video--1.mp4",
        link: 1

    },
    {
        id: 1,
        video: "video--2.mp4",
        link: 0

    }]

    constructor() {
        this.api = new Api("../data/data.json");
        this.api.getData().then(() => {
            
        });
        
        this.switcher = new Switcher(this, this.data);
    }

}

class Switcher {
    yubtub;
    cleaner;
    app;
    default = 0;

    constructor(app, data) {
        this.app = app; // Class app
        this.data = data;
        this.yubtub = new Yubtub(this.app, data[this.default]);
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
    aside;
    renderer;
    app;

    constructor(app, data) {
        this.app = app;
        this.renderer = new Renderer();
        this.aside = new Aside(this, data);
        console.log(data)

    }

}

class Aside {
    yubtub;
    nextVideo;
    htmlElement;

    constructor(yubtub, data) {
        this.yubtub = yubtub;

        this.htmlElement = document.createElement("aside");
        this.yubtub.renderer.render("body", this.htmlElement);
        this.nextVideo = new NextVideo(this, data);
    }
}

class NextVideo {
    aside;
    htmlElement;

    constructor(aside, data) {
        this.aside = aside;
        this.data = data;
        this.htmlElement = document.createElement("video");
        this.htmlElement.scr = "./videos/" + data.video;
        this.aside.yubtub.renderer.render("aside", this.htmlElement);
        this.htmlElement.onclick = this.videoClicked;
    }

    videoClicked = () => {
        this.aside.yubtub.app.switcher.switch(this.data.link);
    }

}

const app = new App()
console.log(app);