let selection=['rock','paper','scissor'];
let win=0;
let lose=0;
//return either rock paper scissor
function computerPlay(){
    return selection[Math.floor(Math.random()*3)];
}
console.log(computerPlay());
function playRound(playerSelection,computerSelection){
    console.log(playerSelection, computerSelection)
    if(playerSelection===computerSelection)
    {return 'Draw';}
    else if(playerSelection==='scissor'&&computerSelection==='paper'
    ||playerSelection==='paper'&&computerSelection==='rock'||playerSelection==='rock'&&computerSelection==='scissor')
    {
        win++;
        winPoint.textContent=`win: ${win}`;;
        return 'win';
    }
    else 
    {
        lose++;
        losePoint.textContent=`lose: ${lose}`;
        return 'lose';
    }
}
function announce(){
    if(win>=5)
    {announcement.textContent='the player win'}
    else if(lose>=5)
    {announcement.textContent='the computer win'}
}
const btn=document.querySelectorAll('button');
const message=document.querySelector('#result');
const announcement=document.querySelector('#announce');
const winPoint=document.querySelector('#win');
const losePoint=document.querySelector('#lose');
btn.forEach((button)=>{button.addEventListener('click',()=>message.textContent=(playRound(button.id,computerPlay())))});
btn.forEach((button)=>{button.addEventListener('click',()=>announce())});
/*function game(){
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
}*/