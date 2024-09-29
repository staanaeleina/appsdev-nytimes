//slaomJR5AA9UrdhfGNgIcTAmrzQkQtAJ
const api_home = 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=slaomJR5AA9UrdhfGNgIcTAmrzQkQtAJ';
const api_arts = 'https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=slaomJR5AA9UrdhfGNgIcTAmrzQkQtAJ';
const api_science = 'https://api.nytimes.com/svc/topstories/v2/science.json?api-key=slaomJR5AA9UrdhfGNgIcTAmrzQkQtAJ';
/*const api_home = 'data.json';
const api_arts = 'arts.json';
const api_science = 'science.json';*/


const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const topNews = document.getElementById('top-stories');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

const today = new Date();
const day = today.getDate();
const monthIndex = today.getMonth();
const year = today.getFullYear();

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const monthName = months[monthIndex];
const formattedDate = `${monthName} ${day}, ${year}`;

document.getElementById('current-date').textContent = formattedDate;

const getTopNews = async (apiUrl) => {
  try {
    const res = await fetch(apiUrl);
    const data = await res.json();
    return data;
  } catch (e) {
    alert('An error occurred while fetching the news', e);
    return [];
  }
};


const updateContainer = (data) => {
  topNews.innerHTML = '';
  (data.results || []).forEach((news) => {
    const newsContainer = document.createElement('div');
    newsContainer.setAttribute('class', 'article');
    newsContainer.innerHTML = `
      <div class="container">
        <h2>${news?.title}</h2>
        <p>${news?.abstract}</p>
        <a href="${news?.url}" target="_blank">Read more</a>
        <div class="box">
          <img src="${news?.multimedia?.[0]?.url}" alt="News Image">
        </div>
      </div>
    `;
    topNews.appendChild(newsContainer);
  });
};


(async () => {
  const homeData = await getTopNews(api_home);
  updateContainer(homeData);
})();


const artsLink = document.getElementById('arts-link');
artsLink.addEventListener('click', async (e) => {
  e.preventDefault();
  const artsData = await getTopNews(api_arts);
  updateContainer(artsData);
});

const homeLink = document.getElementById('home-link'); 
homeLink.addEventListener('click', async (e) => {
  e.preventDefault(); 
  const homeData = await getTopNews(api_home); 
  updateContainer(homeData);
});


const scienceLink = document.getElementById('science-link'); 
scienceLink.addEventListener('click', async (e) => {
  e.preventDefault(); 
  const scienceData = await getTopNews(api_science);
  updateContainer(scienceData);
});

