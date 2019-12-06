export default class User{

    constructor(){
        this.fout = 0;
        this.juist = 0;
        this.vragen = 0;
    }

    Fout(){
        this.fout++;
        this.vragen++;
    }

    Juist(){
        this.juist++;
        this.vragen++;
    }
}