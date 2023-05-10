class AgendaApp{
    api;
    agenda;
    constructor() {
        this.api = new API();
        this.agenda = new Agenda();
    }
}

class API{

}

class Agenda{
    rendered;
    header;
    month;

    constructor() {
        this.rendered = new Renderer();
        this.header = new Header();
        this.month = new Month(this);
    }
}

class Renderer{

}

class Header{

}

class Month{
    days = [];
    agenda;

    constructor(agenda) {
        this.agenda = agenda;
        for (let i = 0; i <= 31; i++){
            this.days.push(new Day(this));
        }
    }
}

class Day{
    month;

    constructor(month) {
        this.month = month;
    }

}

const agendaApp = new AgendaApp();
console.log(agendaApp)
