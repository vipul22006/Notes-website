document.addEventListener("DOMContentLoaded", () => {
    const list = document.getElementById("unitList"), panel = document.getElementById("notesPanel"), params = new URLSearchParams(location.search);  let active = Number(params.get("unit")) || 1;
let topic = Number(params.get("topic")) || 0;
    if (window.mermaid) { mermaid.initialize({ startOnLoad: false, theme: document.body.classList.contains("dark") ? "dark" : "default", securityLevel: "strict" }); }
    list.innerHTML = unitsData.map(u => `<button data-unit="${u.id}"><span>${u.icon}</span><span>Unit ${u.id}<small>${u.title}</small></span></button>`).join("");
    list.querySelectorAll("[data-unit]").forEach(b => b.addEventListener("click", () => { active = Number(b.dataset.unit); topic = 0; render() }));
    function escapeAttr(value) { return String(value).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }


    function renderMarkdown(source) {
        const renderer = new marked.Renderer();

        renderer.code = (codeOrToken, infostring) => {
            const code = typeof codeOrToken === "object"
                ? codeOrToken.text
                : codeOrToken;

            const info = typeof codeOrToken === "object"
                ? codeOrToken.lang
                : infostring;

            const lang = (info || "")
                .trim()
                .split(/\s+/)[0]
                .toLowerCase();

            if (lang === "mermaid") {
                return `<pre class="mermaid-diagram">${escapeHtml(code)}</pre>`;
            }

            if (lang === "chart" || lang === "quiz") {
                return `<div class="interactive-block ${lang}-block"
                data-kind="${lang}"
                data-config="${escapeAttr(code)}"></div>`;
            }

            return `<pre><code class="language-${lang}">${escapeHtml(code)}</code></pre>`;
        };

        return marked.parse(source, {
            renderer,
            gfm: true,
            breaks: false
        });
    }






    function escapeHtml(s) { return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }
    function mountInteractive() {
        panel.querySelectorAll('.chart-block').forEach(el => { try { const cfg = JSON.parse(el.dataset.config); el.innerHTML = `<div class="chart-heading">${escapeHtml(cfg.title || 'Interactive chart')}</div><div class="chart-canvas-wrap"><canvas aria-label="${escapeHtml(cfg.title || 'Chart')}" role="img"></canvas></div>`; new Chart(el.querySelector('canvas'), { type: cfg.type || 'bar', data: { labels: cfg.labels || [], datasets: (cfg.datasets || []).map(d => ({ ...d, borderWidth: 2, tension: .3, fill: false })) }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: (cfg.datasets || []).length > 1 }, tooltip: { enabled: true } }, scales: { y: { beginAtZero: true, title: { display: !!cfg.yTitle, text: cfg.yTitle || '' } } } } }); } catch (e) { el.textContent = 'Chart data could not be displayed.'; } });
        panel.querySelectorAll('.quiz-block').forEach(el => { try { const q = JSON.parse(el.dataset.config); el.innerHTML = `<div class="quiz-card"><b class="quiz-label">QUICK QUIZ</b><h3>${escapeHtml(q.question)}</h3><div class="quiz-options">${q.options.map((o, i) => `<button type="button" data-answer="${i}">${escapeHtml(o)}</button>`).join('')}</div><p class="quiz-feedback" aria-live="polite"></p></div>`; el.dataset.answer = String(q.answer); el.dataset.explanation = q.explanation || ''; } catch (e) { el.textContent = 'Quiz data could not be displayed.'; } });


        if (window.mermaid) {
            const diagrams = panel.querySelectorAll('.mermaid-diagram');

            if (diagrams.length) {
                mermaid.run({
                    nodes: diagrams
                }).catch(error => {
                    console.error("Mermaid Error:", error);
                });
            }
        }















    }
    panel.addEventListener('click', e => { const b = e.target.closest('[data-answer]'); if (!b) return; const box = b.closest('.quiz-block'), correct = Number(box.dataset.answer), selected = Number(b.dataset.answer); box.querySelectorAll('[data-answer]').forEach(x => { x.disabled = true; if (Number(x.dataset.answer) === correct) x.classList.add('correct'); }); const feedback = box.querySelector('.quiz-feedback'); feedback.textContent = selected === correct ? 'Correct! ' + box.dataset.explanation : 'Not quite. The correct option is highlighted. ' + box.dataset.explanation; feedback.classList.toggle('is-correct', selected === correct); });
    function render() {
        const u = unitsData.find(x => x.id === active) || unitsData[0]; topic = Math.max(0, Math.min(topic, u.topics.length - 1)); const t = u.topics[topic]; list.querySelectorAll('button').forEach(b => b.classList.toggle('selected', Number(b.dataset.unit) === u.id)); panel.innerHTML = `<small class="kicker">UNIT ${u.id} · WEB TECHNOLOGY</small><h1>${u.title}</h1><p>${u.description}</p><div class="tabs">${u.topics.map((x, i) => `<button data-topic="${i}" class="${i === topic ? 'selected' : ''}">${x.title}</button>`).join('')}</div><section class="topiccontent"><h2>${t.title}</h2><div class="markdown-content">${renderMarkdown(t.content || '')}</div></section><div class="controls"><button id="prev" ${topic === 0 ? 'disabled' : ''}>← Previous topic</button><span>Topic ${topic + 1} of ${u.topics.length}</span><button id="next" ${topic >= u.topics.length - 1 ? 'disabled' : ''}>Next topic →</button></div>`;
        panel.querySelectorAll('[data-topic]').forEach(b => b.addEventListener('click', () => { topic = Number(b.dataset.topic); render() })); document.getElementById('prev').addEventListener('click', () => { if (topic > 0) { topic--; render() } }); document.getElementById('next').addEventListener('click', () => { if (topic < u.topics.length - 1) { topic++; render() } }); mountInteractive();
    }
    render(); document.getElementById('menuToggle').addEventListener('click', () => document.getElementById('nav').classList.toggle('open')); const theme = document.getElementById('themeToggle'), icon = document.getElementById('themeIcon'); if (localStorage.getItem('wth-theme') === 'dark') document.body.classList.add('dark'); function update() { icon.textContent = document.body.classList.contains('dark') ? '🌙' : '☀️' } update(); theme.addEventListener('click', () => { document.body.classList.toggle('dark'); localStorage.setItem('wth-theme', document.body.classList.contains('dark') ? 'dark' : 'light'); update(); if (window.mermaid) { mermaid.initialize({ startOnLoad: false, theme: document.body.classList.contains('dark') ? 'dark' : 'default', securityLevel: 'strict' }); const diagrams = panel.querySelectorAll('.mermaid-diagram'); diagrams.forEach(d => { d.removeAttribute('data-processed'); d.innerHTML = d.textContent }); if (diagrams.length) mermaid.run({ nodes: diagrams }).catch(() => { }); } });
});
