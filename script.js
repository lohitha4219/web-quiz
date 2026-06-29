// script.js — Full 100-question Web Development quiz (mostly 4 options, some 5)
// Created for NS LOHITHA
document.addEventListener('DOMContentLoaded', () => {

    // Protect quiz page if auth.js is present
    if (window.__webquizAuth && typeof window.__webquizAuth.isLoggedIn === 'function') {
        const gate = document.getElementById('authGate');
        const quizApp = document.getElementById('quizApp');
        const ok = window.__webquizAuth.isLoggedIn();
        if (!ok) {
            if (gate) gate.classList.remove('hidden');
            if (quizApp) quizApp.classList.add('hidden');
            return;
        }
    }




    // ---------- QUESTIONS: 100 Web Development items ----------
    // Each question object: { question: "...", options: [...], answer: "correct option text" }
    const questions = [{
        question: "What does HTML stand for?",
        options: ["HyperText Markup Language", "Hyperlinks Text Markup", "Home Tool Markup Language", "HighText Markup Language"],
        answer: "HyperText Markup Language"
    }, {
        question: "Which element is used for the largest heading in HTML5?",
        options: ["<h1>", "<h2>", "<h3>", "<header>"],
        answer: "<h1>"
    }, {
        question: "Which attribute is used to provide alternative text for an image?",
        options: ["alt", "title", "src", "role"],
        answer: "alt"
    }, {
        question: "Which tag inserts a line break in HTML?",
        options: ["<br>", "<hr>", "<break>", "<lb>"],
        answer: "<br>"
    }, {
        question: "How do you create a numbered (ordered) list in HTML?",
        options: ["<ol>", "<ul>", "<li>", "<list>"],
        answer: "<ol>"
    }, {
        question: "Which HTML element contains metadata such as the page title?",
        options: ["<head>", "<body>", "<meta>", "<main>"],
        answer: "<head>"
    }, {
        question: "Which attribute of <a> opens the linked document in a new tab?",
        options: ['target="_blank"', 'rel="noopener"', 'href="_new"', 'open="_tab"'],
        answer: 'target="_blank"'
    }, {
        question: "What is the correct HTML element for playing audio?",
        options: ["<audio>", "<sound>", "<media>", "<music>"],
        answer: "<audio>"
    }, {
        question: "Which HTML element is used to create a dropdown selection?",
        options: ["<select>", "<option>", "<datalist>", "<input>"],
        answer: "<select>"
    }, {
        question: "Which tag is used to define a table row?",
        options: ["<tr>", "<td>", "<th>", "<table>"],
        answer: "<tr>"
    },
    {
        question: "How do you link an external CSS file in HTML?",
        options: ['<link rel=\"stylesheet\" href=\"styles.css\">', '<style src=\"styles.css\">', '<css href=\"styles.css\">', '<import src=\"styles.css\">'],
        answer: '<link rel="stylesheet" href="styles.css">'
    }, {
        question: "Which CSS property is used to change font size?",
        options: ["font-size", "text-size", "size", "font-style"],
        answer: "font-size"
    }, {
        question: "Which property controls the space inside an element (between border and content)?",
        options: ["padding", "margin", "gap", "spacing"],
        answer: "padding"
    }, {
        question: "How do you center a block element horizontally in CSS?",
        options: ["margin: 0 auto;", "text-align: center;", "display:center;", "align:center;"],
        answer: "margin: 0 auto;"
    }, {
        question: "Which CSS property changes the background color of an element?",
        options: ["background-color", "bgcolor", "color", "fill"],
        answer: "background-color"
    }, {
        question: "What is the correct CSS syntax to select an element with id 'main'?",
        options: ["#main", ".main", "main", "*main"],
        answer: "#main"
    }, {
        question: "Which unit is relative to the viewport width?",
        options: ["vw", "vh", "em", "rem"],
        answer: "vw"
    }, {
        question: "Which display value makes an element a flex container?",
        options: ["display: flex;", "display: grid;", "display: block;", "display: inline-block;"],
        answer: "display: flex;"
    }, {
        question: "Which property controls the z-axis stacking order?",
        options: ["z-index", "stack-order", "order", "depth"],
        answer: "z-index"
    }, {
        question: "Which CSS selector picks all elements of class 'card'?",
        options: [".card", "#card", "card", "*card"],
        answer: ".card"
    },
    {
        question: "How do you write a CSS comment?",
        options: ["/* comment */", "// comment", "# comment", "<!-- comment -->"],
        answer: "/* comment */"
    }, {
        question: "Which CSS property would you use to make text bold?",
        options: ["font-weight", "font-style", "text-weight", "text-bold"],
        answer: "font-weight"
    }, {
        question: "Which property adds space between flex items along the main axis?",
        options: ["justify-content", "align-items", "align-content", "gap"],
        answer: "justify-content"
    }, {
        question: "Which CSS rule is used to create animations?",
        options: ["@keyframes", "@animate", "@motion", "@transition"],
        answer: "@keyframes"
    }, {
        question: "Which pseudo-class applies when the mouse pointer is over an element?",
        options: [":hover", ":active", ":focus", ":visited"],
        answer: ":hover"
    }, {
        question: "What does 'rem' unit reference?",
        options: ["root font-size", "parent font-size", "viewport font-size", "element font-size"],
        answer: "root font-size"
    }, {
        question: "Which property controls whether content overflows an element?",
        options: ["overflow", "wrap", "clip", "hidden"],
        answer: "overflow"
    }, {
        question: "How to apply a style only for screens smaller than 600px?",
        options: ["@media (max-width: 600px) { }", "@media (min-width:600px) { }", ".small { }", "#mobile { }"],
        answer: "@media (max-width: 600px) { }"
    }, {
        question: "Which property rounds the corners of a box?",
        options: ["border-radius", "corner", "radius", "round-corner"],
        answer: "border-radius"
    }, {
        question: "What is the initial value of 'display' for a <div> element?",
        options: ["block", "inline", "inline-block", "none"],
        answer: "block"
    },
    {
        question: "Which language runs in the browser?",
        options: ["JavaScript", "Python", "Java", "C#"],
        answer: "JavaScript"
    }, {
        question: "How do you declare a variable in modern JavaScript?",
        options: ["let x = 5;", "var x = 5;", "int x = 5;", "x := 5;"],
        answer: "let x = 5;"
    }, {
        question: "Which operator is used for strict equality in JavaScript?",
        options: ["===", "==", "=", "!=="],
        answer: "==="
    }, {
        question: "Which method converts a JSON string to an object?",
        options: ["JSON.parse()", "JSON.stringify()", "parseJSON()", "toObject()"],
        answer: "JSON.parse()"
    }, {
        question: "Which method adds an element to the end of an array?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        answer: "push()"
    }, {
        question: "How do you create an arrow function in JS?",
        options: ["const f = () => {}", "function f() {}", "var f = function() {}", "fn => {}"],
        answer: "const f = () => {}"
    }, {
        question: "What is event delegation in JavaScript?",
        options: ["Attaching a single listener to a parent to handle events for children", "Creating events on the fly", "Delegating callbacks to other functions", "Using web workers"],
        answer: "Attaching a single listener to a parent to handle events for children"
    }, {
        question: "Which DOM method selects the first element that matches a CSS selector?",
        options: ["querySelector()", "getElementsByClassName()", "getElementById()", "querySelectorAll()"],
        answer: "querySelector()"
    }, {
        question: "Which keyword is used to handle exceptions in JavaScript?",
        options: ["try/catch", "throw/catch", "except", "handle"],
        answer: "try/catch"
    }, {
        question: "How do you schedule a function to run after 2 seconds?",
        options: ["setTimeout(fn, 2000)", "setInterval(fn, 2000)", "delay(fn,2000)", "wait(2000).then(fn)"],
        answer: "setTimeout(fn, 2000)"
    },
    {
        question: "Which API is used to make network requests in modern JS?",
        options: ["fetch()", "XMLHttpRequest", "axios()", "http.request()"],
        answer: "fetch()"
    }, {
        question: "Which array method returns a new array with results of calling a function on every element?",
        options: ["map()", "forEach()", "filter()", "reduce()"],
        answer: "map()"
    }, {
        question: "What will typeof null return in JavaScript?",
        options: ["object", "null", "undefined", "number"],
        answer: "object"
    }, {
        question: "What is 'this' in arrow functions?",
        options: ["Lexically bound from surrounding scope", "Dynamic, based on call site", "Always window", "Undefined"],
        answer: "Lexically bound from surrounding scope"
    }, {
        question: "Which storage is persistent across browser sessions until cleared by user/code?",
        options: ["localStorage", "sessionStorage", "cookies (session)", "in-memory"],
        answer: "localStorage"
    }, {
        question: "Which method removes the last element in an array and returns it?",
        options: ["pop()", "shift()", "slice()", "splice()"],
        answer: "pop()"
    }, {
        question: "What does DOM stand for?",
        options: ["Document Object Model", "Document Oriented Model", "Data Object Model", "Display Object Model"],
        answer: "Document Object Model"
    }, {
        question: "Which keyword declares a constant value in JS?",
        options: ["const", "let", "var", "static"],
        answer: "const"
    }, {
        question: "Which method checks whether a value is an array?",
        options: ["Array.isArray()", "typeof", "isArray()", "instanceof Array"],
        answer: "Array.isArray()"
    }, {
        question: "What does JSON.stringify() do?",
        options: ["Converts object to JSON string", "Parses JSON to object", "Pretty prints JSON", "Validates JSON"],
        answer: "Converts object to JSON string"
    },
    {
        question: "Which protocol is secure version of HTTP?",
        options: ["HTTPS", "HTTP", "FTP", "SFTP"],
        answer: "HTTPS"
    }, {
        question: "Which response status code means 'Not Found'?",
        options: ["404", "200", "500", "301"],
        answer: "404"
    }, {
        question: "Which header helps to prevent XSS by restricting content sources?",
        options: ["Content-Security-Policy", "X-Frame-Options", "Strict-Transport-Security", "Referrer-Policy"],
        answer: "Content-Security-Policy"
    }, {
        question: "What does CORS stand for?",
        options: ["Cross-Origin Resource Sharing", "Cross-Object Resource Sharing", "Client-Origin Resource Sharing", "Cross-Origin Response Share"],
        answer: "Cross-Origin Resource Sharing"
    }, {
        question: "Which method does fetch return?",
        options: ["A Promise", "An Observable", "A callback", "A stream"],
        answer: "A Promise"
    }, {
        question: "Which status code indicates a successful creation?",
        options: ["201", "200", "204", "400"],
        answer: "201"
    }, {
        question: "Which SSL/TLS port is default for HTTPS?",
        options: ["443", "80", "21", "22"],
        answer: "443"
    }, {
        question: "Which technique helps reduce load time by storing assets locally in the browser?",
        options: ["caching", "minification", "concatenation", "transpiling"],
        answer: "caching"
    }, {
        question: "Which header is commonly used to indicate JSON content type?",
        options: ["Content-Type: application/json", "Content-Type: text/html", "Content-Type: application/xml", "Content-Type: multipart/form-data"],
        answer: "Content-Type: application/json"
    }, {
        question: "What does SPA stand for in web development?",
        options: ["Single Page Application", "Server Page Application", "Simple Page App", "Single Process App"],
        answer: "Single Page Application"
    },
    {
        question: "Which JS feature allows non-blocking I/O with a single-threaded event loop?",
        options: ["Event loop", "Threads", "Forking", "Blocking I/O"],
        answer: "Event loop"
    }, {
        question: "Which runtime executes JavaScript on the server side (commonly)?",
        options: ["Node.js", "V8", "Deno", "SpiderMonkey"],
        answer: "Node.js"
    }, {
        question: "Which package.json script can be used to run a dev server commonly?",
        options: ["npm run dev", "npm start", "npm build", "npm test"],
        answer: "npm run dev"
    }, {
        question: "Which Node.js function loads built-in modules like 'fs'?",
        options: ["require()", "import()", "include()", "load()"],
        answer: "require()"
    }, {
        question: "Which command installs packages with npm?",
        options: ["npm install package", "npm add package", "npm get package", "npm put package"],
        answer: "npm install package"
    }, {
        question: "Which file typically contains project metadata and dependencies for Node projects?",
        options: ["package.json", "package-lock.json", "npm.json", "modules.json"],
        answer: "package.json"
    }, {
        question: "What is the primary purpose of 'express' in Node.js?",
        options: ["Create web servers and APIs", "Manipulate DOM", "Style components", "Database migrations"],
        answer: "Create web servers and APIs"
    }, {
        question: "Which module provides filesystem operations in Node.js?",
        options: ["fs", "file", "io", "filesystem"],
        answer: "fs"
    }, {
        question: "Which command initializes a new npm project interactively?",
        options: ["npm init", "npm new", "npm create", "npm start"],
        answer: "npm init"
    }, {
        question: "Which Node.js global object provides command-line arguments?",
        options: ["process.argv", "process.args", "argv", "global.args"],
        answer: "process.argv"
    },
    {
        question: "Which data format is commonly used to exchange data between client and server?",
        options: ["JSON", "XML", "YAML", "CSV"],
        answer: "JSON"
    }, {
        question: "Which SQL statement retrieves data from a database?",
        options: ["SELECT", "GET", "FETCH", "RETRIEVE"],
        answer: "SELECT"
    }, {
        question: "Which HTTP method is used to update resource partially?",
        options: ["PATCH", "PUT", "POST", "GET"],
        answer: "PATCH"
    }, {
        question: "Which database is a NoSQL document store example?",
        options: ["MongoDB", "MySQL", "PostgreSQL", "SQLite"],
        answer: "MongoDB"
    }, {
        question: "Which HTTP method should be used to create new resources?",
        options: ["POST", "GET", "PUT", "DELETE"],
        answer: "POST"
    }, {
        question: "What is REST an acronym for (commonly described)?",
        options: ["Representational State Transfer", "Remote State Transfer", "Representation Service Transfer", "Remote Service Transfer"],
        answer: "Representational State Transfer"
    }, {
        question: "Which SQL clause filters rows returned by SELECT?",
        options: ["WHERE", "HAVING", "GROUP BY", "ORDER BY"],
        answer: "WHERE"
    }, {
        question: "Which index type speeds up text search in many databases?",
        options: ["Full-text index", "Unique index", "Primary index", "Foreign index"],
        answer: "Full-text index"
    }, {
        question: "Which DB property ensures ACID transactions?",
        options: ["Atomicity", "Denormalization", "Scalability", "Partitioning"],
        answer: "Atomicity"
    }, {
        question: "Which tool helps version control your code?",
        options: ["Git", "SVN", "Mercurial", "TFS"],
        answer: "Git"
    },
    {
        question: "Which command shows current git branches?",
        options: ["git branch", "git status", "git log", "git checkout"],
        answer: "git branch"
    }, {
        question: "Which git command stages changes for commit?",
        options: ["git add", "git stage", "git commit -a", "git push"],
        answer: "git add"
    }, {
        question: "Which git command uploads commits to a remote repository?",
        options: ["git push", "git pull", "git commit", "git fetch"],
        answer: "git push"
    }, {
        question: "Which file defines ignore rules for Git?",
        options: [".gitignore", ".ignore", ".gitconfig", "gitignore.txt"],
        answer: ".gitignore"
    }, {
        question: "Which branching strategy is lightweight and uses feature branches?",
        options: ["Git Flow", "Feature Branching", "Trunk-Based", "Forking Workflow"],
        answer: "Feature Branching"
    }, {
        question: "Which tag in HTML is used to include an external JavaScript file?",
        options: ['<script src="app.js"></script>', '<js src="app.js"></js>', '<include src="app.js">', '<script href="app.js">'],
        answer: '<script src="app.js"></script>'
    }, {
        question: "Which meta tag sets the viewport for responsive design?",
        options: ['<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">', '<meta name=\"responsive\">', '<meta viewport>', '<meta name=\"view\">'],
        answer: '<meta name="viewport" content="width=device-width, initial-scale=1">'
    }, {
        question: "Which input type provides a color picker in modern browsers?",
        options: ["color", "palette", "pick", "input-color"],
        answer: "color"
    }, {
        question: "Which input type masks user input for passwords?",
        options: ["password", "text", "secret", "masked"],
        answer: "password"
    }, {
        question: "Which attribute is used to make an input field required?",
        options: ["required", "validate", "needed", "must"],
        answer: "required"
    },
    {
        question: "Which HTML5 API allows web apps to run offline with cached resources?",
        options: ["Service Workers", "WebSockets", "LocalStorage", "IndexedDB"],
        answer: "Service Workers"
    }, {
        question: "Which API is good for storing large amounts of structured data in the browser?",
        options: ["IndexedDB", "sessionStorage", "localStorage", "cookies"],
        answer: "IndexedDB"
    }, {
        question: "Which API enables two-way real-time communication between client and server?",
        options: ["WebSocket", "Server-Sent Events", "Long polling", "Fetch"],
        answer: "WebSocket"
    }, {
        question: "Which HTML element is used to group form controls?",
        options: ["<fieldset>", "<form-group>", "<group>", "<form>"],
        answer: "<fieldset>"
    }, {
        question: "Which event fires when the DOM has fully loaded (without waiting for images)?",
        options: ["DOMContentLoaded", "load", "ready", "onload"],
        answer: "DOMContentLoaded"
    }, {
        question: "Which CSS property controls whether an element is visible but not occupying space?",
        options: ["visibility", "display", "opacity", "hidden"],
        answer: "visibility"
    }, {
        question: "Which attribute on <script> can be used to defer execution till parsing finishes?",
        options: ["defer", "async", "type", "nomodule"],
        answer: "defer"
    }, {
        question: "Which Content Delivery Network (CDN) benefit is true?",
        options: ["Reduced latency by serving from edge", "Increases server CPU", "Replaces caching", "Always required"],
        answer: "Reduced latency by serving from edge"
    }, {
        question: "Which image format supports transparency and is lossless?",
        options: ["PNG", "JPEG", "GIF", "BMP"],
        answer: "PNG"
    }, {
        question: "Which image format is best for photographs with many colors?",
        options: ["JPEG", "PNG", "SVG", "GIF"],
        answer: "JPEG"
    },
    {
        question: "Which vector image format scales without loss of quality?",
        options: ["SVG", "PNG", "JPEG", "BMP"],
        answer: "SVG"
    }, {
        question: "Which HTML element is best for semantic navigation links?",
        options: ["<nav>", "<div>", "<ul>", "<header>"],
        answer: "<nav>"
    }, {
        question: "Which HTML element is used to denote important text semantically?",
        options: ["<strong>", "<b>", "<i>", "<em>"],
        answer: "<strong>"
    }, {
        question: "Which tag is used to provide a caption to a <figure>?",
        options: ["<figcaption>", "<caption>", "<label>", "<legend>"],
        answer: "<figcaption>"
    }, {
        question: "Which HTTP header can force browsers to use HTTPS for a domain?",
        options: ["Strict-Transport-Security", "X-Content-Type-Options", "X-Frame-Options", "Referrer-Policy"],
        answer: "Strict-Transport-Security"
    }, {
        question: "Which CSS function allows embedding custom properties (CSS variables)?",
        options: ["var()", "env()", "calc()", "attr()"],
        answer: "var()"
    }, {
        question: "Which method is used to stop event propagation in JavaScript?",
        options: ["event.stopPropagation()", "event.preventDefault()", "return false;", "stop()"],
        answer: "event.stopPropagation()"
    }, {
        question: "Which React concept is used to store component local state (hooks)?",
        options: ["useState", "useEffect", "useRef", "useContext"],
        answer: "useState"
    }, {
        question: "Which JSX expression renders dynamic content inside components?",
        options: ["{ }", "( )", "[ ]", "< >"],
        answer: "{ }"
    }, {
        question: "Which lifecycle hook (class components) runs after initial render?",
        options: ["componentDidMount", "componentWillMount", "render", "componentWillUnmount"],
        answer: "componentDidMount"
    },
    {
        question: "Which HTTP method is idempotent and used to replace a resource entirely?",
        options: ["PUT", "POST", "PATCH", "DELETE"],
        answer: "PUT"
    }, {
        question: "Which property in CSS Grid defines column sizes?",
        options: ["grid-template-columns", "grid-columns", "column-template", "grid-rows"],
        answer: "grid-template-columns"
    }, {
        question: "Which browser tool lets you inspect CSS and DOM live?",
        options: ["DevTools", "Task Manager", "Console Only", "Network Monitor"],
        answer: "DevTools"
    }, {
        question: "Which technique shrinks file sizes by removing whitespace and comments?",
        options: ["Minification", "Transpiling", "Bundling", "Linting"],
        answer: "Minification"
    }, {
        question: "Which tool transpiles modern JS to older versions for browser support?",
        options: ["Babel", "Webpack", "Rollup", "Parcel"],
        answer: "Babel"
    }, {
        question: "Which bundler is commonly used to bundle JS modules for production?",
        options: ["Webpack", "Gulp", "Grunt", "Make"],
        answer: "Webpack"
    }, {
        question: "Which meta tag helps control referrer information sent by the browser?",
        options: ["Referrer-Policy", "Content-Security-Policy", "X-UA-Compatible", "Viewport"],
        answer: "Referrer-Policy"
    }, {
        question: "Which HTTP header can prevent clickjacking by restricting framing?",
        options: ["X-Frame-Options", "Content-Security-Policy", "Referrer-Policy", "Permissions-Policy"],
        answer: "X-Frame-Options"
    }, {
        question: "Which CSS property allows creating drop shadows?",
        options: ["box-shadow", "text-shadow", "shadow", "drop-shadow"],
        answer: "box-shadow"
    }, {
        question: "Which HTML attribute makes a link accessible by keyboard with Enter key (native)?",
        options: ["href", "tabindex", "role", "aria-label"],
        answer: "href"
    },
    {
        question: "Which ARIA attribute gives an accessible name to an element?",
        options: ["aria-label", "aria-hidden", "role", "aria-describedby"],
        answer: "aria-label"
    }, {
        question: "Which CSS property is used to control text overflow with ellipsis?",
        options: ["text-overflow", "overflow-text", "ellipsis", "clip"],
        answer: "text-overflow"
    }, {
        question: "Which JS API provides animation frame scheduling?",
        options: ["requestAnimationFrame", "setTimeout", "setInterval", "animateFrame"],
        answer: "requestAnimationFrame"
    }, {
        question: "Which HTTP status code indicates 'Too Many Requests' (rate limiting)?",
        options: ["429", "403", "401", "500"],
        answer: "429"
    }, {
        question: "Which tool is commonly used to lint JavaScript for style and errors?",
        options: ["ESLint", "JSHint", "JSCS", "Prettier"],
        answer: "ESLint"
    }, {
        question: "Which file extension is commonly used for React components in JSX?",
        options: [".jsx", ".js", ".ts", ".tsx"],
        answer: ".jsx"
    }, {
        question: "Which CSS property allows smooth transitions for property changes?",
        options: ["transition", "transform", "animation", "motion"],
        answer: "transition"
    }, {
        question: "Which HTML form attribute controls where data is sent on submit?",
        options: ["action", "method", "target", "name"],
        answer: "action"
    }, {
        question: "Which HTTP method is safe and should not change server state?",
        options: ["GET", "POST", "PUT", "DELETE"],
        answer: "GET"
    }, {
        question: "Which CSS function performs calculations (e.g., widths)?",
        options: ["calc()", "var()", "min()", "max()"],
        answer: "calc()"
    },
    {
        question: "Which tool helps inspect network requests in the browser?",
        options: ["Network panel (DevTools)", "Console", "Elements panel", "Application panel"],
        answer: "Network panel (DevTools)"
    }, {
        question: "Which JS construct creates a new promise that resolves later?",
        options: ["new Promise((resolve, reject) => {})", "Promise.create()", "Promise.new()", "Promise.make()"],
        answer: "new Promise((resolve, reject) => {})"
    }, {
        question: "Which CSS property controls transparency of an element?",
        options: ["opacity", "visibility", "display", "filter"],
        answer: "opacity"
    }, {
        question: "Which React hook runs side-effects after render?",
        options: ["useEffect", "useState", "useMemo", "useRef"],
        answer: "useEffect"
    }, {
        question: "Which HTTP header can enable Cross-Origin Resource Sharing?",
        options: ["Access-Control-Allow-Origin", "Content-Security-Policy", "X-Frame-Options", "Cache-Control"],
        answer: "Access-Control-Allow-Origin"
    }, {
        question: "Which HTML element is used to embed a responsive video natively?",
        options: ["<video>", "<iframe>", "<embed>", "<object>"],
        answer: "<video>"
    }, {
        question: "Which CSS property places items along the cross axis in flexbox?",
        options: ["align-items", "justify-content", "align-content", "order"],
        answer: "align-items"
    }, {
        question: "Which JS array method returns items that pass a test?",
        options: ["filter()", "map()", "reduce()", "forEach()"],
        answer: "filter()"
    }, {
        question: "Which command starts a local dev server with many frameworks commonly?",
        options: ["npm start", "npm run build", "npm test", "npm install"],
        answer: "npm start"
    }, {
        question: "Which browser storage is cleared when the tab is closed?",
        options: ["sessionStorage", "localStorage", "IndexedDB", "cookies"],
        answer: "sessionStorage"
    },
    {
        question: "Which HTTP header tells the browser how long to cache a resource?",
        options: ["Cache-Control", "Expires", "Pragma", "ETag"],
        answer: "Cache-Control"
    }, {
        question: "Which CSS unit is relative to the font-size of the root element?",
        options: ["rem", "em", "px", "%"],
        answer: "rem"
    }, {
        question: "Which front-end framework uses virtual DOM and components?",
        options: ["React", "jQuery", "Bootstrap", "Svelte"],
        answer: "React"
    }, {
        question: "Which meta tag helps older IE use the latest rendering engine (legacy)?",
        options: ['<meta http-equiv="X-UA-Compatible" content="IE=edge">', '<meta name="compat">', '<meta http-equiv="IE">', '<meta name="ie-mode">'],
        answer: '<meta http-equiv="X-UA-Compatible" content="IE=edge">'
    }, {
        question: "Which CSS property short-hand sets top/right/bottom/left margins?",
        options: ["margin", "padding", "gap", "border"],
        answer: "margin"
    }, {
        question: "Which value of display creates a grid layout?",
        options: ["grid", "flex", "block", "table"],
        answer: "grid"
    }, {
        question: "Which technique reduces the number of HTTP requests by inlining small assets?",
        options: ["Inlining", "Bundling", "Minifying", "Tree-shaking"],
        answer: "Inlining"
    }, {
        question: "Which tool performs tree-shaking to remove unused code in builds?",
        options: ["Webpack/Rollup (bundlers)", "Babel", "ESLint", "Prettier"],
        answer: "Webpack/Rollup (bundlers)"
    }, {
        question: "Which CSS property is used to control element order in flexbox?",
        options: ["order", "z-index", "position", "flex-order"],
        answer: "order"
    }, {
        question: "Which HTML attribute improves accessibility by describing an element for screen readers?",
        options: ["aria-label", "title", "alt", "role"],
        answer: "aria-label"
    },
    {
        question: "Which command creates a production build in many JS frameworks?",
        options: ["npm run build", "npm start", "npm test", "npm run dev"],
        answer: "npm run build"
    }, {
        question: "Which CSS property makes an element fixed relative to the viewport?",
        options: ["position: fixed;", "position: absolute;", "position: sticky;", "position: static;"],
        answer: "position: fixed;"
    }, {
        question: "Which HTML element groups a list of checkboxes semantically?",
        options: ["<fieldset>", "<div>", "<group>", "<form>"],
        answer: "<fieldset>"
    }, {
        question: "Which element is used to create an accessible label connected to form control?",
        options: ["<label>", "<span>", "<div>", "<caption>"],
        answer: "<label>"
    }, {
        question: "Which property makes text not wrap to the next line?",
        options: ["white-space: nowrap;", "text-wrap: none;", "overflow-wrap: none;", "wrap: off;"],
        answer: "white-space: nowrap;"
    }, {
        question: "Which CSS property allows multi-line truncation with ellipsis (modern approach)?",
        options: ["-webkit-line-clamp (with display: -webkit-box)", "text-overflow: ellipsis", "overflow: hidden", "white-space: nowrap"],
        answer: "-webkit-line-clamp (with display: -webkit-box)"
    }, {
        question: "Which MIME type is used for SVG images?",
        options: ["image/svg+xml", "image/png", "image/jpeg", "image/gif"],
        answer: "image/svg+xml"
    }, {
        question: "Which HTML attribute on <img> provides the image source URL?",
        options: ["src", "href", "data-src", "source"],
        answer: "src"
    }, {
        question: "Which JS method stops the default action of an event (e.g., link navigation)?",
        options: ["event.preventDefault()", "event.stopPropagation()", "return false;", "event.stopImmediatePropagation()"],
        answer: "event.preventDefault()"
    }, {
        question: "Which tool helps bundle CSS and JS together and watch changes?",
        options: ["Webpack", "Babel", "ESLint", "Prettier"],
        answer: "Webpack"
    },
    {
        question: "Which HTTP status code is returned for unauthorized access (authentication required)?",
        options: ["401", "403", "404", "500"],
        answer: "401"
    }, {
        question: "Which CSS property is used to control the transparency of a color using RGBA?",
        options: ["opacity (or rgba())", "transparency", "alpha", "filter: opacity()"],
        answer: "opacity (or rgba())"
    }, {
        question: "Which function is used to parse a URL query string in modern browsers (URL API)?",
        options: ["new URLSearchParams(location.search)", "parseQuery()", "getQuery()", "URL.parse()"],
        answer: "new URLSearchParams(location.search)"
    }, {
        question: "Which attribute on a <form> controls the HTTP method used on submit?",
        options: ["method", "action", "enctype", "target"],
        answer: "method"
    }, {
        question: "Which CSS property is used to change the order of grid items across columns and rows?",
        options: ["order", "grid-area", "grid-row", "z-index"],
        answer: "order"
    }, {
        question: "Which JS method serializes form data into a URL-encoded string (FormData -> URLSearchParams)?",
        options: ["new URLSearchParams(new FormData(form)).toString()", "FormData.serialize()", "serializeForm(form)", "form.toString()"],
        answer: "new URLSearchParams(new FormData(form)).toString()"
    }, {
        question: "Which performance metric measures time until the page is visually stable?",
        options: ["Cumulative Layout Shift (CLS)", "First Contentful Paint (FCP)", "Time to Interactive (TTI)", "Largest Contentful Paint (LCP)"],
        answer: "Cumulative Layout Shift (CLS)"
    }, {
        question: "Which metric measures the largest image/text block visibility time?",
        options: ["Largest Contentful Paint (LCP)", "First Paint", "Time to Interactive", "Speed Index"],
        answer: "Largest Contentful Paint (LCP)"
    }, {
        question: "Which directive in service worker caching strategy helps return cached assets when offline?",
        options: ["Cache falling back to network (Cache-first)", "Network-first", "Stale-while-revalidate", "No-cache"],
        answer: "Cache falling back to network (Cache-first)"
    }, {
        question: "Which modern image format provides better compression than JPEG and supports transparency?",
        options: ["WebP", "JPEG 2000", "BMP", "TIFF"],
        answer: "WebP"
    },
    {
        question: "Which CSS property helps create responsive typography by combining viewport units with calc()? (example pattern)",
        options: ["clamp() or calc() patterns", "font-resize", "fluid-font", "responsive-size"],
        answer: "clamp() or calc() patterns"
    }, {
        question: "Which HTML element is used to embed inline SVG directly in markup?",
        options: ["<svg>", "<img>", "<object>", "<canvas>"],
        answer: "<svg>"
    }, {
        question: "Which JS operator is used to spread elements of an array into another array or function args?",
        options: ["... (spread)", "++ (increment)", "** (exponent)", "&& (and)"],
        answer: "... (spread)"
    }, {
        question: "Which security best practice prevents JavaScript execution from inline script blocks and attributes?",
        options: ["CSP with 'unsafe-inline' disallowed", "Allow inline scripts", "Use eval for trusted scripts", "Disable CSP"],
        answer: "CSP with 'unsafe-inline' disallowed"
    }, {
        question: "Which tool can be used to measure accessibility issues in the browser?",
        options: ["Lighthouse", "DevTools Console", "Network Panel", "Elements Panel"],
        answer: "Lighthouse"
    }, {
        question: "Which attribute indicates an input should have autofocus when page loads?",
        options: ["autofocus", "autoselect", "focus", "autostart"],
        answer: "autofocus"
    }, {
        question: "Which CSS property allows content to stick to a position until scrolled past?",
        options: ["position: sticky;", "position: fixed;", "position: absolute;", "position: relative;"],
        answer: "position: sticky;"
    }, {
        question: "Which JS statement creates a module export in CommonJS style?",
        options: ["module.exports = value;", "export default value;", "exports = value;", "export = value;"],
        answer: "module.exports = value;"
    }, {
        question: "Which modern JS runtime is designed as a secure alternative to Node.js and uses V8?",
        options: ["Deno", "Node.js", "Bun", "Rhino"],
        answer: "Deno"
    }, {
        question: "Which HTTP header can enable HSTS for a domain?",
        options: ["Strict-Transport-Security", "X-Content-Type-Options", "X-Frame-Options", "Referrer-Policy"],
        answer: "Strict-Transport-Security"
    },
    {
        question: "Which method in JS would you use to deep clone a simple object (beware of functions)?",
        options: ["structuredClone(obj) or JSON.parse(JSON.stringify(obj))", "Object.assign({}, obj)", "{...obj}", "clone(obj)"],
        answer: "structuredClone(obj) or JSON.parse(JSON.stringify(obj))"
    }, {
        question: "Which CSS feature allows nesting selectors inside others (supported in modern CSS specs)?",
        options: ["Nesting (new spec / preprocessor style)", "@nest", ":nest", "nest()"],
        answer: "Nesting (new spec / preprocessor style)"
    }, {
        question: "Which attribute on <img> hints to lazy-load images in supported browsers?",
        options: ["loading=\"lazy\"", "defer", "async", "lazyload"],
        answer: "loading=\"lazy\""
    }, {
        question: "Which tool bundles CSS, JS and assets and often supports hot reloading in dev?",
        options: ["Vite", "Webpack", "Parcel", "Rollup"],
        answer: "Vite"
    }, {
        question: "Which React concept avoids prop drilling for global-like data?",
        options: ["Context API", "Redux only", "Props only", "Refs"],
        answer: "Context API"
    }, {
        question: "Which CSS property controls the number of columns in a multi-column layout?",
        options: ["column-count", "columns", "grid-template-columns", "columns-count"],
        answer: "column-count"
    }, {
        question: "Which HTTP response header helps with caching validation between client and server?",
        options: ["ETag", "Last-Modified", "Cache-Control", "All of these"],
        answer: "ETag"
    }, {
        question: "Which HTTP method deletes a resource?",
        options: ["DELETE", "REMOVE", "DESTROY", "ERASE"],
        answer: "DELETE"
    }, {
        question: "Which CSS property is used to change the font family?",
        options: ["font-family", "font", "text-font", "typeface"],
        answer: "font-family"
    }, {
        question: "Which HTML attribute sets the language of the document?",
        options: ["lang", "xml:lang", "locale", "language"],
        answer: "lang"
    },
    {
        question: "Which JavaScript method is used to add an event listener?",
        options: ["addEventListener()", "attachEvent()", "on()", "listen()"],
        answer: "addEventListener()"
    }, {
        question: "Which HTML element is used to present tabular data?",
        options: ["<table>", "<grid>", "<data>", "<list>"],
        answer: "<table>"
    }, {
        question: "Which CSS unit is best for consistent vertical rhythm relative to root font size?",
        options: ["rem", "em", "px", "vh"],
        answer: "rem"
    }, {
        question: "Which Web API allows background threads for heavy computations?",
        options: ["Web Workers", "Service Workers", "Shared Workers", "Worker Threads"],
        answer: "Web Workers"
    }, {
        question: "Which JS keyword is used to create a class (ES6)?",
        options: ["class", "function", "prototype", "struct"],
        answer: "class"
    }, {
        question: "Which event fires when an image finishes loading?",
        options: ["load", "readystatechange", "DOMContentLoaded", "ready"],
        answer: "load"
    }, {
        question: "Which property controls the maximum width an element can have?",
        options: ["max-width", "width", "min-width", "fit-width"],
        answer: "max-width"
    }, {
        question: "Which CSS property is used to create a flexible layout that wraps items?",
        options: ["flex-wrap", "wrap", "flex-flow", "flex-direction"],
        answer: "flex-wrap"
    }, {
        question: "Which attribute allows context menu alternatives for accessibility (aria)?",
        options: ["aria-haspopup", "aria-controls", "aria-expanded", "aria-hidden"],
        answer: "aria-haspopup"
    }, {
        question: "Which JS console method shows an informational message?",
        options: ["console.info()", "console.log()", "console.warn()", "console.error()"],
        answer: "console.info()"
    }];

    // ---------- DOM refs & state ----------
    const qNumberEl = document.getElementById('questionNumber');
    const qTextEl = document.getElementById('questionText');
    const optionsEl = document.getElementById('options');
    const nextBtn = document.getElementById('nextBtn');
    const quitBtn = document.getElementById('quitBtn');
    const progressText = document.getElementById('progressText');
    const progressFill = document.getElementById('progressFill');
   const scoreEl =
document.getElementById("score") ||
document.getElementById("scoreTop");
    const scoreTopEl = document.getElementById('scoreTop');

    const timeText = document.getElementById('timeText');
    const timeFill = document.getElementById('timeFill');
    const resultModal = document.getElementById('resultModal');
    const resultEmoji = document.getElementById('resultEmoji');
    const resultTitle = document.getElementById('resultTitle');
    const resultText = document.getElementById('resultText');
    const retryBtn = document.getElementById('retryBtn');
    const downloadBtn = document.getElementById('downloadBtn');
    const yearEl = document.getElementById('year');

    if (yearEl)
        yearEl.textContent = new Date().getFullYear();

    if (!qNumberEl || !qTextEl || !optionsEl || !nextBtn || !progressFill || !scoreEl || !timeText || !timeFill) {
        console.error('Missing required DOM elements. Make sure your HTML contains IDs used by the script.');
        return;
    }

    let current = 0;
    let score = 0;
    const TOTAL = questions.length;
    const QUESTION_TIME = 20;
    let timeLeft = QUESTION_TIME;
    let timerInterval = null;
    let autoNextTimeout = null;

    // ---------- helpers ----------
    function fisherYatesShuffle(arr) {
        const a = arr.slice();
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i],a[j]] = [a[j], a[i]];
        }
        return a;
    }

    function startQuiz() {
        current = 0;
        score = 0;
        scoreEl.textContent = `Score: ${score}`;
        if (scoreTopEl) scoreTopEl.textContent = `Score: ${score}`;

        // optional: shuffle question order to vary every run
        // questions = fisherYatesShuffle(questions); // avoid mutating const; we can create a copy if desired
        renderQuestion();
        if (resultModal)
            resultModal.classList.add('hidden');
    }

    function renderQuestion() {
        clearTimers();

        const q = questions[current];
        // shuffle options each time to randomize positions
        const opts = fisherYatesShuffle(q.options);

        qNumberEl.textContent = `Q ${current + 1}`;
        qTextEl.textContent = q.question;

        optionsEl.innerHTML = '';
        opts.forEach( (optText, idx) => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'option-btn';
            btn.dataset.opt = optText;

            const span = document.createElement('span');
            span.className = 'opt-letter';
            span.textContent = `${String.fromCharCode(65 + idx)}. `;
            btn.appendChild(span);

            const txt = document.createTextNode(optText);
            btn.appendChild(txt);

            btn.addEventListener('click', onOptionClick);
            optionsEl.appendChild(btn);
        }
        );

        progressText.textContent = `Question ${current + 1} / ${TOTAL}`;
        progressFill.style.width = `${Math.round((current / TOTAL) * 100)}%`;

        nextBtn.disabled = true;
        timeLeft = QUESTION_TIME;
        updateTimeUI();
        startTimer();
    }

    function startTimer() {
        clearTimers();
        updateTimeUI();
        timerInterval = setInterval( () => {
            timeLeft -= 1;
            updateTimeUI();
            if (timeLeft <= 0) {
                clearTimers();
                handleTimeout();
            }
        }
        , 1000);
    }

    function clearTimers() {
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
        }
        if (autoNextTimeout) {
            clearTimeout(autoNextTimeout);
            autoNextTimeout = null;
        }
    }

    function updateTimeUI() {
        if (timeText)
            timeText.textContent = `Time Left: ${timeLeft}s`;
        const fraction = Math.max(0, timeLeft) / QUESTION_TIME;
        const pct = Math.max(0, Math.round(fraction * 100));
        if (timeFill) {
            timeFill.style.width = `${pct}%`;
            if (fraction > 0.6)
                timeFill.style.background = 'var(--timer-green)';
            else if (fraction > 0.3)
                timeFill.style.background = 'var(--timer-orange)';
            else
                timeFill.style.background = 'var(--timer-red)';
        }
    }

    function onOptionClick(e) {
        const btn = e.currentTarget;
        if (!btn || btn.disabled)
            return;

        clearTimers();

        const selectedText = btn.dataset.opt;
        const correctText = questions[current].answer;

        const btns = optionsEl.querySelectorAll('.option-btn');
        btns.forEach(b => {
            b.disabled = true;
            b.classList.add('disabled');
            if (b.dataset.opt === correctText)
                b.classList.add('correct');
        }
        );

        if (selectedText === correctText) {
            btn.classList.add('correct');
            score += 1;
            animateScorePulse(true);
        } else {
            btn.classList.add('wrong');
            animateScorePulse(false);
        }

        scoreEl.textContent = `Score: ${score}`;
        if (scoreTopEl) scoreTopEl.textContent = `Score: ${score}`;
        nextBtn.disabled = false;
    }

    function handleTimeout() {
        const correctText = questions[current].answer;
        const btns = optionsEl.querySelectorAll('.option-btn');
        btns.forEach(b => {
            b.disabled = true;
            b.classList.add('disabled');
            if (b.dataset.opt === correctText)
                b.classList.add('correct');
        }
        );

        animateScorePulse(false);

        // auto-next after short pause
        autoNextTimeout = setTimeout( () => {
            current += 1;
            if (current < TOTAL)
                renderQuestion();
            else
                showResult();
        }
        , 900);
    }

    function animateScorePulse(correct) {
        if (!scoreEl)
            return;
        scoreEl.animate([{
            transform: 'scale(1)',
            color: '#eaf2ff'
        }, {
            transform: 'scale(1.08)',
            color: correct ? 'var(--success)' : 'var(--danger)'
        }, {
            transform: 'scale(1)',
            color: '#eaf2ff'
        }], {
            duration: 340,
            easing: 'ease-out'
        });
    }

    nextBtn.addEventListener('click', () => {
        clearTimers();
        current += 1;
        if (current < TOTAL)
            renderQuestion();
        else
            showResult();
    }
    );

    if (quitBtn)
        quitBtn.addEventListener('click', showResult);
    if (retryBtn)
        retryBtn.addEventListener('click', () => {
            if (resultModal)
                resultModal.classList.add('hidden');
            startQuiz();
        }
        );

    if (downloadBtn)
        downloadBtn.addEventListener('click', () => {
            clearTimers();
            const pct = Math.round((score / TOTAL) * 100);
            let content = `Web Quiz Results - NS Lohitha\nScore: ${score}/${TOTAL}\nPercent: ${pct}%\nDate: ${new Date().toLocaleString()}\n\n`;
            questions.forEach( (q, i) => {
                content += `${i + 1}. ${q.question}\nCorrect: ${q.answer}\n\n`;
            }
            );
            const blob = new Blob([content],{
                type: 'text/plain'
            });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'web-quiz-results.txt';
            document.body.appendChild(a);
            a.click();
            a.remove();
            URL.revokeObjectURL(url);
        }
        );

    function showResult() {
        clearTimers();
        progressFill.style.width = `100%`;
        const pct = Math.round((score / TOTAL) * 100);
        if (resultText)
            resultText.textContent = `Your score is ${score} / ${TOTAL} (${pct}%)`;
        const pass = pct >= 70;
        if (resultEmoji && resultTitle) {
            if (pass) {
                resultEmoji.textContent = '🏆';
                resultEmoji.classList.remove('lose');
                resultEmoji.classList.add('win');
                resultTitle.textContent = 'Great job — Web Wizard! 🎉';
            } else {
                resultEmoji.textContent = '❌';
                resultEmoji.classList.remove('win');
                resultEmoji.classList.add('lose');
                resultTitle.textContent = 'Keep practicing — you got this!';
            }
        }
        if (resultModal)
            resultModal.classList.remove('hidden');
    }

    // reveal observer for subtle appear animations (keeps your original UI effect)
    const io = new IntersectionObserver( (entries) => {
        entries.forEach(en => {
            if (en.isIntersecting)
                en.target.classList.add('in-view');
        }
        );
    }
    ,{
        threshold: 0.12
    });
    document.querySelectorAll('.reveal').forEach(r => io.observe(r));

    // observe dynamically added option buttons for reveal animations
    const mo = new MutationObserver( (mutations) => {
        mutations.forEach(m => {
            m.addedNodes.forEach(node => {
                if (node.nodeType === 1 && node.classList.contains('option-btn')) {
                    io.observe(node);
                }
            }
            );
        }
        );
    }
    );
    mo.observe(optionsEl, {
        childList: true
    });

    // init
    if (scoreEl)
        scoreEl.textContent = `Score: ${score}`;
    if (yearEl)
        yearEl.textContent = new Date().getFullYear();
    startQuiz();

}
);
