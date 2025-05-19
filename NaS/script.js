
const buttons = document.querySelectorAll(".Btn");
let user = "X";

buttons.forEach(button => {
    button.addEventListener("click", (event) =>{
        if (button.textContent == ""){
            button.textContent = user;
            if (user == "X"){
                user = "O"
            }else{
                user = "X"
            };
            document.getElementById("TurnText").textContent="It is "+ user + " turn";
            WinCheck();
        };
    });
});


function WinCondition(){
    let winner = "A";
    if (user == "X"){
        winner = "O";
    }else{
        winner = "X";
    }
    document.getElementById("TurnText").textContent="THE WINNER IS " + winner;

    buttons.forEach(button => {
        button.disabled=true;
    });
}

function WinCheck(){
    const one = document.querySelector('.Btn[data-id="1"]');
    const two = document.querySelector('.Btn[data-id="2"]');
    const three = document.querySelector('.Btn[data-id="3"]');
    const four = document.querySelector('.Btn[data-id="4"]');
    const five = document.querySelector('.Btn[data-id="5"]');
    const six = document.querySelector('.Btn[data-id="6"]');
    const seven = document.querySelector('.Btn[data-id="7"]');
    const eight = document.querySelector('.Btn[data-id="8"]');
    const nine = document.querySelector('.Btn[data-id="9"]');

    if (
        ((one.textContent==two.textContent && two.textContent==three.textContent) && one.textContent !="") ||
        ((four.textContent==five.textContent && five.textContent == six.textContent) && four.textContent !="")||
        ((seven.textContent==eight.textContent && eight.textContent == nine.textContent) && seven.textContent !="")||
        ((one.textContent == four.textContent && four.textContent == seven.textContent) && one.textContent != "")||
        ((two.textContent == five.textContent && five.textContent == eight.textContent) && two.textContent != "")||
        ((three.textContent == six.textContent && six.textContent == nine.textContent) && three.textContent != "")||
        ((one.textContent == five.textContent && five.textContent == nine.textContent) && one.textContent != "")||
        ((three.textContent == five.textContent && five.textContent == seven.textContent) && three.textContent != "")
    ){
        WinCondition();
    }
}