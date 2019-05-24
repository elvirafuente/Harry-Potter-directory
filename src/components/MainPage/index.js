import React from 'react';
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
          <CharacterList />
        </section>
      </main>
      
    )
  }
}

export default MainPage;
