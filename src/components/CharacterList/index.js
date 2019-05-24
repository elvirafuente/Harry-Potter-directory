import React, { Fragment, Component } from 'react';
import CharacterCard from '../CharacterCard'
import PropTypes from 'prop-types';
import './styles.css';

class CharacterList extends Component {
  render() {
    const { fetchData, inputNameValue} = this.props
    return (
      <Fragment >
        <h2>Character Results</h2>
        {fetchData 
          .filter( item => item.name.includes(inputNameValue))
          .map(item => {
          return (
            <li key={item.id}>
              <CharacterCard characterInfo={item} />
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
