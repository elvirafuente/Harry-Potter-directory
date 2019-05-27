import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

class CharacterDetail extends React.Component {
  render() {
    const { character } = this.props;
    console.log(character);
    return (
      <div className="main__character-detail">
        <div className="card--detail">
          <div className="image__container">
            <img src={character.image} alt={character.name} className="character-detail__image"/>
          </div>
          <div className="character-detail__info">
            <h2 className="info__title">{character.name}</h2>
            <p className="info info__house">House: {character.house}</p>
            <p className="info info__birth">Year of birth: {character.yearOfBirth}</p>
            <p className="info info__state">State: </p>
            <i className={`info info__icon fas ${character.alive ? 'fa-heart' : 'fa-skull'}`}></i>
          </div>
        </div>
        <Link to="/">
            Back
        </Link>
      </div>
    );
  }
}

export default CharacterDetail;
