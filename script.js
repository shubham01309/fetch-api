let one = document.getElementById('one');
let two = document.getElementById('two');
let dog = document.getElementById('dog');
let cat = document.getElementById('cat');

dog.addEventListener('click', cityChange)
cat.addEventListener('click', placeChange)

function cityChange(){
    fetch('https://random.dog/woof.json')
    .then(res => res.json())
    .then(data => {
        one.innerHTML = `<img src ="${data.url}"/>`
    })
}

async function placeChange(){
    const res = await fetch('https://icanhazdadjoke.com/', 
    {
        headers: {
            'Accept': 'application/json'
        }

    });
    const jokes = await res.json();
    two.innerHTML = jokes.joke;
    // two.innerHTML = jokes.joke;
    // fetch('https://icanhazdadjoke.com/')
    // .then(res => res.json())
    // .then(data => {
    //     two.innerHTML = data.joke;
    // })
}