import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class Filters extends Component {
  render() {
    return (
      <Fragment >
        <form>
          <label htmlFor="input-name">
            Busca a tu personaje favorito
            <input type="text" id="input-name" name="input-name" onChange={this.props.handleInputName}/>
          </label>
        </form>
      </Fragment>
    )
  }
}

Filters.propTypes = {
  handleInputName: PropTypes.func.isRequired,
}

export default Filters;
