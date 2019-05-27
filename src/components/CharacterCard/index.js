import React, {Component, Fragment} from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

class CharacterCard extends Component{
  render(){
    const {characterInfo} = this.props;
    return (
      <Fragment >
        
        <div className="card-image__container">
          <img className="card__image" src={characterInfo.image} alt={characterInfo.name}/>
        </div>
        <h3 className="card__title">{characterInfo.name}</h3>
        <p className="card__info">{characterInfo.house}</p>
        </Fragment>
    )
  }
}

CharacterCard.propTypes = {
  characterInfo: PropTypes.object.isRequired,
}

export default CharacterCard;
