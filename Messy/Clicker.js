
function AutoSpeedAbility(){
    if (count>=25000000){
        count-=25000000;
        document.getElementById("Ability-one").disabled=true;
        document.getElementById("Ability-one-pricetag").textContent="Owned";
        AbilityOne=1; 
        SpeedCost=102400;
        AutoSpeed=0.000001;
        clearInterval(intervalId);
        intervalId = setInterval(tick, AutoSpeed);

        updateDisplay();
    }
}

function HalfCostOnclick(){
    if (count>=50000000){
        count-=50000000;
        document.getElementById("Ability-two").disabled=true;
        document.getElementById("Ability-two-pricetag").textContent="Owned";
        AbilityTwo=1;

        ClickCost= Math.floor(ClickCost/2);
        AutoCost = Math.floor(AutoCost/2);

        updateDisplay();
    }
}


//calls this to ensure ability is enabled and enables it
function AbilityCheck(){
    if (AbilityOne==1){
        document.getElementById("Ability-one").disabled=true;
        document.getElementById("Ability-one-pricetag").textContent="Owned";
    }
    else{
        document.getElementById("Ability-one").disabled=false;
        document.getElementById("Ability-one-pricetag").textContent="25,000,000";
    }
    if (AbilityTwo==1){
        document.getElementById("Ability-two").disabled=true;
        document.getElementById("Ability-two-pricetag").textContent="Owned";
    }
    else{
        document.getElementById("Ability-two").disabled=false;
        document.getElementById("Ability-two-pricetag").textContent="50,000,000";
    }
}
