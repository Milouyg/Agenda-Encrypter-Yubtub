
class Header{
    htmlElement;
    view;
    headingHtmlElement;

    constructor(view, headingText){
        this.htmlElement = document.createElement("header");
        this.htmlElement.classList.add("view__header");
        this.headingHtmlElement = document.createElement("h1");
        this.headingHtmlElement.innerText = headingText; // Krijgt de 
        this.headingHtmlElement.classList.add("view__heading");

        this.view = view;
        // Rendert de header en h1
        this.view.main.app.renderer.render(this.htmlElement, this.view.htmlElement); 
        this.view.main.app.renderer.render(this.headingHtmlElement, this.htmlElement);
    }
}