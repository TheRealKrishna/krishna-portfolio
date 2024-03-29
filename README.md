<h1>Krishna Agarwal - Personal Portfolio</h1>
<p>Welcome to My Personal Portfolio! This project is built with React for the frontend and Node.js for the backend API,
  utilizing Express for server functionality. It serves as a showcase of my projects, skills, and insights about him.
  Engage with dynamic Three.js visualizations, showcasing my creative prowess. Discover my diverse skill set and past
  projects, each reflecting my passion and expertise. Connect with me effortlessly through the contact form, enabling
  seamless communication and collaboration opportunities.</p>
<h2>Technologies Used</h2>
<ul>
  <li>React</li>
  <li>Three.js</li>
  <li>Node.js</li>
  <li>Express</li>
</ul>
<h2>Directory Structure</h2>
<pre><div class="dark bg-gray-950 rounded-md"><div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md"></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-scss">krishna-portfolio/ (React frontend)
│   └── ...
├── api/ (Node.js backend)
│   └── ...
└── README<span class="hljs-selector-class">.md</span>
</code></div></div></pre>
<h2>Environment Variables</h2>
<h3>For Frontend (.env)</h3>
<ul>
  <li><code>REACT_APP_BACKEND_URL</code>: Backend API endpoint URL.</li>
  <li><code>REACT_APP_RECAPTCHA_SITE_KEY</code>: Site key for Google reCAPTCHA verification.</li>
</ul>
<h3>For Backend (api/.env)</h3>
<ul>
  <li><code>node_mailer_url</code>: URL endpoint for SMTP server.</li>
  <li><code>node_mailer_username</code>: Username for SMTP server authentication.</li>
  <li><code>node_mailer_password</code>: Password for SMTP server authentication.</li>
  <li><code>node_mailer_receiving_email</code>: Email address for receiving messages.</li>
  <li><code>RECAPTCHA_SECRET_KEY</code>: Secret key for Google reCAPTCHA verification.</li>
</ul>
<h2>Setting Up</h2>
<ol>
  <li>
    <p>Clone the repository:</p>
    <pre><div class="dark bg-gray-950 rounded-md"><div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md"></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash">git <span class="hljs-built_in">clone</span> https://github.com/TheRealKrishna/krishna-portfolio
</code></div></div></pre>
  </li>
  <li>
    <p>Navigate to the project directory:</p>
    <pre><div class="dark bg-gray-950 rounded-md"><div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md"></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash"><span class="hljs-built_in">cd</span> krishna-portfolio
</code></div></div></pre>
  </li>
  <li>
    <p>Set up frontend environment variables by creating a <code>.env</code> file inside the
      <code>krishna-portfolio</code> directory and add the necessary frontend variables mentioned above.</p>
  </li>
  <li>
    <p>Set up backend environment variables by creating a <code>.env</code> file inside the <code>krishna-portfolio/api</code> directory
      and add the necessary backend variables mentioned above.</p>
  </li>
  <li>
    <p>Install dependencies for both frontend and backend:</p>
    <pre><div class="dark bg-gray-950 rounded-md"><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash">npm install
<span class="hljs-built_in">cd</span> api
npm install
</code></div></div></pre>
  </li>
  <li>
    <p>Start the backend server:</p>
    <pre><div class="dark bg-gray-950 rounded-md"><div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md"></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-sql">node <span class="hljs-keyword">index.js</span>
</code></div></div></pre>
  </li>
  <li>
    <p>Start the frontend development server:</p>
    <pre><div class="dark bg-gray-950 rounded-md"><div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md"></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-sql"><span class="hljs-keyword">cd..</span>
npm <span class="hljs-keyword">start</span>
</code></div></div></pre>
  </li>
  <li>
    <p>Access the application at <code>http://localhost:3000</code>.</p>
  </li>
</ol>
<h2>Features</h2>
<ul>
  <li>Showcase of projects and skills</li>
  <li>Dynamic Three.js visualizations</li>
  <li>Contact form for seamless communication</li>
  <li>Easy collaboration opportunities</li>
</ul>
<h2>License</h2>
<p>This project is licensed under the <a target="_new">MIT License</a>.</p>
<p>Feel free to reach out if you have any questions or suggestions! 😊</p>