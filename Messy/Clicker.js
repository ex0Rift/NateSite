
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
//calls this to ensure ability one is enabled and enables it
function AbilityOneCheck(){
    if (AbilityOne==1){
        document.getElementById("Ability-one").disabled=true;
        
        document.getElementById("Ability-one-pricetag").textContent="Owned";
    }
    else{
        document.getElementById("Ability-one").disabled=false;
        document.getElementById("Ability-one-pricetag").textContent="25,000,000";
    }
}

function HalfCostOnclick(){
    
}