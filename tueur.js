/*Un tueur en série namemé Jason est en cavale. Il est caché quelque part en forêt.
Une équipe de choc est présente pour le neutraliser.
Nous avons besoin d’un tueur namemé Jason et qui possède 100 points de vie.
Nous avons besoin de Caractéristiques de personnages avec des names bien clichés (nerd, sportif, blonde…),
une probabilité de mourir, une de mettre des dégâts et une de mourir en mettant des dégâts (ex: 0.3, 0.5, 0.2)
Nous avons besoin de 5 Survivants avec un name généré aléatoirement d’un tableau de prénames et d’une
caractéristique prise de celles disponibles (toujours aléatoire).
Tant que le tueur n’est pas mort ou que les survivants n’ont pas tué Jason :
Le tueur attaque un des survivants :
- soit le survivant meurt
- soit le survivant esquive et inflige 10 points de dégâts
- soit le survivant inflige 15 points de dégâts mais meurt
Les morts seront affichés à la fin
Un message est attendu pour chaque action (Jason a tué X, X a esquivé et a infligé X dmg, Jason est mort,
Les survivants ont gagné mais RIP à X, X, X…)*/
let tableaumorts = ""
let name_survivants = [        
    'Abdel Hamid ', 
    'Abdel Kader ',
    'Abdel Majid',
    'Abdel Malik',
    'Abdel Rahman',
    'Abdel Aziz'
 ];
let caracteristiques = [            
    'bebete',
    'atlethique',
    'geek',
    'effrayer',
    'haineux',
    'chanceux',
    'idiot'
 ]
 class Personnage {        
    constructor(name, hp, attaque, att_prob, dodge_and_hit_prob) {
        this.name = name
        this.hp = hp
        this.degats = attaque
        this.contreattaque = att_prob
        this.sacrifice = dodge_and_hit_prob
    }

   attaquer(target){        
    if (Math.random() < this.degats) {
        console.log(${this.name} "attaque" ${target.name} "et lui inflige" ${this.degats} "points de degats." )
        target.hp -= this.degats;
    }
    else {
        console.log(${this.name}"a rate son attaque contre" ${target.name});
    }
}
encaisserDegats(attaque) {     
    if (Math.random() < this.contrecoup) {
        console.log(${this.name} "contre-attaque et encaisse" ${attaque}"points de degâts.");
        this.hp -= attaque;
    }
    else {
        console.log(${this.name} "encaisse" ${attaque} "points de degâts.");
    }

    if (this.hp <= 0) {
        console.log(${this.name} "a ete vaincu");
    }
}
}

class Mechant {     
constructor(name_mechant, hp, attaque, att_prob, dodge_and_hit_prob) {
    this.name_mechant = name
    this.hp = hp
    this.degats = attaque
    this.contreattaque = att_prob
    this.sacrifice = dodge_and_hit_prob
}

attaquer(target){
    if (Math.random() < this.attaque) {
        console.log(${this.name} "attaque" ${target.name} "et lui inflige" ${this.degats} "points de degats.")
        target.hp -= this.degats;
    }
    else {
        console.log(${this.name} "a rate son attaque contre" ${target.name});
    }
}

encaisserDegats(attaque) {
    if (Math.random() < this.contrecoup) {
        console.log(${this.name} "contre-attaque et encaisse" ${attaque} "points de degâts.");
        this.hp -= attaque;
    }
    else {
        console.log(${this.name} "encaisse" ${attaque} "points de degâts.");
    }

    if (this.hp <= 0) {
        console.log(${this.name} "a ete vaincu.");
    }
}
}

let survivants = new Personnage(name_survivants[Math.floor(Math.random()*4)] + caracteristiques[Math.floor(Math.random() * 4)], 100, 20, 0.8, 0.2);    
let survivants2 = new Personnage(name_survivants[Math.floor(Math.random()*4)] + caracteristiques[Math.floor(Math.random() * 4)], 100, 20, 0.6, 0.4);
let survivants3 = new Personnage(name_survivants[Math.floor(Math.random()*4)] + caracteristiques[Math.floor(Math.random() * 4)], 100, 20, 0.7, 0.3);
let survivants4 = new Personnage(name_survivants[Math.floor(Math.random()*4)] + caracteristiques[Math.floor(Math.random() * 4)], 100, 20, 0.8, 0.2);
let survivants5 = new Personnage(name_survivants[Math.floor(Math.random()*4)] + caracteristiques[Math.floor(Math.random() * 4)], 100, 20, 0.7, 0.3);

let tableausurvivants = [survivants, survivants2, survivants3, survivants4, survivants5];

let i = 0;

let tueur = new Mechant("Jason ", 100, 80, 0.8, 0.5);     

let tour = 1;                    
while (tableausurvivants[i%tableausurvivants.length].hp > 0 && tueur.hp > 0) {       
console.log("Tour ${tour}:");

tableausurvivants[i%tableausurvivants.length].attaquer(tueur);

if (tueur.hp <= 0) {   
    console.log(${tableausurvivants[i%tableausurvivants.length].name} "a tué Jason.")
    break;
}

tueur.attaquer(tableausurvivants[i%tableausurvivants.length]);

if (tableausurvivants[i%tableausurvivants.length].hp <= 0) {
    console.log(${tueur.name} a vaincu ${tableausurvivants[i%tableausurvivants.length].name}")
    tableaumorts += tableausurvivants[i%tableausurvivants.length].name + ", ";
    break;
}

console.log(${tableausurvivants[i%tableausurvivants.length].name} : ${tableausurvivants[i%tableausurvivants.length].hp} hp");
console.log(${tueur.name} : ${tueur.hp} "hp");
tour++;
i++;
}

if (tableausurvivants[i%tableausurvivants.length].hp <= 0) {        
console.log("Le heros a ete tuer. Le tueur gagne !");
console.log("Les heros suivants sont mort : " + tableaumorts)
} else if (tueur.hp <= 0) {
console.log("Le tueur a ete tuer  ! Le heros gagne !");
console.log("Les heros suivants sont mort: " + tableaumorts)
} else {
console.log("Le combat se termine en match nul. Le heros et le tueur sont tous les deux epuises !");
console.log("Les heros suivants sont mort au cours de la bataille : " + tableaumorts)
}
