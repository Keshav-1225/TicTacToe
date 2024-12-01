let boxes = document.querySelectorAll('.box');    //stores all the 9 buttons or boxes
let reset = document.querySelector('#reset');        //reset button
let turnO = true;                                   // player-o, player-x
let newBtn = document.querySelector('#new');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');

const winPatterns= [[0,1,2],
                    [0,3,6],
                    [0,4,8],
                    [1,4,7],
                    [2,5,8],
                    [2,4,6],
                    [3,4,5],
                    [6,7,8]];

const resetfun = () => {
    turnO = true;
    for(let box of boxes)
        {
            box.disabled = false;
            box.innerHTML = "";
            msgContainer.classList.add("hide"); 
        }
}
reset.addEventListener("click",resetfun);
newBtn.addEventListener("click",resetfun)

const showWinner = (winner) =>{
    msg.innerHTML = `winner: ${winner}`
    msgContainer.classList.remove("hide");
    for(let box of boxes)
    {
        box.disabled = true;
    }
}
const checkWinner = () =>{
    for (let patterns of winPatterns)
    {
        let pos1Val = boxes[patterns[0]].innerHTML;
        let pos2Val = boxes[patterns[1]].innerHTML;
        let pos3Val = boxes[patterns[2]].innerHTML;
    //    console.log(patterns[0],patterns[1],patterns[2]);
      //  console.log(pos1Val, pos2Val, pos3Val);

        if (pos1Val !="" && pos2Val != '' && pos3Val !='')
        {
            if (pos1Val===pos2Val && pos2Val===pos3Val)
            {
                console.log("winner: ",pos1Val)
                showWinner(pos1Val);
            }
            
        }
    }
}

boxes.forEach(box => {
    box.addEventListener("click",() =>{
        console.log("box was clicked")
        if (turnO == true)
        {                
            box.innerHTML="O";
            turnO=false;
        }else
        {
            box.innerHTML="X";
            turnO=true;
        }
        box.disabled= true;
        checkWinner()
    });
});
