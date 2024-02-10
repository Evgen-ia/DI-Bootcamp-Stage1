import React from 'react';

class UserFavoriteAnimals extends React.Component {
  render() {
    const { favAnimals } = this.props;

    const animalList = favAnimals.map((animal, index) => (
      <li key={index}>{animal}</li>
    ));

    return (
      <ul>
        {animalList}
      </ul>
    );
  }
}

export default UserFavoriteAnimals;
