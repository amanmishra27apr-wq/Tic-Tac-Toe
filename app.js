let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let newbtn = document.querySelector(".newgame");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
let winnerFound = false;

let arrWin = [[0, 1, 2], [0, 3, 6], [0, 4, 8],
 [1, 4, 7], [2, 4, 6], [2, 5, 8], [3, 4, 5], [6, 7, 8]];

 const restGame = () => {
    turnO = true;
    winnerFound = false;
    enableBtns();
    msgContainer.classList.add("hide");
 };

 boxes.forEach((box) => {
   box.addEventListener("click", ()=>{
    console.log("box was clicked ")
    if(turnO){
        box.innerText = "O";
        box.style.color = "blue";
        turnO = false;
    }else{
        box.innerText = "X";
        box.style.color = "red";
        turnO = true;
    }
    box.disabled = true;
    
    checkWinner();
    checkDraw(); 
   });
 });

 const disableBtns = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
 };

 const enableBtns = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
 };
 

 const showWinner = (winner) => {
    msg.innerHTML = `Congratulations🥳, Winnwer is ${winner}`;
    msgContainer.classList.remove("hide");
    winnerFound = true;
    disableBtns();
 }

 const checkWinner = () =>{
    for(let pattern of arrWin){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if(pos1Val != ""&& pos2Val != ""&& pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("Winner!", pos1Val);
                showWinner(pos1Val);
            }
        }
    }
 }
 const checkDraw = () => {
    let count = 0;

    boxes.forEach((box) => {
        if (box.innerText !== "") {
            count++;
        }
    });

    if (count === 9 && !winnerFound) {
        msg.innerText = "Game Draw!";
        msgContainer.classList.remove("hide");
        disableBtns();
    }
};

 checkWinner();
 checkDraw(); 

 newbtn.addEventListener("click", restGame);
 resetbtn.addEventListener("click", restGame);