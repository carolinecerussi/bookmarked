import React from "react";
import Header from "./Header";
import BookControl from "./BookControl";
import background from "../imgBooks/shiny.jpg";


function App() {

  return (

    <div style={{ backgroundImage: `url(${background})`, backgroundSize:'cover' }}>
    <React.Fragment>
    <Header />
     <BookControl />    
     </React.Fragment>
     </div>

  )
}


export default App;
