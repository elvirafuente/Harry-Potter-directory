import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import Filters from '../Filters'
import CharacterList from '../CharacterList';

class MainPage extends React.Component {
  render(){
    return (
      <main>
        <nav>
          <Filters />
        </nav>
        <section>
          <CharacterList fetchData={this.props.fetchData}/>
        </section>
      </main>
      
    )
  }
}

MainPage.propTypes = {
  fetchData: PropTypes.array.isRequired,
}

export default MainPage;
