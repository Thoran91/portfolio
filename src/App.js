import './App.css';
import {Image} from 'cloudinary-react';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Tom Horan - Web Devloper, Cool Guy
        </h1> 
      </header>
      <body>
        <div class="project-list">
          <ul>
            <li>Project 1</li>
            <li>Project 2</li>
            <li>Project 3</li>
            <li>Project 4</li>
          </ul>
        </div>
        <Image cloudName="tom-horan" publicId="https://res.cloudinary.com/tom-horan/image/upload/c_crop,h_700,w_1400,x_300,y_200/v1618494442/LeWagonPicTH_r8xt8v.jpg" ></Image>
      </body>
    </div>
    
  );
}

export default App;


