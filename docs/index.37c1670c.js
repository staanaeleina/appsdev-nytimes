const e="https://api.nytimes.com/svc/topstories/v2/home.json?api-key=slaomJR5AA9UrdhfGNgIcTAmrzQkQtAJ",t=document.getElementById("hamburger"),n=document.getElementById("nav-menu"),a=document.getElementById("top-stories");t.addEventListener("click",()=>{n.classList.toggle("active")});const r=new Date,c=r.getDate(),s=r.getMonth(),i=r.getFullYear(),l=["January","February","March","April","May","June","July","August","September","October","November","December"][s],o=`${l} ${c}, ${i}`;document.getElementById("current-date").textContent=o;const m=async e=>{try{let t=await fetch(e);return await t.json()}catch(e){return alert("An error occurred while fetching the news",e),[]}},d=e=>{a.innerHTML="",(e.results||[]).forEach(e=>{let t=document.createElement("div");t.setAttribute("class","article"),t.innerHTML=`
      <div class="container">
        <h2>${e?.title}</h2>
        <p>${e?.abstract}</p>
        <a href="${e?.url}" target="_blank">Read more</a>
        <div class="box">
          <img src="${e?.multimedia?.[0]?.url}" alt="News Image">
        </div>
      </div>
    `,a.appendChild(t)})};(async()=>{d(await m(e))})(),document.getElementById("arts-link").addEventListener("click",async e=>{e.preventDefault(),d(await m("https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=slaomJR5AA9UrdhfGNgIcTAmrzQkQtAJ"))}),document.getElementById("home-link").addEventListener("click",async t=>{t.preventDefault(),d(await m(e))}),document.getElementById("science-link").addEventListener("click",async e=>{e.preventDefault(),d(await m("https://api.nytimes.com/svc/topstories/v2/science.json?api-key=slaomJR5AA9UrdhfGNgIcTAmrzQkQtAJ"))});
//# sourceMappingURL=index.37c1670c.js.map
