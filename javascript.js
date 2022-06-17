let selection=['rock','paper','scissor'];
let win=0;
let lose=0;
//return either rock paper scissor
function computerPlay(){
    return selection[Math.floor(Math.random()*3)];
}
console.log(computerPlay());
function playRound(playerSelection,computerSelection){
    playerSelection=playerSelection.toLowerCase();
    if(playerSelection===computerSelection)
    {return 'Draw';}
    else if(playerSelection==='scissor'&&computerSelection==='paper'
    ||playerSelection==='paper'&&computerSelection==='rock'||playerSelection==='rock'&&computerSelection==='scissor')
    {
        return 'win';
    }
    else 
    {
        return 'lose';
    }
}
function game(){
    for(let i=0;i<5;i++)
    {
        let player=prompt('rock paper scissor','');
        let computer=computerPlay();
        //console.log(playRound(prompt('rock paper scissor',''),computerPlay()));
        if(playRound(player,computer)==='win')
        {
            win++;
            console.log(`Round ${i+1},player win, player ${player} beat computer ${computer}`);
        }
        else if(playRound(player,computer)==='lose')
        {
            lose++;
            console.log(`Round ${i+1},computer win, computer ${computer} beat player ${player}`);
        }
        else
            console.log(`Round ${i+1},Draw`);
    }
    if(win>lose)
    {
        console.log('you win');
    }
    else if (win<lose)
        console.log('you lose');
    else
        console.log('Draw');
}