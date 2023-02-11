const eventRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

const fontSizeControl = ({ currentTarget }) =>
    (textRef.style.fontSize = `${currentTarget.value}px`);

eventRef.addEventListener('input', fontSizeControl);

