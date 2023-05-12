class AgendaApp{
    api;
    agenda;
    constructor() {
        this.api = new API();
        this.api.getData().then(result =>{
            this.agenda = new Agenda(result[0]);
        });
        
        
    }
}

class API{
    data = [];

    async getData(){
        await fetch("../data/data.json").then
        (response =>{
            return response.json();
        }).then(data =>{
            this.data = data.months;
        });
        return this.data;
    }
}

class Agenda{
    renderer;
    header;
    month;

    htmlElement;

    constructor(data) {
        this.htmlElement = document.createElement("article");
        this.htmlElement.classList.add("agenda");
        this.data = data;
        this.renderer = new Renderer();
        this.renderer.render("body", this.htmlElement);
        this.header = new Header(this, data.name);
        this.month = new Month(this, data.days);
    }

    render(placeToRender, whatToRender) {
        this.renderer.render(placeToRender, whatToRender);
    }
}

class Renderer{
    render(placeToRender, whatToRender) {
        document.querySelector(placeToRender).appendChild(whatToRender);
    }
}

class Header{
    nameOfMonth;
    htmlElement;
    agenda;
    htmlElement__p;
    htmlElement__iconLeft;
    htmlElement__iconRight;

    constructor(agenda, nameOfMonth) {
        this.agenda = agenda;
        this.htmlElement = document.createElement("header");
        this.htmlElement.classList.add("agenda__header");
        this.htmlElement__iconLeft = document.createElement("p");
        this.htmlElement__iconLeft.classList = "agenda__icon"
        this.htmlElement__p = document.createElement("p");
        this.htmlElement__p.classList = "agenda__p"
        this.htmlElement__iconRight = document.createElement("p");
        this.htmlElement__iconRight.classList = "agenda__icon"
        this.agenda.render(".agenda", this.htmlElement);

        this.agenda.render(".agenda__header", this.htmlElement__iconLeft);
        this.agenda.render(".agenda__header", this.htmlElement__p);
        this.agenda.render(".agenda__header", this.htmlElement__iconRight);
        this.htmlElement__iconLeft.innerText = "<";
        this.htmlElement__p.innerText = "Agenda";
        this.htmlElement__iconRight.innerText = ">";

        this.nameOfMonth = nameOfMonth;
    }

}

class Month{
    days = [];
    agenda;
    numberOfDays;
    htmlElement;

    constructor(agenda, numberOfDays) {
        this.htmlElement = document.createElement("ul");
        this.htmlElement.classList.add("agenda__month");
        this.numberOfDays = numberOfDays;
        this.agenda = agenda;
        this.agenda.render(".agenda", this.htmlElement);
        for (let i = 1; i <= this.numberOfDays; i++){
            this.days.push(new Day(this, i));
        }
    }

    renderDays(placeToRender,whatToRender) {
        this.agenda.render(placeToRender, whatToRender);
    }
}

class Day{
    month;
    htmlElement;
    dayNumber;

    constructor(month, dayNumber) {
        this.dayNumber = dayNumber;
        this.htmlElement = document.createElement("li");
        this.htmlElement.classList.add("agenda__day");
        this.htmlElement.innerText = this.dayNumber;
        this.month = month;
        this.month.renderDays(".agenda__month", this.htmlElement);
    }

}

const agendaApp = new AgendaApp();
console.log(agendaApp)
