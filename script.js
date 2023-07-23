const adressopen = document.querySelector('#adress-form')
const adressclose = document.querySelector('#adress-close')

// console.log(adress)
adressopen.addEventListener("click", function(){
    document.querySelector('.adress-form').style.display = "flex"
})
adressclose.addEventListener("click", function(){
    document.querySelector('.adress-form').style.display = "none"
})
//--------------------------------------------
const imglimit = document.querySelectorAll('.slider-content-left-top img')
let index = 0

const rightbtn = document.querySelector('.fa-chevron-right')
rightbtn.addEventListener("click", function(){
    index = index + 1
    if(index>imglimit.length-1){
        index = 0
    }
    removeactive()
    document.querySelector(".slider-content-left-top").style.right = index * 100 + "%"
    imgli[index].classList.add("active")
})
const leftbtn = document.querySelector('.fa-chevron-left')
leftbtn.addEventListener("click", function(){
    index = index - 1
    if(index<0){
        index = imglimit.length-1
    }
    removeactive()
    document.querySelector(".slider-content-left-top").style.right = index * 100 + "%"
    imgli[index].classList.add("active")
})
//--------------------------------------------
const imgli = document.querySelectorAll('.slider-content-left-bottom li')
imgli.forEach(function(image,index){
    image.addEventListener("click",function(){
        removeactive()
        document.querySelector(".slider-content-left-top").style.right = index * 100 + "%"
        image.classList.add("active")
    })
})
function removeactive(){
    let imgactive = document.querySelector('.active')
    imgactive.classList.remove("active")
}
//--------------------------------------------
function imgauto(){
    index = index + 1
    if(index > imglimit.length-1){
        index = 0
    }
    removeactive()
    document.querySelector('.slider-content-left-top').style.right = index * 100 + "%"
    imgli[index].classList.add("active")
}
setInterval(imgauto, 3000)
//--------------------------------------------
const imglimitproduct = document.querySelectorAll('.slider-product-one-content-items')
const rightbtnproduct = document.querySelector('.fa-chevron-right-product')
rightbtnproduct.addEventListener("click", function(){
    index = index + 1
    if(index>imglimitproduct.length-1){
        index = 0
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = index * 100 + "%"
})
const leftbtnproduct = document.querySelector('.fa-chevron-left-product')
leftbtnproduct.addEventListener("click", function(){
    index = index - 1
    if(index<0){
        index = imglimitproduct.length-1
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = index * 100 + "%"
})