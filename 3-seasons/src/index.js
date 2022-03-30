import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './components/SeasonDisplay'
import Loader from './components/Loader'

class App extends React.Component {

  state = { lat: null, err: '', geoPermission: null, count: 0};

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat:position.coords.latitude }),
      (err) => this.setState({ err: err.message }),
    );

    // TODO
    setInterval(() => {
      this.setState({count: this.state.count + 1})

      window.navigator.permissions.query({
        name: 'geolocation'
      }).then((permission) => {
          this.setState({geoPermission: permission.state})
        }
      )
    }, 1000);
  }

  renderContent() {
    if (this.state.err && !this.state.lat) {
      return <div>Error: { this.state.err }</div>;
    }

    if (!this.state.err && this.state.lat) {
      return (
        <div>
          <SeasonDisplay lat={this.state.lat} />
        </div>
      );
    }

    return <Loader message={ !this.state.geoPermission||this.state.geoPermission==='prompt' ? "Watiing for permission" : "Getting Geo location" }/>
  }

  render() {
    return (
      <div className="border red" style={{border: '10px solid red'}}>
        count = { this.state.count }
        perm = { this.state.geoPermission}
        {this.renderContent()}
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
