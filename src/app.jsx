import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
  <div className='container'>
    <h1>Change Calculator</h1>
    <h2>Calculating Your Change Since 2019</h2>
    <hr/>
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-4">
              <div className="panel panel-primary">
                <div className="panel-heading">Enter Information</div>
                <div className="panel-body">How much is due?<br/>
                  <input type="number" id="moneyDue" />
                </div>
                <div className="panel-body">How much was recieved?<br/>
                  <input type="number" id="moneyRecieved"/>
                </div>
                <div className="panel-footer">
                  <button type="button" id="calculateButton" className="btn btn-primary btn-block">Calculate</button>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
                <div className="container">
                    <div className="row">
                      <div className="col">
                        <div className="panel panel-default messageBox">
                          <div id="messageBox" className="panel-body">Alerts will go in here</div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-3">Twenties</div>
                      <div className="col-sm-3">Tens</div>
                      <div className="col-sm-3">Fives</div>
                      <div className="col-sm-3">Ones</div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">Quarters</div>
                        <div className="col-sm-3">Dimes</div>
                        <div className="col-sm-3">Nickels</div>
                        <div className="col-sm-3">Pennies</div>
                    </div>
                  </div>
            </div>
        </div>
    </div>
  </div>
    )
  }
}

export default App;
