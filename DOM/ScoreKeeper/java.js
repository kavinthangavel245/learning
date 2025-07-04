const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
p1display = document.querySelector('#p1display');
p2display = document.querySelector('#p2display');
resetButton = document.querySelector('#reset');
const winningscore = document.querySelector('#topscore');
let p1score = 0;
let p2score = 0;
let winningScore = 5;
let isGameOver = false;

p1Button.addEventListener('click',function(){
    if (!isGameOver){
         p1score += 1;

        if (p1score === winningScore)
        {
            isGameOver = true;
            p1display.classList.add('has-text-success');
            p2display.classList.add('has-text-danger');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p1display.textContent = p1score;
    }        
})

p2Button.addEventListener('click',function(){
    if (!isGameOver){
         p2score += 1;

        if (p2score == winningScore)
        {
            isGameOver = true;
            p2display.classList.add('has-text-success');
            p1display.classList.add('has-text-danger');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p2display.textContent = p2score;
    }        
})
winningscore.addEventListener('change',function(){
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click',reset);
    
    function reset() {
    isGameOver = false;
    p1score =0;
    p2score =0;
    p1display.textContent = 0;
    p2display.textContent = 0;
    p1display.classList.remove('has-text-success','has-text-danger');
    p2display.classList.remove('has-text-success','has-text-danger');
    p1Button.disabled = false;
    p2Button.disabled = false;
}