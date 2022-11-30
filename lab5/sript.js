const form = document.querySelector('#form');
const show = document.querySelector('#showData');
const divSquares = document.querySelector('#squares');

let data = {};

function readData() {
    data = {};
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        let newFrom = new FormData(form);
        console.log(newFrom);
        for(let [name, value] of newFrom) {
            data[name] = value;
        }
        validateData();
       
    });
}

function validateData(){
    for(let key in data) {
        if(data[key] == ''){
            alert('Не всі поля заповнені');
            readData();
        }
    }
    showData();
}

function showData(){
    show.innerHTML = 'Response here:';
    for(let key in data) {
        console.log(key);
        show.innerHTML += `<div>${key}: ${data[key]}</div>`;
    }
}

readData();

function showSquares(){
    for(let i=0; i < 36; i++){
        divSquares.innerHTML+=`<div id='blocks'>${i+1}</div>`;
    }
    let blocks = document.querySelectorAll("#blocks");
    let colors = document.querySelector('#colored');
    let color;
    colors.addEventListener('change',() =>{
        color = colors.value;
    });

    blocks.forEach(elements => {
        elements.addEventListener('click',() => {
            blocks.forEach(element => {
                if(elements != element){
                    element.style.cssText = `border:3px solid ${color}; `;
                }
            });
        });
    });

}

showSquares();