import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </React.Fragment>
  );
}


function Cat() {
  return <div>Meow</div>
}


export default App;
