import React, { Fragment, Component } from 'react';
import CharacterCard from '../CharacterCard'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.scss';

class CharacterList extends Component {
  render() {
    const { fetchData, inputNameValue, inputHouses, inputLifeStatus} = this.props
    return (
      <Fragment >
        <ul className="main__list">
        {fetchData 
          .filter( item => item.name.toLowerCase().includes(inputNameValue.toLowerCase()))
          .filter(item => inputHouses.length===0 || inputHouses.includes(item.house.toLowerCase()))
          .filter(item => {
            if(inputLifeStatus === 'Death'){
              return item.alive === false
            } else if(inputLifeStatus === 'Alive'){
              return item.alive === true;
            } else {
              return true;
            }
          })
          .map(item => {
          return (
            <li key={item.id} className="card__container">
              <Link to={`/character/${item.id}`} className="card__link">
                <CharacterCard characterInfo={item} />
              </Link>
            </li>
          )
        })}
        </ul>
      </Fragment>
    )
  }
}

CharacterList.propTypes = {
  fetchData: PropTypes.array.isRequired,
  inputNameValue: PropTypes.string.isRequired,
}

export default CharacterList;
