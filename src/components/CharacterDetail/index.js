import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

class CharacterDetail extends React.Component{
  render(){
    const user = this.props.usersInfo[this.props.match-1]
    
    return (
      <div className="App">
        <Link to="/">
          Back
        </Link>
        {user.name}
      </div>
    );
  }
}

export default CharacterDetail;
