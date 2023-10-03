fetch('https://imdb8.p.rapidapi.com/auto-complete?q=avenger', {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'eea731384bmsh6095c490248b4d5p1dbe05jsn7bb56b3f6ec2',
            'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        const arrayMovies = data.d
        arrayMovies.map((element) => {
            console.log(element)
            const title = element.l
            const image = element.i.imageUrl

            const cast = element.s
            const poster = `
          <div>
           <img src="${image}" />
           <h2>${title}</h2>
           <small>${cast}</small>
          </div>
          `
            document.getElementById('container').innerHTML += poster

        })
    })
    .catch(err => {
        console.log(err);
    });