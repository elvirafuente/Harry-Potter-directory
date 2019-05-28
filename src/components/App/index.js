import React, { Fragment, Component } from 'react';
import './styles.css';
import { Route, Switch } from 'react-router-dom';
import MainPage from '../MainPage'
import CharacterDetail from '../CharacterDetail';
import Footer from '../Footer';
import Header from '../Header';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchData: [],
      filters: {
        byName: '',
        houses: [],
        lifeStatus: '',
        eyeColor: '',
      },
      isFetching: true,
    };
    this.handleInputName = this.handleInputName.bind(this);
    this.handleInputHouses = this.handleInputHouses.bind(this);
    this.handleInputLifeStatus = this.handleInputLifeStatus.bind(this);
    this.handleInputEyeColor = this.handleInputEyeColor.bind(this);

  }

  componentDidMount() {
    this.fetchService();

  }

  fetchService() {
    const url = "http://hp-api.herokuapp.com/api/characters";
    return (
      fetch(url)
        .then(response => response.json())
        .then(data => {
          const fetchData = data.map((item, index) => {
            return {
              ...item,
              id: index + 1,
            }
          })
          this.setState({
            fetchData: fetchData,
            isFetching: false,
          })
        })
    )
  }

  handleInputName(event) {
    const { value } = event.target;
    this.setState(prevState => {
      return {
        filters: {
          ...prevState.filters,
          byName: value,
        }
      }
    })
  }

  handleInputEyeColor(event){
    const { value } = event.target
    this.setState(prevState => {
      return {
        filters:{
          ...prevState,
          eyeColor: value
        }
      }
    })
  }

  handleInputHouses(event) {
    const { value, checked } = event.target;
    console.log(checked)
    this.setState(prevState => {
      return {
        filters: {
          ...prevState.filters,

          houses: checked
            ? prevState.filters.houses.concat(value)
            : prevState.filters.houses.filter(item => item !== value),
        }
      }
    })
  }

  handleInputLifeStatus(event){
    const { value } = event.target;
    this.setState(prevState => {
      return {
        filters : {
          ...prevState.filters,
          lifeStatus: value,
        }
      }
    })
  }

  getCharacter(detailId) {
    return this.state.fetchData.find(item => item.id === parseInt(detailId))
  }

  render() {
    return (
      <Fragment >
        <Header />
        {this.state.isFetching
          ? <p>Loading...</p>
          : <Switch >
            <Route
              exact path="/"
              render={() => {
                return (
                  <MainPage
                    fetchData={this.state.fetchData}
                    handleInputName={this.handleInputName}
                    inputNameValue={this.state.filters.byName}
                    handleInputHouses={this.handleInputHouses}
                    inputHouses={this.state.filters.houses}
                    handleInputLifeStatus={this.handleInputLifeStatus}
                    inputLifeStatus={this.state.filters.lifeStatus}
                    handleInputEyeColor={this.handleInputEyeColor}
                  />
                )
              }
              }

            />
            <Route
              path="/character/:id"
              render={(routerProps) => {
                const routerId = routerProps.match.params.id;
                return (
                  <CharacterDetail
                    match={routerId}
                    character={this.getCharacter(routerId)}
                  />
                )
              }}
            />
          </Switch>
        }
        <Footer />
      </Fragment >
    )
  }
}

export default App;
