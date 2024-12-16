let button = document.querySelector('button');
let input = document.querySelector('input');
let list = document.querySelector('ul');

button.addEventListener('click', function() {
    let li = document.createElement('li');
    li.innerText = input.value;
    list.appendChild(li);
})