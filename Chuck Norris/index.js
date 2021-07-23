const buttonElement = document.querySelector('#button');
const jokeContainer = document.querySelector('.joke-container');
const url = 'https://api.chucknorris.io/jokes/random';


buttonElement.addEventListener('click', () => {
    fetch(url)
        .then((response) => {
            return response.json();
        })

        .then(data => {
            jokeContainer.innerHTML = "";
            let joke = data.value;
            let $p = document.createElement("p");
            $p.textContent = joke;
            jokeContainer.append($p);
        })
});