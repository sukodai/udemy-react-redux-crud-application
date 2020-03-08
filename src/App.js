import React from 'react';


function App() {
  const profiles = [
    {name: "Taro", age: 10},
    {name: "Hanako", age: 5},
    {name: "Daisuke"},
  ]

  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
  )
}

function User(props) {
  return <div>{props.name}, {props.age}</div>
}

User.defaultProps = {
  age: 1
}


export default App;
