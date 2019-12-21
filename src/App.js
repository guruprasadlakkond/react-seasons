import React from "react";
import SeasonDisplay from "./components/SeasonDisplay";
import Spinner from "./components/Spinner";
import "./App.css";

/* export default function App(){
    window.navigator.geolocation.getCurrentPosition((p) => console.log(p),
    er => console.log(er));
  return (
    <div>
      <h1>Hi, Welcome new app</h1>
    </div>
  );
}; */

export default class App extends React.Component {
  /*constructor(props) {
    super(props);
     this.state = {
      lat: 0.0,
      err: null
    }; 
  }*/

  state = { lat: 0.0, err: null };

  componentDidMount() {
    console.log("Comp mounted now");
    window.navigator.geolocation.getCurrentPosition(
      p => {
        console.log(p);
        this.setState({ lat: p.coords.latitude.toFixed(3) });
      },
      er => this.setState({ err: er.message })
    );
  }

  componentDidUpdate() {
    console.log("Comp updated and rerendered");
  }

  handle = () => {
    console.log("Click handler");
    this.setState({ lat: 37.88 });
  };

  componentWillMount() {
    console.log("comp will mount");
  }

  renderContent() {
    if (this.state.lat === 0.0 && this.state.err) {
      return <div>Error: {this.state.err}</div>;
    }

    if (this.state.lat !== 0.0 && !this.state.err) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    /*  <h2>
          Latitude: {this.state.err !== null ? this.state.err : this.state.lat}
        </h2>
        <button onClick={this.handle}>Click on me!</button> */

    return <Spinner message="Please accept location request" />;
  }

  render() {
    console.log("rendered");
    /* window.navigator.geolocation.getCurrentPosition(
      p => {
          console.log(p);
        this.setState({ lat: Math.floor(p.coords.latitude) });
      },
      er => console.log(er)
    ); */
    /*  <h2>
          Latitude: {this.state.err !== null ? this.state.err : this.state.lat}
        </h2>
        <button onClick={this.handle}>Click on me!</button> */

    //comp = <Spinner message="Please accept location request" />;

    return <div className="border red">{this.renderContent()}</div>;
  }
}
