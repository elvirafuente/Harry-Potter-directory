import React, {Fragment, Component} from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class CharacterList extends Component {
  render() {
    const { fetchData } = this.props
    return (
      <Fragment >
        <h2>Character Results</h2>
        {fetchData.map(item => {
          return (
            <li key={item.id}>
              <h3>{item.name}</h3>
              <img src={item.image} alt={item.name}/>
              <p>{item.house}</p>
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
