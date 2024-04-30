let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#btn");
let newGameBtn=document.querySelector(".new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");


let turn0=true; //turn of player 0 or player x


// winning patterns
//2d array
const winPatterns=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],
];

boxes.forEach(box=> {
    box.addEventListener("click",()=>{

      if(turn0){
        box.innerText="0";
        turn0=false;
        
      }else
      {
        box.innerText="X";
        turn0=true;
        
      }
      box.disabled= true;
      checkWinner();
      
      
      
    })
    
});


const resetGame=()=>{
turn0=true;

enabledBtn();
msgContainer.classList.add("hide");



};

const disabledBtn=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};


const enabledBtn=()=>{
  for(let box of boxes){
      box.disabled=false;
      box.innerText="";
  }
};



 const showWinner=(winner)=>{
    msg.innerText=`Congratulations winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBtn();
 };





const checkWinner= ()=> {
for(let patterns of winPatterns){
    let pos1val=boxes[patterns[0]].innerText;
    let pos2val=boxes[patterns[1]].innerText;
    let pos3val=boxes[patterns[2]].innerText;

    if(pos1val !="" && pos2val !="" && pos3val !=""){

        if(pos1val ===pos2val && pos2val ===pos3val){
            console.log("winner",pos1val);
            showWinner(pos1val);}
           
   
  }
           
        
    }

};




newGameBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);

