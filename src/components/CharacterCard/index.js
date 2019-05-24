import React, {Component, Fragment} from 'react';
import './styles.css';
import PropTypes from 'prop-types';

class CharacterCard extends Component{
  render(){
    const {characterInfo} = this.props;
    return (
      <Fragment >
        <h3>{characterInfo.name}</h3>
        <img src={characterInfo.image} alt={characterInfo.name}/>
        <p>{characterInfo.house}</p>
      </Fragment>
    )
  }
}

CharacterCard.propTypes = {
  characterInfo: PropTypes.object.isRequired,
}

export default CharacterCard;
