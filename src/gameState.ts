
export class gameState {
    private character = 3;
    private foe = 3;

    get getCharacterPoints(){
        return this.character
    }

    get getFoePoints(){
        return this.foe
    }

    CharacterPoints():void{
        this.character = this.character - 1
    }

    FoePoints():void{
        this.foe = this.foe - 1
    }


    constructor () {}
}