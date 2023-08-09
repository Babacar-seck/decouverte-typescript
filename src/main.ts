import {Hobbit} from './hobbit';
import { Nourriture, NourritureElaboree } from './nourriture';
import {Orque} from './orque';
import {Arme, AvecPuissance, afficherPuissance} from './arme';
import {afficherTexte} from './Learning';


let frodon  = new Hobbit();

// frodon.manger(new Nourriture(10));
frodon.manger({pointsDeVie: 10});

// frodon.manger(new Nourriture(20));
frodon.manger(new NourritureElaboree());
let orque = new Orque();
orque.manger();


const maNourriture = { pointsDeVie: 30 };




// ------------

let elfe : any = {
    nom: "Legolas",
}
elfe = 1;

