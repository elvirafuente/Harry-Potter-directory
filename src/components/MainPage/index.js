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
          <Filters 
            handleInputName={this.props.handleInputName}
            handleInputHouses={this.props.handleInputHouses}
          />
        </nav>
        <section>
          <CharacterList 
            fetchData={this.props.fetchData} 
            inputNameValue={this.props.inputNameValue}
          />
        </section>
      </main>
      
    )
  }
}

MainPage.propTypes = {
  fetchData: PropTypes.array.isRequired,
  handleInputName: PropTypes.func.isRequired,
  inputNameValue: PropTypes.string.isRequired,
}

export default MainPage;
