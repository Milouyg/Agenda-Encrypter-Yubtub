
class Body{
    htmlElement;
    view;
    inputHtmlElement;
    text;

    constructor(view, object){
        this.htmlElement = document.createElement("section"); // Maken een section aan
        this.htmlElement.classList.add("view__body"); // We geven aan die section de class mee
        this.inputHtmlElement = document.createElement("textarea");
        this.inputHtmlElement.classList.add("view__input");
        
        this.inputHtmlElement.placeholder = object.placeholder; // We pakken uit json de placeholder
        this.inputHtmlElement.value = object.value; // We pakken uit json de value
        this.text = object.value; // In de text wordt de value opgeslagen
        this.inputHtmlElement.oninput = this.typed; // Oninput is een event en wanneer je iets in het input veld intypt, wordt de typed functie uitgevoerd
        
        this.view = view;
        this.view.main.app.renderer.render(this.htmlElement, this.view.htmlElement); // Rendert htmlElement in de body
        this.view.main.app.renderer.render(this.inputHtmlElement, this.htmlElement);
    }

    typed = (event) =>{
        this.text = event.target.value; // Pakt de value van de text
    }

    changeBody(newText) {
        this.inputHtmlElement.value = newText; // De tekst wat binnenkomt veranderd naar de nieuwe tekst 
    }
}
