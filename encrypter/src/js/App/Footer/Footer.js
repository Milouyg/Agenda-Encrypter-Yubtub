
class Footer{
    htmlElement;
    view;

    buttonHtmlElement;

    constructor(view, buttonText){
        this.htmlElement = document.createElement("footer");
        this.htmlElement.classList.add("view__footer");
        this.buttonHtmlElement = document.createElement("button");
        this.buttonHtmlElement.classList.add("view__button");
        this.buttonHtmlElement.onclick = this.buttonClicked;
        this.buttonHtmlElement.innerText = buttonText;

        this.view = view;
        this.view.main.app.renderer.render(this.htmlElement, this.view.htmlElement);
        this.view.main.app.renderer.render(this.buttonHtmlElement, this.htmlElement)
    }

    buttonClicked = () => {
        this.view.getDataFromBody();
    }
}