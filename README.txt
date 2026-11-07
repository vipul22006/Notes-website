WEBTECH STUDY HUB — STARTER PROJECT

RUN:
1. Extract the ZIP.
2. Open the extracted folder in VS Code (File > Open Folder).
3. Open index.html, right-click, and choose Open with Live Server.
4. If needed, install the Live Server extension by Ritwick Dey.

EDIT YOUR SYLLABUS:
Open js/data.js. Change unit title, description, icon and topic content.
Card background colours are set by each unit's color value: blue, green, purple, orange, cyan.
Keep these colour names if you want the same pastel card backgrounds as the reference design.

The included syllabus is sample content. Replace it with your official university syllabus.
This is a static front-end project; no backend/database is needed yet.


RICH CONTENT SUPPORT
- Write topic notes in Markdown inside content: `...` in js/data.js.
- Tables use standard Markdown table syntax and receive responsive styling.
- Images: put image files in an `images` folder and use ![Alt text](images/your-image.png).
- Diagrams: use fenced Mermaid blocks: ```mermaid ... ```
- Charts: use a fenced `chart` block containing JSON with type, title, labels, datasets.
- Quizzes: use a fenced `quiz` block containing JSON with question, options, answer (zero-based index), explanation.
- The study page loads Marked, Chart.js and Mermaid from public CDNs, so an Internet connection is required for those libraries.
