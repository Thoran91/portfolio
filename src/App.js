import './App.css';

function App() {

  return (
    <div className="App">
      <div class="container">
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
                <a href="http://www.flyinvite.co/">
                  <img src="https://res.cloudinary.com/tom-horan/image/upload/v1618925750/gxpo2dzkyuyvcdcp0fir.png" alt="Flyinvite"></img>
                </a>
              </div>
              <div class="project-text">
                <a href="http://www.flyinvite.co/">Flyinvite</a>
                  <p>
                  Flyinvite is a Ruby On Rails app that allows event organisers to coordinate flight bookings for professional and private groups.<br/><br/>
                  With just an event destination and start and end dates, the organiser can find in-budget flights using the built in flight-search API, and then forward any approved flight options to potential passengers. Both organisers and passengers keep perisstent user accounts and can keep records of their past and future flights within the app. I was responsible for the front end, which was a combination of html, scss, javascript and a heavily-customised Metronic front-end template. The project was wireframed in Figma and coordinated using Asana. 
                  </p>
              </div>
            </div>
            <div class="project">
                <div class="project-image">
                  <a href="https://thoran-mr-cocktail.herokuapp.com/">
                    <img src="https://res.cloudinary.com/tom-horan/image/upload/v1619179435/undefined_hrtjk3.png" alt="Mr. Cocktail"></img>
                  </a>
                </div>
                <div class="project-text">
                  <a href="https://thoran-mr-cocktail.herokuapp.com/">Mr. Cocktail</a>
                    <p>
                      Mr. Cocktail is a simple Ruby on Rails app designed to showcase the skills I learned during the Le Wagon Web Development Bootcamp.<br/><br/>The user provides an image and name to create a cocktail recipe. The user can then add and remove ingredients, with everything stored on the app's PostgreSQL database. 
                    </p>
                </div>
              </div>
              <div class="project">
                <div class="project-image">
                  <a href="https://www.pigknits.com/">
                    <img src="https://res.cloudinary.com/tom-horan/image/upload/c_crop,g_south_east,h_1080,w_1920,x_100,y_100/v1619179420/dxl37tcwxij89u78mhzw.png" alt="Pigknits"></img>
                  </a>
                </div>
                <div class="project-text">
                  <a href="https://www.pigknits.com/">Pigknits</a>
                    <p>
                      Pigknits is a React/Node.js web app that generates a user-customized jumper knitting pattern.<br/><br/>I provided the developer, Kathryn Birkett, with design advice and produced a Figma template. 
                    </p>
                </div>
              </div>
          </div>
        </body>
      </div>
    </div>
    
  );
}

export default App;


