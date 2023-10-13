const baller=document.getElementById("baller");
const clickUpgrade=document.getElementById("clikupgrade");
const autoClicker = document.getElementById("autockicker");
const clickUpgradeCostDisplay = document.getElementById("displaycostclickupgrade");



let pocet=document.getElementById("pocet");
let pocetPenez = 0;
let pocetPenezZaClick = 1;
let clickUpgradeCost = 100;
let autoClickerCost = 500;
let bruhinterval;
let autockickerIncrease = 0;







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

        autockickerIncrease += 20;
        pocet.innerHTML=" " + pocetPenez;
        clearInterval(bruhinterval);
        bruhinterval = setInterval(() => {
            pocetPenez += autockickerIncrease;
            pocet.innerHTML=" " + pocetPenez;
        },1000);

    }
}







   