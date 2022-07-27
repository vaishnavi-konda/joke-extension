fetch('https://v2.jokeapi.dev/joke/Any?type=single')
  .then(data => data.json())
  .then(value => {
    const jokeText = document.getElementById('jokeText');
    jokeText.innerHTML = value.joke;
  });
