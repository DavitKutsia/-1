const container = document.getElementById('container');
const form = document.querySelector('form');
const sort = document.getElementById('sort-by-year');
const arrow = document.getElementById('arrowup');

let sortDirection = 'up';

sort.addEventListener('click', () => {
    if (sortDirection === 'up') {
        sortDirection = 'down';
        games.sort((a, b) => {
        return b.year - a.year;
        });
        arrow.style.transform = 'rotate(180deg)';
    } else {
        sortDirection = 'up';
        games.sort((a, b) => {
        return a.year - b.year; 
        });
        arrow.style.transform = 'rotate(0deg)';
    }
    container.innerHTML = '';
    games.forEach(game => {
        createCard(game);
    });
});
const gameExample = {
    name: 'name of the game',
    year: 'year of the game',
    genre: 'genre of the game',
    developer: 'developer of the game',
    platform: 'platform of the game',
}

const games = [
  {
      name: 'The Witcher 3: Wild Hunt',
      year: '2015',
      genre: 'Action RPG',
      developer: 'CD Projekt Red',
      platform: 'PlayStation 4, Xbox One, Microsoft Windows, Nintendo Switch',
      banner: `https://source.unsplash.com/random/300x200?sig=${Math.random()}`
  },
  {
      name: 'Red Dead Redemption 2',
      year: '2018',
      genre: 'Action-Adventure',
      developer: 'Rockstar Games',
      platform: 'PlayStation 4, Xbox One, Microsoft Windows, Google Stadia',
      banner: `https://source.unsplash.com/random/300x200?sig=${Math.random()}`
  },
  {
      name: 'The Legend of Zelda: Breath of the Wild',
      year: '2017',
      genre: 'Action-Adventure',
      developer: 'Nintendo',
      platform: 'Nintendo Switch, Wii U',
      banner: `https://source.unsplash.com/random/300x200?sig=${Math.random()}`
  },
  {
      name: 'Grand Theft Auto V',
      year: '2013',
      genre: 'Action-Adventure',
      developer: 'Rockstar Games',
      platform: 'PlayStation 4, Xbox One, PlayStation 3, Xbox 360, Microsoft Windows',
      banner: `https://source.unsplash.com/random/300x200?sig=${Math.random()}`
  },
  {
      name: 'Dark Souls III',
      year: '2016',
      genre: 'Action RPG',
      developer: 'FromSoftware',
      platform: 'PlayStation 4, Xbox One, Microsoft Windows',
      banner: `https://source.unsplash.com/random/300x200?sig=${Math.random()}`
  },
  {
      name: 'Persona 5',
      year: '2016',
      genre: 'RPG',
      developer: 'Atlus',
      platform: 'PlayStation 4, PlayStation 3',
      banner: `https://source.unsplash.com/random/300x200?sig=${Math.random()}`
  },
  {
      name: 'God of War',
      year: '2018',
      genre: 'Action-Adventure',
      developer: 'Santa Monica Studio',
      platform: 'PlayStation 4',
      banner: `https://source.unsplash.com/random/300x200?sig=${Math.random()}`
  },
  {
      name: 'Horizon Zero Dawn',
      year: '2017',
      genre: 'Action RPG',
      developer: 'Guerrilla Games',
      platform: 'PlayStation 4, Microsoft Windows',
      banner: `https://source.unsplash.com/random/300x200?sig=${Math.random()}`
  },
  {
      name: 'Final Fantasy XV',
      year: '2016',
      genre: 'Action RPG',
      developer: 'Square Enix',
      platform: 'PlayStation 4, Xbox One, Microsoft Windows',
      banner: `https://source.unsplash.com/random/300x200?sig=${Math.random()}`
  },
  {
      name: 'Bloodborne',
      year: '2015',
      genre: 'Action RPG',
      developer: 'FromSoftware',
      platform: 'PlayStation 4',
      banner: `https://source.unsplash.com/random/300x200?sig=${Math.random()}`
  }
];

games.forEach(game => {
    createCard(game);
});
  
function createCard(game, isNew = false){
  const card = document.createElement('div');
  card.classList.add('card');
  
  if(isNew){
    container.insertBefore(card, container.firstChild);
  } else {
    container.appendChild(card);
  }

  const banner = document.createElement('img');
  banner.src = game.banner;
  card.appendChild(banner);

  const name = document.createElement('h2');
  name.textContent =  game.name;
  card.appendChild(name);

  const year = document.createElement('p');
  year.textContent = 'Year: ' + game.year;
  card.appendChild(year);

  const genre = document.createElement('p');
  genre.textContent = 'Genre: ' + game.genre;
  card.appendChild(genre);

  const developer = document.createElement('p');
  developer.textContent = 'Developer: ' + game.developer;
  card.appendChild(developer);

  const platform = document.createElement('p');
  platform.textContent = 'Platform: ' + game.platform;
  card.appendChild(platform);
     
  const remove = document.createElement('img');
  remove.src = './remove.png';
  remove.classList.add('remove');
  remove.style.width = '30px'; 
  remove.style.height = '30px';
  card.appendChild(remove);

  remove.addEventListener('click', function() {
      container.removeChild(card);
  });
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = form.name.value;
    const year = Number(form.year.value);
    const genre = form.genre.value;
    const developer = form.developer.value;
    const platform = form.platform.value;
    const banner = form.banner.value;

    if(name === '' || year === '' || genre === '' || developer === '' || platform === '' || banner === '') {
    } else {
        const game = {
            name: name,
            year: year,
            genre: genre,
            developer: developer,
            platform: platform,
            banner: banner
        }
        createCard(game, true);
    }
})