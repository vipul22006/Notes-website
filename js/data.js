// WebTech Study Hub content. Keep each topic content inside a template literal.
// Markdown tables, images, fenced code, Mermaid diagrams, charts and quizzes are supported.
const unitsData = [
{id:1,title:"Introduction to Web Technology",shortTitle:"Web Basics",description:"Basics of Web, Internet, WWW, HTML and Web Protocols.",icon:"🌐",color:"blue",topics:[
{title:"History of the Internet",content:`
## Introduction

- The **Internet** is a huge global network that connects millions of smaller networks and computers.
- It began as a small research project and slowly became the backbone of modern life.
- Knowing its history explains why protocols such as **TCP/IP**, **HTTP** and **DNS** exist in Web Technology.

## Definition

The **Internet** is a worldwide network of interconnected computer networks that communicate with each other using the **TCP/IP** set of rules.

- It is called a **network of networks** because home, office, college and company networks are all joined together.
- A **protocol** is simply a set of rules that computers follow to talk to each other.

## Key Points

- The Internet started as **ARPANET** in **1969** (USA).
- **Packet switching** was the main idea behind it.
- **TCP/IP** became the official standard on **1 January 1983**.
- **E-mail** was one of the first popular applications (1971).
- The **World Wide Web** was invented by **Tim Berners-Lee** in 1989–1991.
- Browsers like **Mosaic** (1993) made the Internet popular with common people.

## Detailed Explanation

### Step 1 – Packet switching (1960s)

Data is broken into small pieces called **packets**. Each packet travels separately and is joined again at the destination. This is more reliable than sending one big message.

### Step 2 – ARPANET (1969)

The US Department of Defense agency **ARPA** built **ARPANET** to let researchers share computers and data.

- The first message was sent between **UCLA** and **Stanford Research Institute**.
- Four computers (UCLA, Stanford Research Institute, UC Santa Barbara, University of Utah) formed the first network.

### Step 3 – E-mail (1971)

**Ray Tomlinson** sent the first network e-mail and introduced the **@** symbol.

### Step 4 – TCP/IP (1970s–1983)

**Vint Cerf** and **Bob Kahn** designed **TCP/IP** so that different networks could talk to each other. ARPANET officially switched to TCP/IP in **1983**, often called the **birthday of the Internet**.

### Step 5 – NSFNET and growth (1980s)

The National Science Foundation built **NSFNET**, a fast **backbone** (main high-speed network) linking universities. **DNS** was also introduced in 1983–84.

### Step 6 – The Web and the commercial Internet (1990s)

- The **WWW** was created.
- **Mosaic** and **Netscape** browsers appeared.
- Companies began to use the Internet.
- **ISPs** (Internet Service Providers – companies that give you Internet access) became common.

### Step 7 – The modern Internet (2000s onwards)

Broadband, Wi-Fi, social media, smartphones, **cloud computing** and the **Internet of Things (IoT)** made the Internet part of daily life.

### Simple Timeline Table

| Year | Event |
|---|---|
| 1962–65 | Packet switching ideas developed |
| 1969 | ARPANET goes live with 4 nodes |
| 1971 | First network e-mail |
| 1973–74 | TCP/IP designed by Cerf and Kahn |
| 1983 | ARPANET adopts TCP/IP; DNS introduced |
| 1986 | NSFNET starts |
| 1989–91 | WWW invented by Tim Berners-Lee |
| 1993 | Mosaic browser released |
| 1995 onwards | Commercial Internet, e-commerce, search engines |
| 2000s | Broadband, social media, Web 2.0 |
| 2010s–now | Mobile Internet, cloud, IoT, 5G |

### Growth of Internet Users (ITU estimates, approximate)

| Year | People using the Internet |
|---|---|
| 2005 | about 1.0 billion |
| 2010 | about 2.0 billion |
| 2015 | about 3.0 billion |
| 2020 | about 4.7 billion |
| 2025 | about 6.0 billion (74% of world population) |

## Types / Classification

Not applicable.

## Syntax / Code Example

Not applicable.

## Real-Life Example

When you send a WhatsApp photo, it is split into small **packets**, sent through many routers using **TCP/IP**, and joined again on your friend's phone. This is the same idea that ARPANET started in 1969.

## Advantages

- Fast worldwide communication (e-mail, chat, video calls).
- Easy access to information and education.
- Enables e-commerce, banking and online services.
- Resource sharing and remote work.

## Disadvantages / Limitations

- Security threats such as viruses, hacking and phishing.
- Privacy loss and data theft.
- Misinformation and cyber-bullying.
- **Digital divide** – some people still lack access.

## Comparison Table

| Feature | ARPANET | Modern Internet |
|---|---|---|
| Year | 1969 | Today |
| Size | 4 nodes at start | Billions of devices |
| Users | Researchers, military | Everyone |
| Protocol | NCP first, then TCP/IP | TCP/IP |
| Services | E-mail, file transfer | Web, streaming, cloud, social media |

## Important Points to Remember

- **ARPANET** was the first major packet-switched network (1969).
- **TCP/IP** was adopted on **1 January 1983**.
- **Tim Berners-Lee** invented the **WWW**, not the Internet.
- **Packet switching** breaks data into small packets.
- **NSFNET** acted as the Internet backbone in the 1980s.
- **Mosaic (1993)** was the first widely used graphical browser.

## Common Interview / Exam Questions

1. **What is ARPANET?** The first packet-switching network, built by ARPA in 1969, which grew into the Internet.
2. **Who designed TCP/IP?** Vint Cerf and Bob Kahn.
3. **What is packet switching?** Sending data as small packets that travel independently and are rebuilt at the destination.
4. **When did the Internet adopt TCP/IP?** On 1 January 1983.
5. **Who invented the WWW?** Tim Berners-Lee, in 1989–1991 at CERN.

## Summary

The Internet began as **ARPANET** in 1969, a research network using packet switching. **TCP/IP** in 1983 allowed different networks to join together. NSFNET expanded it, and the WWW and browsers in the 1990s made it popular. Today it connects billions of devices worldwide.

## Visual: Growth of Internet Users

\`\`\`chart
{"type":"line","title":"Approximate Internet Users Worldwide","labels":["2005","2010","2015","2020","2025"],"datasets":[{"label":"Users (billions)","data":[1.0,2.0,3.0,4.7,6.0]}],"yTitle":"People (billions)"}
\`\`\`

## Quick Knowledge Check

\`\`\`quiz
{"question":"When did ARPANET officially adopt TCP/IP?","options":["1969","1971","1 January 1983","1991"],"answer":2,"explanation":"ARPANET switched to TCP/IP on 1 January 1983."}
\`\`\`

`},
{title:"World Wide Web (WWW)",content:`
## Introduction

- The **World Wide Web** is the system of linked pages and files that we open in a browser.
- It makes the Internet easy to use because we can click links instead of typing complex commands.
- It is the base of websites, online shopping, social media and web applications.

## Definition

The **World Wide Web (WWW)** is a collection of interlinked **hypertext** documents and resources, identified by **URLs**, that are accessed over the Internet using a **web browser**.

In easy words: the Internet is the road, and the Web is one of the services (like a bus) that runs on that road.

## Key Points

- Invented by **Tim Berners-Lee** in 1989 at **CERN**; the first website went live in 1991.
- Works on the **client-server model**.
- Uses **HTTP**, **HTML** and **URL** as its three core technologies.
- Pages are connected through **hyperlinks**.
- The Web is only a **part** of the Internet.

## Detailed Explanation

### Important Terms

| Term | Simple Meaning |
|---|---|
| **Hypertext** | Text that contains links to other text or pages |
| **Hyperlink** | A clickable link (text or image) that takes you to another page or resource |
| **Web page** | A single document (HTML file) shown in a browser |
| **Website** | A collection of related web pages under one domain, e.g. a college website |
| **URL** | Uniform Resource Locator – the full address of a resource |
| **Web browser** | Software used to open and view web pages |
| **Web server** | A computer that stores websites and sends pages to browsers |

### Structure of a URL

Example: \`https://www.example.com:443/notes/unit1.html?id=5#intro\`

| Part | Example | Meaning |
|---|---|---|
| **Protocol** | \`https\` | How to talk to the server |
| **Domain name (host)** | \`www.example.com\` | Which server |
| **Port** | \`:443\` | Which door on the server |
| **Path** | \`/notes/unit1.html\` | Which file |
| **Query string** | \`?id=5\` | Extra data |
| **Fragment** | \`#intro\` | A section inside the page |

### How the Web Works

1. The user types a URL in the browser.
2. The browser finds the server's IP address using **DNS**.
3. The browser sends an **HTTP request** to the web server.
4. The server sends back the page (HTML, CSS, images).
5. The browser displays the page.

### Web Versions

- **Web 1.0** – read-only pages.
- **Web 2.0** – social and interactive.
- **Web 3.0** – semantic and decentralised ideas.

## Types / Classification

Websites can be classified as:

| Type | Meaning | Example | Limitation |
|---|---|---|---|
| **Static** | Fixed pages, same for every user | College brochure site | Hard to update, not interactive |
| **Dynamic** | Content is generated by programs and databases | Facebook, Amazon | More complex and costly |

## Syntax / Code Example

A hyperlink in HTML:

\`\`\`html
<!-- anchor tag creates a hyperlink -->
<a href='https://www.example.com'>Go to Example</a>
\`\`\`

The browser shows the text **Go to Example** as a clickable link. Clicking it opens the given URL.

## Real-Life Example

When you open a news website and click a headline, the browser requests a new page from the news server through **hyperlinks**. The WWW makes this click-and-read experience possible.

## Advantages

- Easy to use with graphical browsers.
- Gives **multimedia** content: text, images, audio, video.
- Hyperlinks connect information globally.
- Supports online services like banking, shopping and learning.

## Disadvantages / Limitations

- Information may be false or outdated.
- Broken links (**404 errors**) can occur.
- Security risks like fake websites and malware.
- Depends on Internet availability and speed.

## Comparison Table

| Feature | Internet | WWW |
|---|---|---|
| Meaning | Global network of networks | Collection of web pages on the Internet |
| Type | Hardware + infrastructure | Software service / information system |
| Invented | 1969 (ARPANET) | 1989–91 (Tim Berners-Lee) |
| Protocol | TCP/IP | HTTP/HTTPS |
| Services | Web, e-mail, FTP, chat | Web pages and websites only |
| Relation | Larger; includes the Web | Smaller; runs on the Internet |

## Important Points to Remember

- **WWW ≠ Internet**; the Web is one service on the Internet.
- **Hypertext** and **hyperlinks** connect pages.
- A **URL** is the address of a web resource.
- A **website** is a collection of **web pages**.
- The Web works on the **client (browser)** and **server** model.
- Core web technologies: **HTTP, HTML, URL**.

## Common Interview / Exam Questions

1. **What is WWW?** A system of interlinked hypertext documents accessed through the Internet using browsers.
2. **What is a hyperlink?** A clickable element that opens another page or resource.
3. **What is a URL?** The unique address of a resource on the Web.
4. **Difference between a web page and a website?** A web page is one document; a website is a group of related pages.
5. **Is the Internet the same as the WWW?** No. The Internet is the network; the WWW is a service running on it.

## Summary

The WWW is a system of linked pages that we view in browsers. It was created by **Tim Berners-Lee** and uses **HTTP, HTML and URLs**. It runs on the Internet but is not the same as the Internet. It follows the **client-server model**.

## Visual: How the Web Works

\`\`\`mermaid
flowchart TD
 A[User enters URL] --> B[Browser asks DNS for IP]
 B --> C[Browser sends HTTP request]
 C --> D[Web server processes request]
 D --> E[Server returns HTML, CSS and images]
 E --> F[Browser displays web page]
\`\`\`

`},
{title:"HTML",content:`
## Introduction

- **HTML** is the basic language used to create web pages.
- Every website you visit is built with HTML at its core.
- It tells the browser what to show: headings, paragraphs, images, links, tables and forms.

## Definition

**HTML (HyperText Markup Language)** is the standard markup language used to create the structure and content of web pages.

- **HyperText** – text with links.
- **Markup** – special tags that label parts of the content.
- **Language** – a set of rules; it is **not** a programming language because it has no logic like loops or conditions.

## Key Points

- Created by **Tim Berners-Lee** in 1991.
- Maintained by **W3C** and **WHATWG**; the latest version is **HTML5**.
- Uses **tags**, **elements** and **attributes**.
- Files are saved with the **.html** or **.htm** extension.
- Not case-sensitive, but lowercase tags are recommended.
- Works together with **CSS** (design) and **JavaScript** (behaviour).

## Detailed Explanation

### History of HTML

| Version | Year | Note |
|---|---|---|
| HTML 1.0 | 1991–93 | First simple version |
| HTML 2.0 | 1995 | First standard |
| HTML 3.2 | 1997 | Tables, applets |
| HTML 4.01 | 1999 | Strong standard, CSS support |
| XHTML | 2000 | Stricter XML-style HTML |
| HTML5 | 2014 | Audio, video, canvas, semantic tags |

### Basic Structure

- \`<!DOCTYPE html>\` – tells the browser this is an HTML5 document.
- \`<html>\` – the root element.
- \`<head>\` – page information (title, meta data); **not shown** on the page.
- \`<body>\` – the **visible** content.

### Tag, Element and Attribute

- **Tag** – a keyword in angle brackets, e.g. \`<p>\`. Most tags come in pairs: opening \`<p>\` and closing \`</p>\`.
- **Element** – opening tag + content + closing tag, e.g. \`<p>Hello</p>\`.
- **Attribute** – extra information inside the opening tag, in \`name='value'\` form, e.g. \`<a href='page.html'>\`.
- **Empty (void) tags** have no closing tag, e.g. \`<br>\`, \`<hr>\`, \`<img>\`.

### Common Elements

| Purpose | Tags |
|---|---|
| Headings (largest to smallest) | \`<h1>\` to \`<h6>\` |
| Paragraph | \`<p>\` |
| Links | \`<a href=''>\` |
| Images | \`<img src='' alt=''>\` |
| Unordered list | \`<ul>\` with \`<li>\` |
| Ordered list | \`<ol>\` with \`<li>\` |
| Table | \`<table>\`, \`<tr>\`, \`<th>\`, \`<td>\` |
| Form | \`<form>\`, \`<input>\`, \`<select>\`, \`<textarea>\`, \`<button>\` |

## Types / Classification

HTML elements are of two types:

| Type | Definition | Example | Use Case | Limitation |
|---|---|---|---|---|
| **Block-level** | Starts on a new line and takes full width | \`<p>\`, \`<div>\`, \`<h1>\` | Page layout and sections | Cannot sit side by side without CSS |
| **Inline** | Stays in the same line, takes only needed width | \`<span>\`, \`<a>\`, \`<b>\` | Styling or linking part of text | Cannot hold large block content |

## Syntax / Code Example

\`\`\`html
<!DOCTYPE html>               <!-- declares HTML5 document -->
<html lang='en'>              <!-- root element, language English -->
<head>
  <meta charset='UTF-8'>      <!-- character encoding -->
  <title>My First Page</title><!-- text shown on browser tab -->
</head>
<body>
  <h1>Welcome to My Website</h1>          <!-- main heading -->
  <p>This is a <b>simple</b> paragraph.</p>

  <!-- link and image -->
  <a href='https://www.example.com'>Visit Example</a>
  <br>
  <img src='photo.jpg' alt='My photo' width='150'>

  <!-- list -->
  <ul>
    <li>HTML</li>
    <li>CSS</li>
  </ul>

  <!-- table -->
  <table border='1'>
    <tr><th>Name</th><th>Marks</th></tr>
    <tr><td>Asha</td><td>85</td></tr>
  </table>

  <!-- form -->
  <form action='/submit' method='post'>
    <label>Name: <input type='text' name='username'></label>
    <button type='submit'>Send</button>
  </form>
</body>
</html>
\`\`\`

**Output (in simple words):** The browser tab shows **My First Page**. The page displays a big heading, a paragraph with the word *simple* in bold, a clickable link, an image, a bullet list (HTML, CSS), a table with Name and Marks, and a small form with a text box and a Send button.

## Real-Life Example

A college admission page uses HTML **headings** for titles, a **table** for fee details, **links** to other pages, and a **form** for students to enter their name and email.

## Advantages

- Easy to learn and free to use.
- Supported by all browsers and devices.
- Lightweight and fast to load.
- Works well with CSS and JavaScript.
- Search-engine friendly with proper structure.

## Disadvantages / Limitations

- Only creates static structure; no logic or calculations.
- Needs CSS for good design and JavaScript for interactivity.
- Cannot hide source code from users.
- Big sites need a lot of repeated code.

## Comparison Table

| Feature | HTML | CSS |
|---|---|---|
| Purpose | Structure and content | Style and layout |
| Example | Headings, paragraphs | Colours, fonts, spacing |
| Syntax | Tags \`<p>\` | Rules \`p { color: red; }\` |
| Can work alone? | Yes | No, needs HTML |

## Important Points to Remember

- HTML = **HyperText Markup Language**.
- It is a **markup language**, not a programming language.
- Basic structure: **DOCTYPE, html, head, body**.
- An **element** = opening tag + content + closing tag.
- **Attributes** give extra information to tags.
- \`<br>\`, \`<hr>\`, \`<img>\` are **empty tags**.
- **HTML5** added \`<audio>\`, \`<video>\` and semantic tags.

## Common Interview / Exam Questions

1. **What is HTML?** A markup language used to build the structure of web pages.
2. **Difference between tag and element?** A tag is the keyword in angle brackets; an element is the full unit with start tag, content and end tag.
3. **What is an attribute?** Extra information given inside the opening tag, such as \`href\` or \`src\`.
4. **Name some empty tags.** \`<br>\`, \`<hr>\`, \`<img>\`, \`<input>\`.
5. **What is the use of the \`<head>\` tag?** It stores page information like title and meta data, which is not displayed on the page.

## Summary

HTML is the standard markup language for web pages. It uses **tags, elements and attributes** to create headings, paragraphs, links, images, lists, tables and forms. A page has **DOCTYPE, html, head and body** parts. HTML5 is the latest version and works with CSS and JavaScript.
`},
{title:"HTTP (Protocols – HTTP)",content:`




## Introduction

- **HTTP** is the protocol that browsers and web servers use to talk to each other.
- Every time you open a website, an HTTP request and response take place.
- Without HTTP, the Web could not work.

## Definition

**HTTP (HyperText Transfer Protocol)** is an application-layer, request-response protocol used to transfer web pages and other resources between a **client** (browser) and a **server**.

- It is **stateless**: the server does not remember previous requests by default.
- It normally runs on **port 80**.

## Key Points

- Full form: **HyperText Transfer Protocol**.
- Follows the **client-server** model.
- Works as **request → response**.
- Common methods: **GET, POST, PUT, DELETE**.
- **HTTPS** is the secure version using **SSL/TLS** (port **443**).
- **Status codes** show the result of a request.

## Detailed Explanation

### Client-Server Model

The **client** (browser) asks for something; the **server** gives the answer.

### Request-Response Cycle

1. The user enters a URL.
2. The browser opens a **TCP connection** to the server.
3. The browser sends an **HTTP request**.
4. The server processes it.
5. The server sends an **HTTP response** (status code + headers + content).
6. The browser shows the page and the connection is closed (or reused).

### Parts of an HTTP Message

- **Request:** request line (method, path, version), headers, blank line, optional body.
- **Response:** status line (version, code, message), headers, blank line, body.

### HTTP Methods

| Method | Purpose |
|---|---|
| **GET** | Fetch data; data is sent in the URL |
| **POST** | Send data to the server (e.g., form submit); data is in the body |
| **PUT** | Update or replace a resource |
| **DELETE** | Remove a resource |
| **HEAD** | Get only headers, no body |

### Status Codes

| Range | Meaning | Examples |
|---|---|---|
| 1xx | Information | 100 Continue |
| 2xx | Success | 200 OK, 201 Created |
| 3xx | Redirection | 301 Moved Permanently, 302 Found |
| 4xx | Client error | 400 Bad Request, 403 Forbidden, 404 Not Found |
| 5xx | Server error | 500 Internal Server Error, 503 Service Unavailable |

### HTTPS

**HTTPS** is HTTP + **SSL/TLS** encryption. It protects data from being read or changed on the way. A padlock icon shows in the browser.

## Types / Classification

HTTP versions:

| Version | Feature | Limitation |
|---|---|---|
| HTTP/1.0 | New connection for every request | Slow |
| HTTP/1.1 | Persistent connections, widely used | Requests wait in line |
| HTTP/2 | Multiplexing, faster loading | Needs HTTPS in practice |
| HTTP/3 | Uses QUIC over UDP, even faster | Not supported everywhere |

## Syntax / Code Example

\`\`\`
# ---- HTTP REQUEST (browser to server) ----
GET /index.html HTTP/1.1      # method, path, HTTP version
Host: www.example.com         # which website we want
User-Agent: Chrome/120        # which browser is asking
Accept: text/html             # type of content we accept

# ---- HTTP RESPONSE (server to browser) ----
HTTP/1.1 200 OK               # version, status code, message
Content-Type: text/html       # type of data being sent
Content-Length: 45            # size of body in bytes

<html><body>Hello</body></html>   # the body (actual page)
\`\`\`

*(Lines starting with # are explanations only; real HTTP has no comments.)*

**Working in simple words:** The browser asks for \`/index.html\` from \`www.example.com\`. The server replies with code **200** (success) and sends the HTML page, which the browser displays as "Hello".

## Real-Life Example

When you log in to a website, your browser sends a **POST** request with your username and password. The server replies with **200 OK** (or a redirect) and opens your account page. If you type a wrong page name, you see **404 Not Found**.

## Advantages

- Simple and easy to understand.
- Works with any type of data (text, image, video).
- Supported by all browsers and servers.
- Flexible and extendable with headers.

## Disadvantages / Limitations

- **Stateless**: needs cookies or sessions to remember users.
- Plain HTTP is **not secure**; data can be read.
- Each request has header overhead.
- Older versions are slower.

## Comparison Table

| Feature | HTTP | HTTPS |
|---|---|---|
| Full form | HyperText Transfer Protocol | HTTP Secure |
| Port | 80 | 443 |
| Security | No encryption | Encrypted with SSL/TLS |
| Certificate | Not needed | Needed |
| Use | Simple, non-sensitive pages | Banking, login, shopping |

## Important Points to Remember

- HTTP is an **application layer** protocol.
- It follows **request-response** and is **stateless**.
- **GET** reads data; **POST** sends data.
- **200 = OK, 404 = Not Found, 500 = Server Error**.
- **HTTPS** = HTTP + **SSL/TLS**, port **443**.
- Default HTTP port is **80**.

## Common Interview / Exam Questions

1. **What is HTTP?** A protocol used to transfer web pages between browser and server.
2. **Why is HTTP stateless?** Because the server does not remember earlier requests from the same client.
3. **Difference between GET and POST?** GET sends data in the URL and is used to fetch; POST sends data in the body and is used to submit.
4. **What does status code 404 mean?** The requested page was not found on the server.
5. **What is HTTPS?** The secure form of HTTP that uses SSL/TLS encryption.

## Summary

HTTP is the main protocol of the Web. A browser sends an **HTTP request** and the server returns a **response** with a status code and content. It is stateless and uses methods like **GET** and **POST**. **HTTPS** adds encryption for security.

## Visual: HTTP Request and Response

\`\`\`mermaid
sequenceDiagram
 participant B as Browser (Client)
 participant S as Web Server
 B->>S: HTTP Request
 S-->>B: HTTP Response (status + content)
 B->>B: Display the page
\`\`\`

# SMTP (Protocols – SMTP)
## Introduction
• SMTP is the protocol used to send e-mail from one computer to another.
• Whenever you press the Send button in Gmail or Outlook, SMTP does the work in the background.
• It is important because it is the standard way mail servers deliver messages across the Internet.


## Definition
SMTP (Simple Mail Transfer Protocol) is an application-layer protocol used to send and relay e-mail messages from a client to a mail server and between mail servers.
• It is a push protocol: the sender pushes the mail towards the receiver.
• It uses TCP and works with plain text commands.
## Key Points
• Full form: Simple Mail Transfer Protocol.
• Used only for sending (not reading) mail.
• Default ports: 25, 587 (recommended for clients), 465 (SMTP over SSL).
• Uses commands like HELO/EHLO, MAIL FROM, RCPT TO, DATA, QUIT.
• Works with POP3 or IMAP, which are used to receive mail.
• Basic SMTP supports only 7-bit ASCII text; MIME extends it.
## Detailed Explanation
## Important terms:
• MUA (Mail User Agent) – the e-mail program you use, e.g. Outlook, Gmail app.
• MTA (Mail Transfer Agent) – the server software that moves mail, e.g. Postfix, Sendmail.
• MDA (Mail Delivery Agent) – puts the mail into the receiver's mailbox.
• MX record – a DNS record that tells which server accepts mail for a domain.
How an e-mail is sent (step by step):
1. The sender writes a mail in the MUA and clicks Send.
2. The MUA connects to the sender's SMTP server and hands over the message.
3. The sender's server finds the receiver's mail server using the MX record from DNS.
4. It connects to the receiver's server and transfers the message using SMTP commands.
5. The receiver's server stores the mail in the recipient's mailbox.
6. The receiver reads it later using POP3 or IMAP.
Mail travels by SMTP up to the receiver's server; the receiver then pulls it with POP3 or IMAP.

# Common SMTP commands:

| Command | Purpose |
|---|---|
| HELO / EHLO | Greet the server and identify the client |
| MAIL FROM | Give sender's address |
| RCPT TO | Give receiver's address |
| DATA | Start sending the message body |
| QUIT | Close the connection |

### Role in E-mail Delivery

SMTP is the 'postman' that carries the mail from sender to the receiver's server. If the receiver's server is down, SMTP retries for some time and then returns an error message.

## Types / Classification

### SMTP Ports

| Port | Use | Note |
|---|---|---|
| 25 | Server-to-server mail transfer | Often blocked by ISPs for home users |
| 587 | Client to server (submission) with STARTTLS | Recommended for sending |
| 465 | SMTP over SSL/TLS | Secure from the start |

## Real-Life Example

When you send an e-mail from Gmail to a friend on Yahoo, Gmail's SMTP server finds Yahoo's mail server and delivers the message to it using SMTP.

## Advantages

- Simple and reliable.
- Works with all e-mail systems worldwide.
- Can retry delivery if the receiver is not available.
- Supports secure sending with TLS.

## Disadvantages / Limitations

- Only sends mail; cannot download it.
- Basic version has weak security and no sender checking, so spam and spoofing are easy.
- Supports only 7-bit ASCII without MIME.
- No built-in encryption in the original design.

## Comparison Table

| Feature | SMTP | POP3 |
|---|---|---|
| Purpose | Sending mail | Receiving (downloading) mail |
| Type | Push protocol | Pull protocol |
| Direction | Client to server, server to server | Server to client |
| Ports | 25, 587, 465 | 110, 995 |




`},

{
  title: "POP3 (Protocols – POP3)",
  content: `
# POP3 (Protocols – POP3)

## Introduction

- POP3 is a protocol used to **receive** e-mail by downloading it to your device.
- It is one of the oldest and simplest mail retrieval methods.
- It is useful when you want to read mail offline.

## Definition

**POP3 (Post Office Protocol version 3)** is an application-layer protocol that lets an e-mail client download messages from a mail server to the local computer.

- Think of the server as a **post office** and POP3 as you collecting your letters and taking them home.
- It is a **pull protocol**: the client pulls mail from the server.

## Key Points

- Full form: **Post Office Protocol version 3**.
- Default ports: **110** (plain) and **995** (SSL/TLS).
- Mail is **downloaded** to the device and, by default, **deleted from the server**.
- Good for **offline** reading.
- Supports only **one device** well.
- Works only for **receiving**; sending uses SMTP.

## Detailed Explanation

**Working process:**

1. The client connects to the POP3 server (port 110 or 995).
2. **Authentication** – the client sends username and password (USER, PASS).
3. **Transaction** – the client lists mails (STAT, LIST) and downloads them (RETR).
4. Downloaded mails are marked for deletion (DELE) if required.
5. **Update** – on QUIT, the server removes the marked mails and closes the connection.

**Common POP3 commands:**

| Command | Meaning |
|---|---|
| USER / PASS | Login |
| STAT | Number of mails and total size |
| LIST | List of mails |
| RETR n | Download mail number n |
| DELE n | Mark mail n for deletion |
| QUIT | End session |

**Leave a copy option:** Many clients can be set to keep a copy on the server for some days, but folders and read/unread status are still not synchronised.

## Types / Classification

Not applicable.

## Syntax / Code Example

\`\`\`text
C: USER asha                 # send username
S: +OK
C: PASS secret123            # send password
S: +OK Logged in
C: STAT                      # ask mailbox status
S: +OK 2 3500                # 2 mails, 3500 bytes
C: RETR 1                    # download first mail
S: +OK ... (mail text) ...
C: QUIT                      # end session
S: +OK Bye
\`\`\`

**Working in simple words:** The client logs in, checks how many mails are present, downloads mail number 1, and ends the session.

## Real-Life Example

A person uses Outlook on one office computer with POP3. All new mails are downloaded to that computer, so they can read them even without the Internet.

## Advantages

- Simple and easy to set up.
- Mails can be read **offline**.
- Saves server storage because mails are removed from the server.
- Fast after download.

## Disadvantages / Limitations

- Not suitable for **multiple devices**; mails exist on only one.
- If the device crashes, mails may be lost.
- No folder or read-status synchronisation.
- Whole mails are downloaded, which uses more bandwidth.

## Comparison Table

| Feature | POP3 | SMTP |
|---|---|---|
| Purpose | Download mail from server | Send mail |
| Port | 110 / 995 | 25 / 587 / 465 |
| Direction | Server to client | Client to server |
| Type | Pull | Push |

## Important Points to Remember

- POP3 = **Post Office Protocol version 3**.
- It **downloads** mail to the local device.
- Ports **110** and **995**.
- Mail is usually **deleted from the server** after download.
- Best for **one device** and **offline** use.
- It is a **pull** protocol.
`
},

{
  title: "MIME",
  content: `
# MIME

## Introduction

- MIME allows e-mail to carry more than plain English text.
- Thanks to MIME, we can send photos, audio, video, PDFs and text in many languages.
- It extends SMTP, which originally supported only simple ASCII text.

## Definition

**MIME (Multipurpose Internet Mail Extensions)** is an Internet standard that extends the format of e-mail so that it can carry non-text data, attachments and text in different character sets.

- MIME does not send mail; it only **describes and encodes** what is inside the mail.

## Key Points

- Full form: **Multipurpose Internet Mail Extensions**.
- Defined to overcome the **7-bit ASCII** limit of SMTP.
- Uses headers: **MIME-Version, Content-Type, Content-Transfer-Encoding**.
- Content type format: **type/subtype**, e.g. \`image/jpeg\`.
- Uses **Base64** encoding for binary files.
- Also used by **HTTP** to describe web content.

## Detailed Explanation

**Why MIME is needed:**

SMTP was made for plain English text only. It cannot send images, languages like Hindi, or attachments directly. MIME converts such data into text form, sends it, and converts it back at the other end.

**Main MIME headers:**

| Header | Meaning |
|---|---|
| MIME-Version | Tells that MIME is used (value 1.0) |
| Content-Type | Kind of data, e.g. text/html |
| Content-Transfer-Encoding | How data is encoded, e.g. Base64 |
| Content-Disposition | Show inline or as an attachment |

**Encoding methods:**

- **7bit** – normal ASCII text.
- **Quoted-Printable** – mostly text with a few special characters.
- **Base64** – for binary data like images and files; converts 3 bytes into 4 text characters.

**How MIME supports different content:**

The sender's mail program encodes the file (for example, an image) using Base64 and labels it with Content-Type. SMTP sends it as ordinary text. The receiver's program reads the labels, decodes it, and shows or saves the image, audio or video.

## Types / Classification

**Common MIME types:**

| MIME Type | Description | Example |
|---|---|---|
| text/plain | Plain text | Normal text e-mail |
| text/html | HTML content | HTML e-mail |
| image/jpeg | JPEG image | Photo |
| image/png | PNG image | PNG picture |
| audio/mpeg | Audio file | MP3 |
| video/mp4 | Video file | MP4 video |
| application/pdf | PDF document | PDF attachment |
| application/zip | ZIP archive | Compressed file |
| application/json | JSON data | API response |

## Real-Life Example

When you attach a PDF resume to an e-mail, your mail app labels it as \`application/pdf\`, encodes it in Base64, and sends it. The receiver's app decodes it and shows the attachment.

## Advantages

- Allows attachments of any type.
- Supports many languages and character sets.
- Supports HTML-formatted mail.
- Works with existing SMTP servers without change.

## Disadvantages / Limitations

- Encoding increases file size (about 33% for Base64).
- Large attachments can be rejected by servers.
- Can carry malicious attachments (viruses).
- Slightly more processing is needed.

## Comparison Table

| Feature | SMTP | MIME |
|---|---|---|
| Role | Transfers the mail | Describes and encodes mail content |
| Handles attachments? | No (text only) | Yes |
| Works at | Delivery level | Message format level |
| Needs the other? | Can work alone for text | Needs SMTP/HTTP to travel |

## Important Points to Remember

- MIME = **Multipurpose Internet Mail Extensions**.
- It extends **SMTP** beyond ASCII text.
- Type format is **type/subtype**.
- **Base64** encodes binary data.
- **multipart/mixed** is used for attachments.
- MIME headers: **MIME-Version, Content-Type, Content-Transfer-Encoding**.




`
},

{
  title: "IMAP",
  content: `

# IMAP

## Introduction

- IMAP is a protocol for reading e-mail directly **on the server** instead of downloading and deleting it.
- It keeps your mailbox the same on your phone, laptop and web browser.
- It is the main method used by modern mail services.

## Definition

**IMAP (Internet Message Access Protocol)** is an application-layer protocol that lets a client access and manage e-mail stored on a mail server without removing it from the server.

- Mails stay on the server; the client shows a **synchronised view** of them.

## Key Points

- Full form: **Internet Message Access Protocol**.
- Default ports: **143** (plain) and **993** (SSL/TLS).
- Mail stays on the **server**.
- Supports **folders**, **flags** (read, starred) and **searching** on the server.
- Works well on **multiple devices**.
- Can download only **headers** first to save data.

## Detailed Explanation

### Working

1. The client connects to the IMAP server and logs in.
2. It selects a mailbox folder (e.g., INBOX).
3. It fetches only the list or headers of mails first.
4. When you open a mail, its body is fetched.
5. Actions like read, delete, move or star are sent to the server, so all devices see the same state.

### Common IMAP Commands

- LOGIN
- SELECT
- FETCH
- STORE
- SEARCH
- LOGOUT

### Difference from POP3

POP3 downloads and removes mail; IMAP leaves it on the server and keeps all devices in sync.

## Real-Life Example

You read a mail on your phone's Gmail app; it appears as 'read' on your laptop too, because IMAP syncs the status with the server.

## Advantages

- Access mail from **any device** with the same view.
- Mail stays safe on the server (backup).
- Server-side search and folders.
- Saves bandwidth by fetching headers first.

## Disadvantages / Limitations

- Needs more **server storage**.
- Needs an Internet connection for most actions.
- More complex than POP3.
- Server problems can block access to mail.

## Comparison Table

### POP3 vs IMAP

| Feature | POP3 | IMAP |
|---|---|---|
| Full form | Post Office Protocol 3 | Internet Message Access Protocol |
| Mail storage | Downloaded to the client | Kept on the server |
| Ports | 110 / 995 | 143 / 993 |
| Multiple devices | Poor | Excellent |
| Synchronisation | No | Yes (read, folders, flags) |
| Offline access | Good | Limited (needs caching) |
| Server storage use | Low | High |
| Bandwidth | Downloads full mail | Downloads headers first |
| Complexity | Simple | More complex |
| Best for | One device, offline use | Many devices, online use |

## Important Points to Remember

- IMAP = **Internet Message Access Protocol**.
- Ports **143** and **993**.
- Mail **stays on the server**.
- Provides **synchronisation** across devices.
- Supports **folders** and **server-side search**.
- POP3 is simple; IMAP is more powerful.


`
},

{
  title: "Domain Name System (DNS)",
  content: `

# Domain Name Server (DNS)

## Introduction

- DNS is the 'phone book' of the Internet.
- Humans remember names like www.google.com, but computers use numbers called IP addresses. DNS converts names into numbers.
- Without DNS we would have to remember the IP address of every website.

## Definition

**DNS (Domain Name System / Domain Name Server)** is a distributed system that translates human-friendly domain names into machine-readable IP addresses.

- A **domain name** is the readable name of a website, e.g. \`google.com\`.
- An **IP address** is the unique numeric address of a device on a network, e.g. \`142.250.183.4\` (IPv4) or \`2404:6800:4002::2004\` (IPv6).

## Key Points

- DNS works like a **phone book** (name to number).
- It uses **port 53** (UDP mostly, TCP for large data).
- It is **hierarchical** and **distributed** (no single server holds everything).
- Uses **caching** to be fast.
- Important records: **A, AAAA, CNAME, MX, NS, TXT**.
- Process of finding the IP is called **DNS resolution**.

## Detailed Explanation

### Parts of a Domain Name

Read right to left: \`www.google.com.\`

- **Root** – the invisible dot at the end.
- **TLD (Top-Level Domain)** – \`.com\`, \`.org\`, \`.in\`, \`.edu\`.
- **Second-level domain** – \`google\`.
- **Subdomain** – \`www\`.

### DNS Servers Involved

- **Recursive resolver** – the server (usually of your ISP) that does the searching for you.
- **Root server** – knows where TLD servers are.
- **TLD server** – knows where the servers for a domain like google.com are.
- **Authoritative server** – holds the final answer (the real IP address).

### DNS Resolution Process (Step by Step)

1. You type \`www.google.com\` in the browser.
2. The browser checks its **cache**; then the operating system cache.
3. If not found, the request goes to the **recursive resolver**.
4. The resolver asks a **root server**, which points to the **.com TLD server**.
5. The resolver asks the **TLD server**, which points to Google's **authoritative server**.
6. The authoritative server returns the **IP address**.
7. The resolver gives the IP to the browser and **caches** it for a time (**TTL – Time To Live**).
8. The browser connects to that IP address.



`
},


]},
{id:2,title:"HTML",shortTitle:"HTML",description:"HTML Tags, Elements, Forms & Tables.",icon:"</>",color:"green",topics:[{title:"Introduction to HTML",content:"Add your notes here using Markdown."},{title:"HTML Forms and Tables",content:"Add your notes here using Markdown."}]},
{id:3,title:"CSS",shortTitle:"CSS",description:"Selectors, Box Model, Styling & Layout.",icon:"🎨",color:"purple",topics:[{title:"Introduction to CSS",content:"Add your notes here using Markdown."},{title:"CSS Box Model",content:"Add your notes here using Markdown."}]},
{id:4,title:"JavaScript",shortTitle:"JavaScript",description:"Variables, Functions, Events & DOM.",icon:"JS",color:"orange",topics:[{title:"JavaScript Basics",content:"Add your notes here using Markdown."},{title:"Functions and DOM",content:"Add your notes here using Markdown."}]},
{id:5,title:"Advanced Web Technologies",shortTitle:"Advanced Web",description:"XML, Web Services and More.",icon:"⚙",color:"cyan",topics:[{title:"XML Basics",content:"Add your notes here using Markdown."},{title:"Web Services",content:"Add your notes here using Markdown."}]}
];
