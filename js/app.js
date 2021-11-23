const mainImage = document.querySelector('.gallery-image1 img');
const imagesToClick = document.querySelectorAll('.gallery img');

imagesToClick.forEach(img => img.addEventListener('click', changeImage));

function changeImage(event) {

    imagesToClick.forEach(img => (img.style.opacity = 1))
    event.target.style.opacity = 0.5;
    // let previousMainImage = mainImage.src;
    mainImage.src = event.target.src;
    // event.target.src = previousMainImage;

    if(event.target === mainImage){
        mainImage.src = 'images/big-dart.jpeg';
        event.target.style.opacity = 1;
    }

}