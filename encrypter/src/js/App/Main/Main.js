
class Main{
    encrypterView;
    decrypterView;
    htmlElement;
    app;

    constructor(data, app) {
        this.app = app;

        this.htmlElement = document.createElement("main"); // Hier maken we de main aan
        this.htmlElement.classList.add("main"); // Hier geven we het de class main mee
        this.app.renderer.render(this.htmlElement, document.querySelector("body")); // Hier spreken we de render aan, we geven de html element mee en waar het moet renderen

        this.encrypterView = new EncrypterView(this, data.encrypt);
        this.decrypterView = new DecrypterView(this, data.decrypt);
    }

    cipher(textToCipher, type){
        if(type === "ENCRYPT"){ // Als het type identiek is aan ENCRYPT, dan wordt de encrypt functie uitgevoerd en anders de decrypt functie
            this.app.encrypt(textToCipher);
        }
        else{
            this.app.decrypt(textToCipher);
        }

    }

    changeEncrypter(encryptedText){
        this.encrypterView.changeBody(encryptedText); // Verandert de tekst in de body
    }

    changeDecrypter(decryptedText) {
        this.decrypterView.changeBody(decryptedText);
    }

}