import React from "react";
import Header from "./Header";
import BookControl from "./BookControl";
import background from "../imgBooks/bookTower3.2.png";
import background1 from "../imgBooks/booktower1.png"

function App() {

  return (

    <div style={{ backgroundImage: `url(${background1})`, backgroundSize:'cover' }}>
    <React.Fragment>
    <Header />
     <BookControl />    
     </React.Fragment>
     </div>

  )
}


export default App;
