let buttonOne = document.getElementById('imgOne'),
    buttonTwo = document.getElementById('imgTwo'),
    buttonThree = document.getElementById('imgThree'),
    buttonFour = document.getElementById('imgFour'),
    buttonFive = document.getElementById('imgFive'),
    buttonSix = document.getElementById('imgSix'),
    buttonSeven = document.getElementById('imgSeven'),
    currentImage = document.getElementById('currentImage');


buttonOne.addEventListener('click', function() {
    document.getElementById('currentImage').src = '/images/imageOne.jpg';
});

buttonTwo.addEventListener('click', function() {
    document.getElementById('currentImage').src = '/images/imageTwo.JPG';
});

buttonThree.addEventListener('click', function() {
    document.getElementById('currentImage').src = '/images/imageThree.JPG';
});

buttonFour.addEventListener('click', function() {
    document.getElementById('currentImage').src = '/images/imageFour.JPG';
});

buttonFive.addEventListener('click', function() {
    document.getElementById('currentImage').src = '/images/imageFive.JPG';
});

buttonSix.addEventListener('click', function() {
    document.getElementById('currentImage').src = '/images/imageSix.JPG';
});

buttonSeven.addEventListener('click', function() {
    document.getElementById('currentImage').src = '/images/imageSeven.JPG';
});