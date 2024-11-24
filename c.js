let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let newgame=document.querySelector(".newbtn");
let msgcontainer=document.querySelector(".msg-container");

let msg=document.querySelector("#msg");
let turn0=true; 
const winPattern=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]]
    boxes.forEach((box)=> {
        box.addEventListener("click",()=>{
            if (turn0) {
                box.innerText = "0";
                box.style.color = "blue"; 
                turn0 = false;
            }
            
            else{
                box.innerText="X"
                box.style.color = "red"; 
                turn0=true;
            }  
            box.disabled =true;
            checkwinner()
        });   
    });
      const disablebox =()=>{
        for(let box of boxes)
        {
            box.disabled=true
        }
      }
      const ablebox = () => {
        for(let box of boxes)
        {
            box.disabled=false;
            box.innerText="";
        }
      };
    const showwinner = (winner) => {
        msg.innerText = `Congrats ${winner}!`; // Correct template literal syntax
        msgcontainer.classList.remove("hide");
        disablebox();
    };
    const resetgame =  ()=>{
        turn0=true;
        ablebox();
        msgcontainer.classList.add("hide"); 
        
    };
   
    function checkwinner() {
    for (let pattern of winPattern) {
        console.log("hello");
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        console.log(pos2);
        if (pos1 != " " && pos2 != "" && pos3 != "") {
            if (pos1 == pos2 && pos2 == pos3) {
                showwinner(pos1);
                
            }
        }
    }
};
newgame.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);
