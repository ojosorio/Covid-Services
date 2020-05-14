import React, { Component } from "react";
import NavBar from "./components/navbar";
import Board from "./components/board";
import Result from "./components/result";

class App extends Component {
  state = {
    serviceName: "",
    resultData: ""
  }

  handleClick(serviceId) {

    switch (serviceId) {
      case '1': { this.callService("https://api.covid19api.com/"); break; }
      case '2': { this.callService("https://api.covid19api.com/summary"); break; }
      case '3': { this.callService("https://api.covid19api.com/countries"); break; }
      case '4': { this.callService("https://api.covid19api.com/dayone/country/colombia/status/confirmed"); break; }
      case '5': { this.callService("https://api.covid19api.com/dayone/country/colombia"); break; }
      case '6': { this.callService("https://api.covid19api.com/total/dayone/country/colombia/status/confirmed"); break; }
      default: { break; }
    }
  }

  callService(url) {
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({ serviceName: url, resultData: JSON.stringify(result) });
          console.log(result)
        },
        (error) => {
          console.log("error");
          this.setState({ serviceName: url, resultData: error });
        }
      )
  }

  limpiar() {
    this.setState({ serviceName: "", resultData: "" });
  }

  render() {
    return (
      <div>
        <NavBar />
        <main className="container">
          <h2>Seleccione el servicio que desea consultar</h2>
          <br />
          <Board
            onService1={() => this.handleClick("1")}
            onService2={() => this.handleClick("2")}
            onService3={() => this.handleClick("3")}
            onService4={() => this.handleClick("4")}
            onService5={() => this.handleClick("5")}
            onService6={() => this.handleClick("6")}
          />
          <br />
          <button className="btn btn-warning" onClick={() => this.limpiar()}>Limpiar</button>
          <br />
          <Result
            onResult={this.state.resultData}
            onName={this.state.serviceName}
          />

        </main>
      </div>
    );
  }
}

export default App;
