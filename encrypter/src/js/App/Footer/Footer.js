
class Footer{
    htmlElement;
    view;

    buttonHtmlElement;

    constructor(view, buttonText){
        this.htmlElement = document.createElement("footer");
        this.htmlElement.classList.add("view__footer");
        this.buttonHtmlElement = document.createElement("button");
        this.buttonHtmlElement.classList.add("view__button");
        this.buttonHtmlElement.onclick = this.buttonClicked; // Als je op de button klikt, voert ie de buttonclick functie uit
        this.buttonHtmlElement.innerText = buttonText; // Verandert de tekst op de button met het meegegeven tekst aan de variabel

        this.view = view;
        this.view.main.app.renderer.render(this.htmlElement, this.view.htmlElement);
        this.view.main.app.renderer.render(this.buttonHtmlElement, this.htmlElement)
    }

    buttonClicked = () => {
        this.view.getDataFromBody();
    }
}