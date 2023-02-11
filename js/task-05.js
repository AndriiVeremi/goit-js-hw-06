
const refs = {
    nameLabel: document.querySelector('#name-output'),
    input: document.querySelector('#name-input'),
}

refs.input.addEventListener('input', onInputChange); 

function onInputChange(event) {      
    console.log(event.currentTarget.value);
    refs.nameLabel.textContent = event.currentTarget.value;
}
