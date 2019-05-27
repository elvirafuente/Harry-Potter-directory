import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class Filters extends Component {
  render() {
    return (
      <Fragment >
        <form className="page__filters">
          <label htmlFor="input-name" className="filters__label">
            Search for your favorite character
          </label>
          <input type="text" className="filters__input" id="input-name" name="input-name" onChange={this.props.handleInputName} value={this.props.inputNameValue}/>
        </form>
      </Fragment>
    )
  }
}

Filters.propTypes = {
  handleInputName: PropTypes.func.isRequired,
}

export default Filters;
