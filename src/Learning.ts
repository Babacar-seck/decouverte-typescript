
import {Arme, AvecPuissance, afficherPuissance} from './arme';
export function afficherTexte(test: unknown) : void {
    if (typeof test === 'string') {
        console.log(test.toLowerCase());
    }else if(typeof test === 'number') {
        console.log(test.toFixed(1));
    }
}


afficherTexte('TEST');
afficherTexte(1);

const arme = new Arme();

const arc: AvecPuissance  = {
   puissance: 50
};
afficherPuissance(arme);
afficherPuissance(arc);

afficherPuissance({puissance: 62});