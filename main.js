let navButton = document.querySelector('.nav-button');
let navbar = document.querySelector('.myNav')
const rightAnim = document.querySelector('#right-anim')
const leftAnim = document.querySelector('#left-anim')

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

window.addEventListener('scroll',function(){
    let position = this.scrollY
    if(position >= 700){
        rightAnim.classList.add('right-anim')
        leftAnim.classList.add('left-anim')
    }else{
        rightAnim.classList.remove('right-anim')
        leftAnim.classList.remove('left-anim')
    }
},false)