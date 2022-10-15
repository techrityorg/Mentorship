const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");

const winConditions =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let options = ["","","","","","","","",""];
let currentPlayer="X";
let running=false;


intializeGame();

function intializeGame () 
{
    cells.forEach(cell => cell.addEventListener("click",cellClicked));
    restartBtn.addEventListener("click",restartGame);
    statusText.textContent=`${currentPlayer}'s turn `;
    running=true;
}
function cellClicked () 
{
    // cellIndex variable carries the index of the clicked cell
    const cellIndex = this.getAttribute("cellindex");

    if (options[cellIndex]!= "" || !running)
    {
        return;
    }
    UpdateCell(this,cellIndex);
    checkWinner();

}
function UpdateCell(cell,index)
{
    options[index]=currentPlayer;
    cell.textContent=currentPlayer;

}
function changePlayer()
{
    currentPlayer = (currentPlayer=='X')?"O":"X";
    statusText.textContent=`${currentPlayer}'s turn`;

}
function checkWinner()
{
    let roundWon = false ;

    for(let i=0;i<winConditions.length;i++)
    {
        const conditions = winConditions[i];
        const cellA = options[conditions[0]];
        const cellB = options[conditions[1]];
        const cellC = options[conditions[2]];
        
        if (cellA == "" || cellB == "" || cellC == "")
        {
            continue;
        }
        if (cellA==cellB && cellB==cellC && cellC==cellA)
        {
            roundWon=true;
            break;
        }
    } 
    if (roundWon == true)
    {
        statusText.textContent=`${currentPlayer} wins!`;
        running=false;
    }
    else if (!options.includes(""))
    {
        statusText.textContent=`Draw`;
        running=false;
    } 
    else {
        changePlayer();
    }
}
function restartGame () 
{
    currentPlayer="X";
    options = ["","","","","","","","",""];
    statusText.textContent = `${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = "");
    running=true;

}
