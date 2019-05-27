import React, { Fragment, Component } from 'react';
import CharacterCard from '../CharacterCard'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.scss';

class CharacterList extends Component {
  render() {
    const { fetchData, inputNameValue} = this.props
    return (
      <Fragment >
        <ul className="main__list">
        {fetchData 
          .filter( item => item.name.toLowerCase().includes(inputNameValue.toLowerCase()))
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
}

export default CharacterList;
