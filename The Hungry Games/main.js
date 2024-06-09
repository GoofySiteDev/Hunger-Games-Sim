day = 1
dn = "Day"
const headere = document.getElementById("headea")
const ol = document.getElementById("Console")
playerlist = localStorage.getItem("playerlist").split(",")
storedpl = localStorage.getItem("playerlist").split(",")
inventory = []
var kills = {}
for (let i = 0; i < playerlist.length; i++) {
    inventory.push("")
    kills[playerlist[i]] = 0
}
console.log(kills)
console.log(storedpl)

dead = []
one_player = [["", " slept."],
["", " played minecraft in real life."],
["", " touched grass, and lived to tell the tale."],
["", " ate a sus looking berry and was fine."],
["", " masqueraded as Jojo Siwa."],
["", " practiced their Kame-Hame-Ha."],
["", " admired a tree."]]
two_player = [["", " broomed ", " to death."],
["", " roasted ", " to death."],
["Bam! ", " hit ", " with an uno reverse card."],
["", " sent ", " to Jesus with their moldy slipper."],
["", " bored ", " to death with their minecraft videos."]]
one_playercor = [["", " found a corn on the cob.", ""], 
["", " found a USB stick of sad bart simpson edits.", "bart"],
["Much to their surprise, ", " found nothing at all.", ""],
["", " found a copy of Hamilton.", "hamilton"],
["", " found an 80000 dollar baseball card.", "baseball card"],
["", " found a paper airplane.", "paper airplane"],
["", " found the lost relic of the ancient cookie monster civilization.", "relic"],
["", " found a spacebar.", "spacebar"],
["", " found a book of stand up routines.", "stand up routines"],
["Much to their delight, ", " found an acrylic squidward poster.", "acrylic poster"]]
two_playercor = [["Out of rage, ", " screamed, causing ", " to mortally stab them."],
["", " was about to pick some cheese up, but " ," wanted it more and killed them over it."],
["", " ran towards a box of marvel comics, but ", " wanted it more and killed them over it."]]
onrun = [["", " ran and hid in fear of the tickle monster."],
["", " ran from the corny capybara or something."],
["", " didn't feel like getting stabbed, and ran away."],
["After being called a wimp by an npc, ", " ran away in tears."],
["", " smelled flowers, so went to pick them instead."]]
selfdeath = [["", " touched grass, and didn't live to tell the tale."],
["", " drowned in a puddle."],
["", " talked to a discord mod and died of bad breath."],
["", " ate a sus looking berry and wasn't fine."],
["", " slipped on a nuclear button, but fortunately didn't set it off."],
["", " caught a lethal case of Ligma from a bundalusian mountain goat."]]


function nextDay(){
    playerlist = playerlist.sort((a, b) => 0.5 - Math.random());
    console.log(playerlist)
    Console.innerHTML = ""
    document.getElementById("headea").innerHTML = dn + " " + String(day)
    if (day == 1 && dn == "Day"){
        document.getElementById("headea").innerHTML = "Cornucopia Fight";
    }else if(playerlist.length == 1){
        document.getElementById("headea").innerHTML = "Victory and Recap";
    }
    if (dn == "Day"){
        dn = "Night"
    }else if (dn == "Night"){
        dn = "Day"
        day = day + 1
    }
    iterant = -1
    dead = []
    if (playerlist.length == 1){
        victoryRecap();
        console.log(storedpl)
        console.log
    }else if(day == 1 && dn == "Night"){
        cornDec();
    }else{
        normalEvent()
    }
    for (let q = 0; q < dead.length; q++) {
        playerlist.splice(dead[dead.length - q - 1][1], 1)
        console.log("fu")
    }

    console.log(playerlist, dead)
}



function cornDec(){
    iterant = -1
    while (iterant < playerlist.length - 1){
        avante = Math.random()
        if(avante < 0.25){
            iterant += 1
            evente = Math.floor(Math.random()*one_playercor.length)
            Console.innerHTML = Console.innerHTML + "<li>" + one_playercor[evente][0] + playerlist[iterant] + one_playercor[evente][1] + "</li>"
            inventory[iterant] = one_playercor[evente][2]
        }else if (avante < 0.9){
            iterant += 1
            evente = Math.floor(Math.random()*onrun.length)
            Console.innerHTML = Console.innerHTML + "<li>" + onrun[evente][0] + playerlist[iterant] + onrun[evente][1] + "</li>"
        }else if (playerlist.length > 1 && iterant < playerlist.length-2){
            iterant += 2
            evente = Math.floor(Math.random()*two_playercor.length)
            Console.innerHTML = Console.innerHTML + "<li>" + two_playercor[evente][0] + playerlist[iterant-1] + two_playercor[evente][1] + playerlist[iterant] + two_playercor[evente][2] + "</li>"
            dead.push([playerlist[iterant-1], iterant-1])
            kills[playerlist[iterant]] = kills[playerlist[iterant]] + 1
            console.log(playerlist[iterant], kills[playerlist[iterant]])
        }
    }
}

function normalEvent(){
    iterant = -1
    while (iterant < playerlist.length - 1){
        avante = Math.random()
        if(avante < 0.5){
            iterant += 1
            evente = Math.floor(Math.random()*one_player.length)
            Console.innerHTML = Console.innerHTML + "<li>" + one_player[evente][0] + playerlist[iterant] + one_player[evente][1] + "</li>"
        }else if (avante < 0.7){
            iterant += 1
            evente = Math.floor(Math.random()*selfdeath.length)
            Console.innerHTML = Console.innerHTML + "<li>" + selfdeath[evente][0] + playerlist[iterant] + selfdeath[evente][1] + "</li>"
            dead.push([playerlist[iterant], iterant])
        }else if (playerlist.length > 1 && iterant < playerlist.length-2){
            iterant += 2
            evente = Math.floor(Math.random()*two_player.length)
            Console.innerHTML = Console.innerHTML + "<li>" + two_player[evente][0] + playerlist[iterant-1] + two_player[evente][1] + playerlist[iterant] + two_player[evente][2] + "</li>"
            dead.push([playerlist[iterant], iterant])
            kills[playerlist[iterant-1]] = kills[playerlist[iterant-1]] + 1
        }
    }
}

function victoryRecap(){
    document.getElementById("Console2").innerHTML = "The winner of this year's Hangry Games is " + playerlist[0] + "."
    tabble = document.getElementById("tabble")
        tabble.innerHTML = tabble.innerHTML + "<tr><th>Player</th><th>Kills</th><th>Most Used Weapon</th>" 
    for (let i = 0; i < storedpl.length; i++) {
        tabble = document.getElementById("tabble")
        tabble.innerHTML = tabble.innerHTML + "<tr><th>" + storedpl[i] +"</th><th>"+ String(kills[storedpl[i]]) +"</th><th>"+ inventory[i] + "</th></tr>"

    } 
}