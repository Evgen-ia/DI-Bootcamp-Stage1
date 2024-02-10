import React from 'react';
import UserFavoriteAnimals from './UserFavoriteAnimals'; 
import Exercise3 from './Exercise3'; 
import './App.css'; 

function App() {
  // Exercise 1: 
  const helloWorldMessage = <p>Hello World!</p>;

  const myelement = <h1>I Love JSX!</h1>;

  const sum = 5 + 5;

  // Exercise 2
  const user = {
    firstName: 'Bob',
    lastName: 'Dylan',
    favAnimals: ['Horse', 'Turtle', 'Elephant', 'Monkey']
  };

  // Render all exercises
  return (
    <div>
      {/* Exercise 1 */}
      {helloWorldMessage}
      {myelement}
      <p>React is {sum} times better with JSX</p>

      {/* Exercise 2 */}
      <h3>{user.firstName}</h3>
      <h3>{user.lastName}</h3>
      <UserFavoriteAnimals favAnimals={user.favAnimals} />

      {/* Exercise 3 */}
      <Exercise3 />
    </div>
  );
}

export default App;
