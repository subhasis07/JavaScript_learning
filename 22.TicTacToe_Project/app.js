let boxes= document.querySelectorAll("#box");
let reset= document.querySelector("#reset");

let turn0=true;

const winningPatterns= [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],   
];

boxes.forEach((box)=>{
    box.addEventListener('click', ()=>{
        console.log("box clicked");
        if(turn0){
            box.innerText= "0";
            turn0=false;
        }else{
            box.innerText="X";
            turn0=true;
        }

        box.disabled=true;
    });
});


