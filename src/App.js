import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.11.0/devicon.min.css"></link>
        <h1 class="header-text">
          Tom Horan
        <br/>
          Front-End Web Developer
        </h1> 
        <div class="stack">
          <div>
            <i class="devicon-bootstrap-plain-wordmark"></i>
            <i class="devicon-css3-plain-wordmark"></i>
            <i class="devicon-figma-plain"></i>
            <i class="devicon-git-plain"></i>
          </div>
          <div>
            <i class="devicon-nodejs-plain-wordmark"></i>
            <i class="devicon-postgresql-plain"></i>
            <i class="devicon-rails-plain-wordmark"></i>
            <i class="devicon-ruby-plain-wordmark"></i>
          </div>
          <div>
            <i class="devicon-heroku-plain-wordmark"></i>
            <i class="devicon-html5-plain-wordmark"></i>
            <i class="devicon-javascript-plain"></i>
            <i class="devicon-webpack-plain"></i>
          </div>
        </div>
      </header>
      <body>
        <div class="project-list">
          <div class="project">
            <div class="project-image">
              <img src="https://res.cloudinary.com/tom-horan/image/upload/v1618925750/gxpo2dzkyuyvcdcp0fir.png" alt="Flyinvite"></img>
            </div>
            <div class="project-text">
              <a href="http://www.flyinvite.co/">Flyinvite</a>
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
            </div>
          </div>
          <div class="project">
              <div class="project-image">
                <img src="https://res.cloudinary.com/tom-horan/image/upload/v1618925750/gxpo2dzkyuyvcdcp0fir.png" alt="Flyinvite"></img>
              </div>
              <div class="project-text">
                <a href="http://www.flyinvite.co/">Flyinvite</a>
                  <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  </p>
              </div>
            </div>
            <div class="project">
              <div class="project-image">
                <img src="https://res.cloudinary.com/tom-horan/image/upload/v1618925750/gxpo2dzkyuyvcdcp0fir.png" alt="Flyinvite"></img>
              </div>
              <div class="project-text">
                <a href="http://www.flyinvite.co/">Flyinvite</a>
                  <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  </p>
              </div>
            </div>
        </div>
      </body>
    </div>
    
  );
}

export default App;


