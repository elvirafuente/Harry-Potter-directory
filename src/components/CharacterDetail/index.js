import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

class CharacterDetail extends React.Component{
  render(){
    const { character } = this.props;
    console.log(character);    
    return (
      <div className="App">
        <Link to="/">
          Back
        </Link>
        <img src={character.image} alt={character.name}/>
        <h2>{character.name}</h2>
        <p>{character.house}</p>
        <p>{character.yearOfBirth}</p>
        <i className={`fas ${character.alive ? 'fa-heartbeat' : 'fa-heart-broken'}`}></i>
        
      </div>
    );
  }
}

export default CharacterDetail;
