/*John essaie de rentrer chez lui en taxi.
Problème : Il a horreur d’écouter Anissa de Wejdene 
perd 1 de santé mentale et change de taxi.
Partons du principe qu’une musique se change à chaque feu rouge qu’il rencontre et qu’il est à 30 feux
rouges de chez lui.
À chaque feu rouge, afficher la musique jouée + le nombre de feux restants.
Deux possibilités de fin :
- Si il a passé les 30 feux rouges, il est arrivé à destination et donc affiche qu’il est bien arrivé et
qu’il lui a fallu x changements de taxi pour y arriver
- Sa santé mentale tombe à 0, il explose et donc affiche « explosion »*/
                                                                           /*Nous avons besoin d’un Personnage avec un prénom et une santé mentale à 10.
                                                                            Nous avons besoin d’une liste de 5 musiquesdont Anissa - Wejdene
                                                                            Nous avons besoin d’un Trajet avec une radio, 30 feux rouges et un nombre de changements*/ 
let name = 'John'
let santementale = 10
let listen = [
    'anissa : wejdene','3 planette : freeze corleon','pdm : freeze corleon','noir : sexion d assault','sacrifice de mase pt2 : freeze corleon'
             ]
let nombre_de_feu_rouge = 30
let nombre_de_changement = 0

function lamusique(){
    nombre_de_feu_rouge--;

    let radio = Math.floor(Math.random()*5);

    if(lamusique[radio] == listes_musique[0]){
        santemental -= 1,
        nombre_de_changement += 1
    }
    return radio
}

while (nombre_de_feu_rouge > 0 && santementale > 0){
    let musique = lamusique();
    console.log("la musique en cours est" ${musique} "il reste"${nb_feu_rouge}"feu rouge a parcourir")
}
if (nombre_de_feu_rouge > 0){
    console.log("vous etes arrive a destination,vous avez effectue un total de "${nb_changement}"changements pour arriver a destination,votresante mental est de" ${sante_mentale})
}
if (santementale == 0) {           
    console.log(`EXPLOSION !`)
}



