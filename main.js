let navButton = document.querySelector('.nav-button');
let navbar = document.querySelector('.myNav')
const rightAnim = document.querySelector('#right-anim')
const leftAnim = document.querySelector('#left-anim')
const card1 = document.querySelector('.card1')
const card2 = document.querySelector('.card2')
const card3 = document.querySelector('.card3')

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

/////////////gallery///////////////////
document.querySelectorAll('.category-link').forEach(item =>{
    item.addEventListener('click',function(){
        let value = this.getAttribute('data-filter')
        this.classList.add('active-item')
        document.querySelectorAll('.category-link').forEach(sibling =>{
            if(sibling !== this){
                sibling.classList.remove('active-item')
            }
        })
        document.querySelectorAll('#filter').forEach(el=>{
            if(value === 'all'){
                el.style.display = 'block' 
            }
            else if(el.classList.contains(value)){
                el.style.display = 'block'
            }else{
                el.style.display = 'none'
            }
        })
    },false)
})
/////////////end of gallery///////////////////
///////////////membership////////////////
window.addEventListener('scroll',()=>{
    let position = this.scrollY
    if(position >= 4800){
        card1.classList.add('move-right')
        card2.classList.add('move-bottom')
        card3.classList.add('move-left')
    }else{
        card1.classList.remove('move-right')
        card2.classList.remove('move-bottom')
        card3.classList.remove('move-left')
    }
},false)