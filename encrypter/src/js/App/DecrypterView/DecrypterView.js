
class DecrypterView{
    header;
    body;
    footer;
    htmlElement;
    main;
    type;

    constructor(main, placeholder) {
        this.htmlElement = document.createElement("article");
        this.htmlElement.classList.add("view");
        this.main = main;
        this.type = "DECRYPT";

        this.main.app.renderer.render(this.htmlElement, this.main.htmlElement);
        this.header = new Header(this, "Decrypter"); // Geeft aan de class Header zichzelf en "Decrypter" mee
        this.body = new Body(this, placeholder); // Geeft aan de class Body zichzelf en placeholder mee
        this.footer = new Footer(this, "Decrypt");
    }

    getDataFromBody(){
        this.main.cipher(this.body.text, this.type); // Geeft aan de ciper functie die in de main zit de text en het type mee
    }

    changeBody(decryptedText) {
        this.body.changeBody(decryptedText); // Geeft aan de changeBody functie in de body de decryptedText mee
    }
}

