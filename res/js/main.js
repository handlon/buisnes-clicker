const baller=document.getElementById("baller");
const clickUpgrade=document.getElementById("clikupgrade");
const autoClicker = document.getElementById("autockicker");
const clickUpgradeCostDisplay = document.getElementById("displaycostclickupgrade");
const autoUpgradeCostDisplay= document.getElementById("displaycostautoupgrade");
const clickUpgradeLvl=document.getElementById("clickupgradelvl");
const autoUpgradeLvl=document.getElementById("autoupgradelvl");
const barakUpgradeLvl=document.getElementById("barakupgradelvl"); 
const barak= document.getElementById("buisness");
const barakCostDisplay=document.getElementById("displaycostbarak");
const barakobr = document.getElementById("barak")


let pocet=document.getElementById("pocet");
let pocetPenez = 0;
let pocetPenezZaClick = 1;
let clickUpgradeCost = 100;
let autoClickerCost = 500;
let bruhinterval;
let autockickerIncrease = 0;
let clickUpgradeLvlCounter = 0;
let autoUpgradeLvlCounter = 0;
let barakUpgradeLvlCounter = 0;
let barakCost = 5000;



function personality() {
    if (pocetPenez >= 2000) {
        baller.src = "res/img/kokot.png";
        }
    if (pocetPenez >= 6000){
        baller.src = "res/img/normal.png"
    }
    if (pocetPenez >= 10000){
        baller.src = "res/img/wealthy.png"
    }
    if (pocetPenez >= 15000){
        baller.src = "res/img/more wealthy.png"
    }
    if (pocetPenez >= 20000){
        baller.src = "res/img/L.jpg"
    }
    if (pocetPenez < 2000){
        baller.src = "res/img/bezdomovec.png"
    }
}


baller.onclick = () => {
    pocetPenez += pocetPenezZaClick;
    pocet.innerHTML=" " + pocetPenez;
    console.log(pocetPenez);
    personality();


}

function cheats(){

    pocetPenez += 500
    pocet.innerHTML=" " + pocetPenez;
    console.log(pocetPenez);
    personality();
}

clickUpgrade.onclick = () => {
    if (pocetPenez >= clickUpgradeCost) {
        pocetPenez -= clickUpgradeCost;
        clickUpgradeCost += 100;
        clickUpgradeLvlCounter +=1;
        clickUpgradeLvl.innerHTML="lvl: "+ clickUpgradeLvlCounter;
        
        pocetPenezZaClick += 5;
        pocet.innerHTML="" + pocetPenez;
        console.log(pocetPenez);
        clickUpgradeCostDisplay.innerHTML="click upgrade cost: " + clickUpgradeCost;
        personality();
    
    }

}

autoClicker.onclick = () => {
    if (pocetPenez >= autoClickerCost) {
        pocetPenez -= autoClickerCost;
        autoClickerCost += 100;
        autoUpgradeCostDisplay.innerHTML="autoclicker upgrade cost: "+autoClickerCost;
        autoUpgradeLvlCounter +=1;
        autoUpgradeLvl.innerHTML="lvl: "+autoUpgradeLvlCounter;

        autockickerIncrease += 20;
        pocet.innerHTML=" " + pocetPenez;
        clearInterval(bruhinterval);
        bruhinterval = setInterval(() => {
            pocetPenez += autockickerIncrease;
            pocet.innerHTML=" " + pocetPenez;
            personality();
        
        },1000);
        

    }
}

barak.onclick = () => {
    if( pocetPenez >= barakCost) {

        pocetPenez -= barakCost;
        barakCost += 5000;
        barakCostDisplay.innerHTML="barak upgrade cost: "+barakCost;
        barakUpgradeLvlCounter +=1;
        barakUpgradeLvl.innerHTML="lvl: "+ barakUpgradeLvlCounter;
        pocet.innerHTML=" " + pocetPenez;
        if(barakUpgradeLvlCounter>3){
            barakUpgradeLvl.innerHTML="lvl: max platis zbytecne"
        }
        personality();
        barakzmena();
      
    
    }
}

function cheats2(){
    pocetPenez += 57000;
    pocet.innerHTML=" " + pocetPenez;
    console.log(pocetPenez);
    personality();

}

function barakzmena() {
    if (barakUpgradeLvlCounter == 0) {
        barakobr.src = "./res/img/podmostem.png";
    } else if (barakUpgradeLvlCounter == 1) {
        barakobr.src = "./res/img/normalhouse.jpg";
    } else if (barakUpgradeLvlCounter == 2) {
        barakobr.src = "./res/img/nicehouse.jpg";
    } else if (barakUpgradeLvlCounter == 3) {
        barakobr.src = "./res/img/megaultra.jpg";
    } else {
        barakobr.src = "./res/img/megaultra.jpg";
    }
    console.log("jso koot")
}







   