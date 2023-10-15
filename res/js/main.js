const baller=document.getElementById("baller");
const clickUpgrade=document.getElementById("clikupgrade");
const autoClicker = document.getElementById("autockicker");
const clickUpgradeCostDisplay = document.getElementById("displaycostclickupgrade");
const autoUpgradeCostDisplay= document.getElementById("displaycostautoupgrade");
const clickUpgradeLvl=document.getElementById("clickupgradelvl");
const autoUpgradeLvl=document.getElementById("autoupgradelvl");
const barakUpgradeLvl=document.getElementById("barakupgradelvl"); //need dodelat
const barak= document.getElementById("buisness")//need dodelat
const barakCostDisplay=document.getElementById("displaycostbarak")//need dodelat


let pocet=document.getElementById("pocet");
let pocetPenez = 0;
let pocetPenezZaClick = 1;
let clickUpgradeCost = 100;
let autoClickerCost = 500;
let bruhinterval;
let autockickerIncrease = 0;
let clickUpgradeLvlCounter = 0;
let autoUpgradeLvlCounter = 0;
let barakUpgradeLvlCounter = 0; //need dodelat
let barakCost = 5000;//need dodelat






baller.onclick = () => {
    pocetPenez += pocetPenezZaClick;
    pocet.innerHTML=" " + pocetPenez;
    console.log(pocetPenez);
   
}

function cheats(){

    pocetPenez += 500
    pocet.innerHTML=" " + pocetPenez;
    console.log(pocetPenez);
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
    
    }
}

function cheats2(){
    pocetPenez += 5000;
    pocet.innerHTML=" " + pocetPenez;
    console.log(pocetPenez);
}







   