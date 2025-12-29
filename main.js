let navButton = document.querySelector('.nav-button');
let navbar = document.querySelector('.myNav')

navButton.addEventListener('click',function(){
    navButton.classList.toggle('change')
} ,false)

window.addEventListener('scroll',function(){
    let position = this.scrollY
    if(position >= 200){
        navbar.classList.add('custom-navbar')
    }
    else{
        navbar.classList.remove('custom-navbar')
    }
},false)
