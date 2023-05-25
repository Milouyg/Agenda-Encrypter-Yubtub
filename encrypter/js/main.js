class Api{
    url = "";

    constructor(newUrl) {
        this.url = newUrl;
    }

    async getData() {
        {
            await fetch(this.url)
                .then(function (response) {
                    return response.json();
                }).then((data) => {
                    this.data = data;
                });
        }
        return this.data
    }
}

class App{
    api;
    decrypter;
    encrypter;
    cleaner;
    renderer;
    main;

    constructor() {
        this.api = new Api();
        // this.encrypter = new Encrypter("Hallo je moet mij encrypten");
        this.decrypter = new Decrypter();
        this.decrypter.decrypt("KDOOR MH PRHW PLM HQFUBSWHQ")
        this.cleaner = new Cleaner();
        this.renderer = new Renderer();
        this.main = new Main();
        api.getData("../data/data.json").then();
    }

}

class Decrypter{
    decrypt(stringToDecrypt) {
        let decryptedString = [];
        for (let i = 0; i < stringToDecrypt.length; i++){
            switch (stringToDecrypt[i]) {
                case "D":
                    decryptedString.push("A");
                    break;
                    case "E":
                        decryptedString.push("B");
                    break;
                    case "F":
                        decryptedString.push("C");
                    break;
                    case "G":
                        decryptedString.push("D");
                    break;
                    case "H":
                        decryptedString.push("E");
                    break;
                    case "I":
                        decryptedString.push("F");
                    break;
                    case "J":
                        decryptedString.push("G");
                    break;
                    case "K":
                        decryptedString.push("H");
                    break;
                    case "L":
                        decryptedString.push("I");
                    break;
                    case "M":
                        decryptedString.push("J");
                    break;
                    case "N":
                        decryptedString.push("K");
                    break;
                    case "O":
                        decryptedString.push("L");
                    break;
                    case "P":
                        decryptedString.push("M");
                    break;
                    case "Q":
                        decryptedString.push("N");
                    break;
                    case "R":
                        decryptedString.push("O");
                    break;
                    case "S":
                        decryptedString.push("P");
                    break;
                    case "T":
                        decryptedString.push("Q");
                    break;
                    case "U":
                        decryptedString.push("R");
                    break;
                    case "V":
                        decryptedString.push("S");
                    break;
                    case "W":
                        decryptedString.push("T");
                    break;
                    case "X":
                        decryptedString.push("U");
                    break;
                    case "Y":
                        decryptedString.push("V");
                    break;
                    case "Z":
                        decryptedString.push("W");
                    break;
                    case "A":
                        decryptedString.push("X");
                    break;
                    case "B":
                        decryptedString.push("Y");
                    break;
                    case "C":
                        decryptedString.push("Z");
                    break;
                default:
                    decryptedString.push(stringToDecrypt[i]);
            }
        }
        decryptedString = decryptedString.join("");
        console.log(decryptedString)
    }
}

class Encrypter{

    encryptedString = [];

    encrypt(stringToEncrypt) {
        for (let i = 0; i < this.stringToEncrypt.length; i++){
            switch (this.stringToEncrypt[i]) {
                case "A":
                    this.encryptedString.push("D");
                    break;
                case "B":
                    this.encryptedString.push("E");
                case "C":
                    this.encryptedString.push("F");
                    break;
                case "D":
                    this.encryptedString.push("G");
                    break;
                case "E":
                    this.encryptedString.push("H");
                    break;
                case "F":
                    this.encryptedString.push("I");
                    break;
                case "G":
                    this.encryptedString.push("J");
                    break;
                case "H":
                    this.encryptedString.push("K");
                break;
                case "I":
                    this.encryptedString.push("L");
                break;
                case "J":
                    this.encryptedString.push("M");
                break;
                case "K":
                    this.encryptedString.push("N");
                break;
                case "L":
                    this.encryptedString.push("O");
                break;
                case "M":
                    this.encryptedString.push("P");
                break;
                case "N":
                    this.encryptedString.push("Q");
                break;
                case "O":
                    this.encryptedString.push("R");
                break;
                case "P":
                    this.encryptedString.push("S");
                break;
                case "Q":
                    this.encryptedString.push("T");
                break;
                case "R":
                    this.encryptedString.push("U");
                break;
                case "S":
                    this.encryptedString.push("V");
                break;
                case "T":
                    this.encryptedString.push("W");
                break;
                case "U":
                    this.encryptedString.push("X");
                break;
                case "V":
                    this.encryptedString.push("Y");
                break;
                case "W":
                    this.encryptedString.push("Z");
                break;
                case "X":
                    this.encryptedString.push("A");
                break;
                case "Y":
                    this.encryptedString.push("B");
                break;
                case "Z":
                    this.encryptedString.push("C");
                break;
            default:
                this.encryptedString.push(this.stringToEncrypt[i]);
                break;
            }
        }
        this.encryptedString = this.encryptedString.join("");
        console.log(this.encryptedString)
    }

}

class Cleaner{

}

class Renderer{

}

class Main{
    encrypterView;
    decrypterView;

    constructor() {
        this.encrypterView = new Encrypter();
        this.decrypterView = new Decrypter();
    }

}

class EncrypterView{
    header;
    body;
    footer;

    constructor() {
        this.header = new Header();
        this.body = new Body();
        this.footer = new Footer();
    }

}

class DecrypterView{
    header;
    body;
    footer;

    constructor() {
        this.header = new Header();
        this.body = new Body();
        this.footer = new Footer();
    }
}

class Header{

}

class Body{

}

class Footer{

}

const app = new App()