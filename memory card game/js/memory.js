const cards=document.querySelectorAll('.memory-card');
let hasflippedCard=false;
let firstCard,SecondCard;
let lockboard=false;
function flipcard()
{
    if(lockboard) return;
    if(this===firstCard) return;
    this.classList.add('flip');
    if(!hasflippedCard)
    {
        hasflippedCard=true;
        firstCard=this;
        return;
    }
  
        
        SecondCard=this;
        checkForMatch();


   
    
}
function  checkForMatch()
{
    let isMatch=firstCard.dataset.framework===SecondCard.dataset.framework;
    isMatch?disableCards():unflipedCards();
       
  
}
function disableCards()
{
   
    firstCard.removeEventListener('click',flipcard);
    SecondCard.removeEventListener('click',flipcard); 
    resetBoard();
}
function unflipedCards()
{
    lockboard=true;
    setTimeout(()=>
    {
        firstCard.classList.remove('flip');
        SecondCard.classList.remove('flip');
        resetBoard();
    }
    ,1500);
    
}
function resetBoard()
{
    [hasflippedCard,lockboard]=[false,false];
    [firstCard,SecondCard]=[null,null];
}
(function shuffle()
{
    cards.forEach (card =>
        {
            let random=Math.floor(Math.random()*12);
            card.style.order=random; 

        });
})();
cards.forEach(card=>card.addEventListener('click',flipcard))