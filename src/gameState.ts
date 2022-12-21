
export class gameState {
    private character:number = 3;
    private foe:number = 3;

    get getCharacterPoints(){
        return this.character
    }

    get getFoePoints(){
        return this.foe
    }

    characterPoints():void{
        this.character = this.character - 1
    }

    foePoints():void{
        this.foe = this.foe - 1
    }


    constructor () {}
}