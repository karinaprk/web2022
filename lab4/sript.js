const p = document.querySelector('.colored_p');
const div = document.querySelector('.colored_div');
const image = document.querySelector('.img');
console.log(image);

p.addEventListener('click', () => {
    p.classList.toggle('colored_p_toggle');
});

div.addEventListener('click', () => {
    div.classList.toggle('colored_div_toggle');
});

image.addEventListener('click', () => {
    image.classList.toggle('image_toggle');
});