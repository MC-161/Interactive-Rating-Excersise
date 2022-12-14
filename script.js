submit_btn = document.querySelector('.submit_btn')
ratings = document.querySelector('.ratings')
div1 = document.querySelector('.start')
div2 = document.querySelector('.end')
loader = document.querySelector('.loader')
user_rating = document.querySelector('.result_num')


ratings.addEventListener('click', (e) =>{
  e.preventDefault();
  if(e.target.classList == 'rating_num'){
    rating = e.target.innerText
    storeRating(rating)
  }
  e.target.classList.toggle('submit_btn_active')
})


const storeRating = (rating) =>{
  user_rating.innerText = rating
}


submit_btn.addEventListener('click', (e) =>{
  div1.remove()
  showLoader()
  showContent()
})

const showLoader = () =>{
  loader.style.display = 'block'
  setTimeout(hideLoader,1000) 
}

const hideLoader = () => {
  loader.style.display = 'none'
  div2.style.display = 'flex'
}
const showContent = () =>{
  setTimeout(hideLoader,3000)
}