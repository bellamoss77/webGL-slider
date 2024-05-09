document.addEventListener('DOMContentLoaded', () => {
    const slideshow = document.getElementById('slideshow');
    const slides = document.getElementById('slides-list');

    const images = [
        {
            src: 'https://github.com/bellamoss77/webGL-slider/blob/main/images/spring-nature_1.png?raw=true',
            alt: 'spiky pink wildflowers',
            caption: 'Spiky Pink Wildflowers',
            id: 1
        }, {
            src: 'https://github.com/bellamoss77/webGL-slider/blob/main/images/spring-nature_2.png?raw=true',
            alt: 'stately couple (geese)',
            caption: 'Stately Couple',
            id: 2
        }, {
            src: './images/spring-nature_3.png',
            alt: 'stately couple (geese)',
            caption: 'Stately Couple #2',
            id: 3
        }, {
            src: './images/spring-nature_4.png',
            alt: 'chatting goose',
            caption: 'Chatty Cathy',
            id: 4
        }, {
            src: './images/spring-nature_5.png',
            alt: 'goose grooming himself',
            caption: 'Grooming Time',
            id: 5
        }, {
            src: './images/spring-nature_6.png',
            alt: 'goose posing',
            caption: 'Strike a Pose',
            id: 6
        }, {
            src: './images/spring-nature_7.png',
            alt: 'goose posing',
            caption: 'Strike a Pose #2',
            id: 7
        }, {
            src: './images/spring-nature_8.png',
            alt: 'geese',
            caption: 'Mirror Me',
            id: 8
        }, {
            src: './images/spring-nature_9.png',
            alt: 'geese',
            caption: 'Mirror Me #2',
            id: 9
        }, {
            src: './images/spring-nature_10.png',
            alt: 'geese',
            caption: 'Party Pack',
            id: 10
        }, {
            src: './images/spring-nature_11.png',
            alt: 'items in a window',
            caption: 'Tools of the Creator',
            id: 11
        }, {
            src: './images/spring-nature_12.png',
            alt: 'bird on a branch',
            caption: 'Peaceful Reflection',
            id: 12
        }, {
            src: './images/spring-nature_13.png',
            alt: 'plants',
            caption: 'Blurs and Details',
            id: 13
        }, {
            src: './images/spring-nature_14.png',
            alt: 'flowers',
            caption: 'Creep Encroach',
            id: 14
        }, {
            src: './images/spring-nature_15.png',
            alt: 'purple lilacs',
            caption: 'Royal Splendor',
            id: 15
        }, {
            src: './images/spring-nature_16.png',
            alt: 'dog',
            caption: 'Curiosity',
            id: 16
        }, {
            src: './images/spring-nature_17.png',
            alt: 'lilac',
            caption: 'Lonely Beauty',
            id: 17
        }, {
            src: './images/spring-nature_18.png',
            alt: 'field roses',
            caption: 'Fearless Field Rose',
            id: 18
        }, {
            src: './images/spring-nature_19.png',
            alt: 'close up lilac',
            caption: 'Ready For My Closeup',
            id: 19
        }, {
            src: './images/spring-nature_20.png',
            alt: 'lilacs',
            caption: 'Gradiations',
            id: 20
        }
    ]

    const createSlides = (image) => {
        const slide = document.createElement('div');
            slide.className = 'slide';

            const imgElement = document.createElement('img');
            imgElement.className = 'slide-img';
            //imgElement.setAttribute('crossorigin', '');

            imgElement.src = image.src;
            imgElement.alt = image.alt;
            imgElement.caption = image.caption;
            imgElement.id = image.id;

            const slideCaption = document.createElement('h2');
            slideCaption.className = 'slide-title';
            slideCaption.setAttribute('data-title', `${imgElement.caption}`);
            slideCaption.textContent = `${imgElement.caption}`;

            slide.appendChild(imgElement);
            slide.appendChild(slideCaption);
            slides.appendChild(slide);
    }
    const generateImgs = () => {
        images.forEach(image => {
            createSlides(image);
        })
    }
    generateImgs();
    
        

})