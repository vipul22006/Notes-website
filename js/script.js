document.addEventListener("DOMContentLoaded",()=>{
const grid=document.getElementById("unitGrid"),input=document.getElementById("searchInput"),form=document.getElementById("searchForm"),empty=document.getElementById("noResults");

function render(q = "") {
    q = q.toLowerCase().trim();

    if (!q) {
        grid.innerHTML = unitsData.map(u => `
            <article class="card ${u.color}">
                <div class="cardtop">
                    <div class="uniticon ${u.color}">${u.icon}</div>
                    <span class="unitnum">Unit ${u.id}</span>
                </div>
                <h3>${u.title}</h3>
                <p>${u.description}</p>
                <a class="explore" href="study.html?unit=${u.id}">
                    Explore Unit &nbsp; →
                </a>
            </article>
        `).join("");

        empty.hidden = true;
        return;
    }

    const results = [];

    unitsData.forEach(u => {
        u.topics.forEach((t, index) => {
            const searchableText = [
                u.title,
                u.description,
                t.title,
                t.content
            ].join(" ").toLowerCase();

            if (searchableText.includes(q)) {
                results.push({
                    unit: u,
                    topic: t,
                    topicIndex: index
                });
            }
        });
    });

    grid.innerHTML = results.map(r => `
        <article class="card ${r.unit.color}">
            <div class="cardtop">
                <div class="uniticon ${r.unit.color}">
                    ${r.unit.icon}
                </div>
                <span class="unitnum">Unit ${r.unit.id}</span>
            </div>

            <h3>${r.topic.title}</h3>
            <p>${r.unit.title}</p>

            <a class="explore"
               href="study.html?unit=${r.unit.id}&topic=${r.topicIndex}">
                Open Topic &nbsp; →
            </a>
        </article>
    `).join("");

    empty.hidden = results.length > 0;
}


render();form.addEventListener("submit",e=>{e.preventDefault();render(input.value)});input.addEventListener("input",()=>render(input.value));
const nav=document.getElementById("nav"),menu=document.getElementById("menuToggle");menu.addEventListener("click",()=>nav.classList.toggle("open"));
const theme=document.getElementById("themeToggle"),icon=document.getElementById("themeIcon");if(localStorage.getItem("wth-theme")==="dark")document.body.classList.add("dark");
function update(){icon.textContent=document.body.classList.contains("dark")?"🌙":"☀️"}update();theme.addEventListener("click",()=>{document.body.classList.toggle("dark");localStorage.setItem("wth-theme",document.body.classList.contains("dark")?"dark":"light");update()});
});