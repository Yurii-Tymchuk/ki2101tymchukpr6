// URL для отримання JSON
const requestURL = 'https://semegenkep.github.io/json/example.json';

// Створення та налаштування запиту
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = () => {
  const superHeroes = request.response;
  
  // Виводимо об'єкт JSON в консоль для перевірки
  console.log(superHeroes);

  // Заповнюємо заголовок і створюємо картки героїв
  populateHeader(superHeroes);
  showHeroes(superHeroes);
};

// Функція для заповнення заголовка даними про команду
function populateHeader(data) {
  const header = document.querySelector('header');
  
  const teamName = document.createElement('h1');
  teamName.textContent = data.squadName;

  const teamInfo = document.createElement('p');
  teamInfo.textContent = `Місто: ${data.homeTown} // Рік заснування: ${data.formed}`;
  
  header.appendChild(teamName);
  header.appendChild(teamInfo);
}

// Функція для створення карток героїв
function showHeroes(data) {
  const section = document.querySelector('section');
  
  data.members.forEach(member => {
    const heroCard = document.createElement('div');
    heroCard.classList.add('hero-card');
    
    const name = document.createElement('h2');
    name.textContent = member.name;
    
    const age = document.createElement('p');
    age.textContent = `Вік: ${member.age}`;
    
    const powers = document.createElement('p');
    powers.textContent = `Суперсили: ${member.powers.join(', ')}`;
    
    heroCard.appendChild(name);
    heroCard.appendChild(age);
    heroCard.appendChild(powers);
    
    section.appendChild(heroCard);
  });
}
