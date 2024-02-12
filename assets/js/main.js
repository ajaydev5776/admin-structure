const switchbtn = document.querySelector('#switch')
const asidebar = document.querySelector('#asidebar')

switchbtn.addEventListener('click', () =>{
    asidebar.classList.toggle('active')
})