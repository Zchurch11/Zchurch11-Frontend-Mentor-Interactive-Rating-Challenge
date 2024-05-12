const ratings = document.querySelectorAll('.ratings--btn')
const ratingText = document.querySelector('.rating--text')
const submitBtn = document.querySelector('.submit--btn')
const thankYouMessage = document.querySelector('.thankyou--card')
const ratingsCard = document.querySelector('.card')


function selectRating(e){
    let chosenRating = e.target.value
    ratings.forEach(rating => rating.classList.remove('active'))
    e.target.classList.add('active') 
    ratingText.innerText= `You selected ${chosenRating} out of 5`
     console.log (ratingText.innerText)
}

function submitRating(){
    
    ratingsCard.style.display = 'none'
    thankYouMessage.style.display = 'flex'
    

}



ratings.forEach((rating) => rating.addEventListener('click', selectRating))
submitBtn.addEventListener('click', submitRating)