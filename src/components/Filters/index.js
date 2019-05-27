import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class Filters extends Component {
  render() {
    return (
      <Fragment >
        <form className="page__filters">
          <fieldset className="filter__section">
            <label htmlFor="input-name" className="filters__label">
              Search for your favorite character
            </label>
            <input type="text" className="filters__input" id="input-name" name="input-name" onChange={this.props.handleInputName}/>
          </fieldset>
          <fieldset className="filter__section">
            <legend>
              <h3 className="filters__label">Filter by house</h3>
              <input type="checkbox" value="gryffindor" onChange={this.props.handleInputHouses}/>
              <label className="filter-chechbox">Gryffindor</label>
              <input type="checkbox" value="slytherin" onChange={this.props.handleInputHouses}/>
              <label className="filter-chechbox">Slytherin</label>
              <input type="checkbox" value="ravenclaw" onChange={this.props.handleInputHouses}/>
              <label className="filter-chechbox">Ravenclaw</label>
              <input type="checkbox" value="hufflepuff" onChange={this.props.handleInputHouses}/>
              <label className="filter-chechbox">Hufflepuff</label>
            </legend>
          </fieldset>
        </form>
      </Fragment>
    )
  }
}

Filters.propTypes = {
  handleInputName: PropTypes.func.isRequired,
}

export default Filters;
