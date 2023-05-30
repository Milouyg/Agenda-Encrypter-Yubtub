
class EncrypterView{
    header;
    body;
    footer;
    htmlElement;
    main;
    type;

    constructor(main, object) {
        this.htmlElement = document.createElement("article");
        this.htmlElement.classList.add("view");
        this.main = main;
        this.type = "ENCRYPT";

        this.main.app.renderer.render(this.htmlElement, this.main.htmlElement);
        this.header = new Header(this, "Encrypter"); // Geeft de Header class de EncrypterView en "Encrypter" mee
        this.body = new Body(this, object); // Geeft de EncrypterView en het object van de data.json mee
        this.footer = new Footer(this, "Encrypt");
    }

    getDataFromBody(){
        this.main.cipher(this.body.text, this.type); // Geeft argumenten mee aan de ciper functie
    }

    changeBody(encryptedText) {
        this.body.changeBody(encryptedText); // Veranderd de tekst van de body
    }
}
