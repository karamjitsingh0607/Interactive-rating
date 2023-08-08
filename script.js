const listItems=document.getElementsByClassName("list-item");
let ratingNumber=0;

let mainSection=document.getElementById('main-section');
let ratingContainer=document.getElementById('rating-container');
let thanksCard=document.getElementById('thanks-template');
let submitBtn=document.getElementById("rating-btn");

for(let i=0;i<listItems.length;i++){
    listItems[i].addEventListener('click',(e)=>{
        ratingNumber=e.target.textContent;
    })
}

submitBtn.addEventListener('click',()=>{
    ratingContainer.style.display="none";
    let thanksCardClone=thanksCard.content.cloneNode(true);
    let rating=thanksCardClone.querySelector('.thanks-rating');
    rating.innerText=`You selected ${ratingNumber} out of 5`;
    mainSection.appendChild(thanksCardClone);
})
