/**
 * Classe représentant un joueur
 */


export class Player {
    constructor( public _prenom: string){
    }

    get prenom(): string {
        return this._prenom;
    }

    set prenom(prenom:string){
        if (! prenom){
            throw new Error ('Le prénom est obligatoire ');
        }
        this._prenom = prenom;
    }
}

