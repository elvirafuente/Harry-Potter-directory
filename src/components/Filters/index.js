import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class Filters extends Component {
  render() {
    return (
      <Fragment >
        <form className="page__filters">
          <label htmlFor="input-name" className="filters__label">
            Busca a tu personaje favorito
          </label>
          <input type="text" className="filters__input" id="input-name" name="input-name" onChange={this.props.handleInputName}/>

        </form>
      </Fragment>
    )
  }
}

Filters.propTypes = {
  handleInputName: PropTypes.func.isRequired,
}

export default Filters;
