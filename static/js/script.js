const links = document.querySelectorAll('.link');



if(window.location.pathname.includes('/email')){
    document.getElementById('mail').style.borderBottom = '2px solid #5ED4F3'
} else if(window.location.pathname.includes('/sms')){
    document.getElementById('sms').style.borderBottom = '2px solid #5ED4F3'
} else if(window.location.pathname=='/'){
    document.querySelector('nav').style.display = 'none'
}

for(let i=0; i<links.length; i++) {

    links[i].addEventListener('click', (e)=>{
        for(let j=0; j<links[i].length; j++){
            console.log(links[j])
            links[j].classList.remove('active');
        }
        links[i].classList.add('active')
    })
}



links.map(link => link.addEventListener('click', 
    // link.classList.add('active'))
    console.log(link)
// }
))