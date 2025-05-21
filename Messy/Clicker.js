
function AutoSpeedAbility(){
    if (count>=5000000){
        count-=5000000;
        document.getElementById("Ability-one").disabled=true;
        document.getElementById("Ability-one-pricetag").textContent="Owned";
        AbilityOne=1; 
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
        document.getElementById("Ability-one-pricetag").textContent="5,000,000";
    }
}