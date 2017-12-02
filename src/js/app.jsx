import React from 'react';
import Search from './components/Search';
import CityInfo from './components/CityInfo';
import History from './components/History';

export default class App extends React.Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className="jumbotron mt-3">
          <h1 className="display-3">Origin Weather Application</h1>
          <br/>
          <p className="lead">Always know if you'll need an umbrella!</p>
        </div>
        <Search />
        <div className="row mt-4">
        <CityInfo />
        <History />
        </div>
      </div>
    );
  }
}
