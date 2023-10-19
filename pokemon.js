class pokemon{
    constructor(name, attack, defense, hp, luck){
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck
    }
    islucky(){
        return Math.random()< this.luck;
    }
    attackpokemon(Otherpokemon){
        if (this.islucky()){
            let degat = this.attack - Otherpokemon.defense;
            if (degat>0){
                Otherpokemon.hp-=degat;
                console.log(this.name,"effectue une attaque de ",this.attack,"envers",Otherpokemon.name,"et lui inflige",degat,",",Otherpokemon.name,"a",Otherpokemon.hp,"point de vie")
            }
        else {console.log("rate son attaque");
        }
                
                           }
                               }
              }   
    let pokemon1 = new pokemon("simiabraz", 40, 20, 100, 0.6) 
    let pokemon2 = new pokemon("anphinobi", 50, 30, 100, 0.3)
while (pokemon1.hp > 0 && pokemon2.hp > 0) {
    pokemon1.attackpokemon(pokemon2);
    if (pokemon2.hp<=0){
    console.log(pokemon2.name,"est mort",pokemon1.name,"est vaiqueur .");
    break
    }
    pokemon2.attackpokemon(pokemon1);
    if (pokemon1.hp <= 0) {
        console.log(pokemon1.name, "est mort", pokemon2.name, "gagne.");
        break;
     }
    }


