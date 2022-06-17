let selection=['rock','paper','scissor'];
//return either rock paper scissor
function computerPlay(){
    return selection[Math.floor(Math.random()*3)];
}
console.log(computerPlay());