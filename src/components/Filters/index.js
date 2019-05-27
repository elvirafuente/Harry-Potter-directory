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
            <input type="text" className="filters__input" id="input-name" name="input-name" value={this.props.inputNameValue} onChange={this.props.handleInputName}/>
          </fieldset>
          <fieldset className="filter__section">
            <legend>
              <h3 className="filters__label">Filter by house</h3>
              <input type="checkbox" value="gryffindor" checked={this.props.inputHouses.includes('gryffindor')} onChange={this.props.handleInputHouses}/>
              <label className="filter-chechbox">Gryffindor</label>
              <input type="checkbox" value="slytherin" checked={this.props.inputHouses.includes('slytherin')} onChange={this.props.handleInputHouses}/>
              <label className="filter-chechbox">Slytherin</label>
              <input type="checkbox" value="ravenclaw" checked={this.props.inputHouses.includes('ravenclaw')} onChange={this.props.handleInputHouses}/>
              <label className="filter-chechbox">Ravenclaw</label>
              <input type="checkbox" value="hufflepuff" checked={this.props.inputHouses.includes('hufflepuff')} onChange={this.props.handleInputHouses}/>
              <label className="filter-chechbox">Hufflepuff</label>
            </legend>
          </fieldset>
          <fieldset className="filter__section">
            <legend>
              <h3 className="filters__label">Filter by life status</h3>
              <input type="radio" value="All" name="lifeStatus" checked={this.props.inputLifeStatus.includes('All')} onChange={this.props.handleInputLifeStatus}/>
              <label className="filter-chechbox">All</label>
              <input type="radio" value="Alive" name="lifeStatus" checked={this.props.inputLifeStatus.includes('Alive')} onChange={this.props.handleInputLifeStatus}/>
              <label className="filter-chechbox">Alive</label>
              <input type="radio" value="Death" name="lifeStatus" checked={this.props.inputLifeStatus.includes('Death')} onChange={this.props.handleInputLifeStatus}/>
              <label className="filter-chechbox">Death</label>
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
