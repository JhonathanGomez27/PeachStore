const images = document.querySelectorAll('.img');
const containerImage = document.querySelector('.container-img');
const imageContainer = document.querySelector('.img-show');
const closeModal = document.querySelector('.bx.bx-x');

images.forEach(image =>{
    image.addEventListener('click',()=>{
        addImage(image.getAttribute('src'),image.getAttribute('alt'))
    })
})

const addImage =  (srcImage,alt)=>{
    containerImage.classList.toggle('move');
    imageContainer.classList.toggle('show');
    imageContainer.src = srcImage;
}

closeModal.addEventListener('click', ()=>{
    containerImage.classList.toggle('move')
    imageContainer.classList.toggle('show');
})

window.sr = ScrollReveal();
sr.reveal('.imgdur', {
    duration: 2000,
    origin: 'bottom',
    distance: '-100px',
    reset: true
});


sr.reveal('.texdur', {
    duration: 4000,
    origin: 'top',
    distance: '-100px',
    reset: true
});

sr.reveal('.logoclass', {
    duration: 1000,
    origin: 'top',
    distance: '-100px',
    rotate: {
        x: 20,
        z: 20
    }
});

sr.reveal('.animated', {
    duration: 3000,
    origin: 'bottom',
    distance: '-200px',
    reset: true
});

sr.reveal('.fomr-colms2', {
    duration: 3000,
    origin: 'right',
    distance: '-500px',
    reset: true,
});


sr.reveal('.fomr-colms4', {
    duration: 2000,
    origin: 'left',
    distance: '-100px',
    reset: true,
    rotate: {
        x: 1,
        y: 180
    }
});


sr.reveal('.img', {
    duration: 3000,
    origin: 'bottom',
    distance: '-200px',
    reset: true
});

sr.reveal('.textoTam', {
    duration: 3000,
    origin: 'left',
    distance: '-200px',
    reset: true
});

sr.reveal('.contacto', {
    duration: 3000,
    origin: 'bottom',
    distance: '-200px',
    reset: true
});

sr.reveal('.page-footer', {
    duration: 3000,
    origin: 'top',
    distance: '-200px',
    reset: true
});




