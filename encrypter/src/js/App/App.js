
class App{
    api;
    decrypter;
    encrypter;
    cleaner;
    renderer;
    main;

    constructor() { // Hier maken we nieuwe classes aan
        this.encrypter = new Encrypter();
        this.decrypter = new Decrypter();
        this.cleaner = new Cleaner();
        this.renderer = new Renderer();
        this.api = new Api();

        this.api.getData("./src/data/data.json").then((data) => { // Hier geven we data aan de main mee
            this.main = new Main(data, this);
        });

        this.cleaner.clean("body"); // Hier cleanen we de body
    }

    encrypt(textToEncrypt) {
        const encrypted = this.encrypter.encrypt(textToEncrypt); // Hier geven we de tekst op die de encrypter moet encrypten
        this.main.changeEncrypter(encrypted); // Hier veranderen we de text naar zijn value wat is meegegeven
    }

    decrypt(textToDecrypt){
        const decrypted = this.decrypter.decrypt(textToDecrypt);
        this.main.changeDecrypter(decrypted);
    }
}




