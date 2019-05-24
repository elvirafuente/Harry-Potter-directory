import React, { Fragment, Component } from 'react';
import CharacterCard from '../CharacterCard'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.css';

class CharacterList extends Component {
  render() {
    const { fetchData, inputNameValue} = this.props
    return (
      <Fragment >
        <h2>Character Results</h2>
        {fetchData 
          .filter( item => item.name.toLowerCase().includes(inputNameValue.toLowerCase()))
          .map(item => {
          return (
            <li key={item.id}>
              <Link to={`/character/${item.id}`}>
                <CharacterCard characterInfo={item} />
              </Link>
            </li>
          )
        })}
      </Fragment>
    )
  }
}

CharacterList.propTypes = {
  fetchData: PropTypes.array.isRequired,
}

export default CharacterList;
