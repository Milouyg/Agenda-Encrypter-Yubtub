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
    rendered;
    header;
    month;

    htmlElement;

    constructor(data) {
        this.htmlElement = document.createElement("article");
        this.data = data;
        console.log(data)
        this.rendered = new Renderer();
        this.header = new Header(data.name);
        this.month = new Month(this, data.days);
    }
}

class Renderer{

}

class Header{
    nameOfMonth;
    htmlElement;

    constructor(nameOfMonth){
        this.htmlElement = document.createElement("header");
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
        this.numberOfDays = numberOfDays;
        this.agenda = agenda;
        for (let i = 0; i <= this.numberOfDays; i++){
            this.days.push(new Day(this));
        }
    }
}

class Day{
    month;
    htmlElement;
    constructor(month) {
        this.htmlElement = document.createElement("li");
        this.month = month;
    }

}

const agendaApp = new AgendaApp();
console.log(agendaApp)
