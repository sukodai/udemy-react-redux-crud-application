import React from 'react';

function App() {
  //const greeting = "Hi!!";
  //const dom = <h1 className="foo">{greeting}</h1>
  return (
    // <h1>
    //   Hello, World!
    // </h1>
    <React.Fragment>
      <label htmlFor="bar">bar</label>
      <input type="text" onClick={() =>{console.log("I am Clicked!")}} />
    </React.Fragment>
  );
}

export default App;
