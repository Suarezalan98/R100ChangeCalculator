import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountDue: "",
      amountReceived: "",
      twenties: "",
      tens: "",
      fives: "",
      ones: "",
      quarters: "",
      dimes: "",
      nickels: "",
      pennies: "",
      message: "",

    }
    this.handleChange=this.handleChange.bind(this);
    this.handleOnClick=this.handleOnClick.bind(this);
  }
  handleChange(event){
    this.setState({[event.target.name]: event.target.value});
  }
  handleOnClick(event){
    const amountDue = this.state.amountDue;
    const amountReceived = this.state.amountReceived;
    const changeDue = (amountDue - amountReceived);
    // dividers is an array that holds the amount of each denomination we are going to use to make change
    //ex. 20 is twenty dollars, 0.10 is ten cents, etc..
    const dividers = [20,10,5,1,0.25,0.10,0.05,0.01];
    // denominationRequired will hold the number of each denomination we will use.
    // ex denominationRequired[0] will hold the total number of 20 dollar bills needed for change.
    // denominationRequired[1] will hold the total number of 10 dollar bills etc...
    const denominationRequired = [];
    // remainingBalance will hold the balance of change required after each iteration of determining the denominations required
    const remainingBalance = [changeDue];
    // // stateNames contains the name of the state values that will be updated in this if statement
    const stateNames = ["twenties","tens","fives","ones","quarters","dimes","nickels","pennies"]
    // The if statement will execute if change is due.
    let i;
    if (Math.sign(changeDue) == -1){
      for(i=0; i < dividers.length; i++){
              const newBal = remainingBalance[i] / dividers[i];
              denominationRequired.push(newBal);
              const updatedChange = remainingBalance[i] % dividers[i];
              remainingBalance.push(updatedChange);
          }
          //the area below properly rounds each denomination of bills and updates state
          this.setState({
            message: `The total change due is $${Math.abs(changeDue)}`,
            twenties: Math.floor(Math.abs(denominationRequired[0])),
            tens: Math.floor(Math.abs(denominationRequired[1])),
            fives: Math.floor(Math.abs(denominationRequired[2])),
            ones: Math.floor(Math.abs(denominationRequired[3])),
            quarters: Math.floor(Math.abs(denominationRequired[4])),
            dimes: Math.floor(Math.abs(denominationRequired[5])),
            nickels: Math.floor(Math.abs(denominationRequired[6])),
            pennies: Math.abs(Math.round(denominationRequired[7])),
          })
      // This else if statement will execute if exact change was provided and no change is due.
      // It will update the state to blank values for each denomination and provide a message. 
      } else if (Math.sign(changeDue) == 0){
        this.setState({ 
          message: "No Change Due, Have a nice day!",
          twenties: "",
          tens: "",
          fives: "",
          ones: "",
          quarters: "",
          dimes: "",
          nickels: "",
          pennies: "",
        });
      // Is no change is due and exact change was not provided, then this else statement will run.
      // It will update the state to blank values for each denomination and provide a message.
      } else {
        this.setState({ 
          message: "Im sorry, you still owe money!",
          twenties: "",
          tens: "",
          fives: "",
          ones: "",
          quarters: "",
          dimes: "",
          nickels: "",
          pennies: "",
        });
      }
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
                <div className="panel-body">How much is due?
                  <input name="amountDue" type="number" value={this.state.amountDue} onChange={this.handleChange}/>
                </div>
                <div className="panel-body">How much was recieved?
                  <input name="amountReceived" type="number" value={this.state.amountRecieved} onChange={this.handleChange}/>
                </div>
                <div className="panel-footer">
                  <button type="button" id="calculateButton" className="btn btn-primary btn-block" onClick={this.handleOnClick}>Calculate</button>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
                <div className="container">
                    <div className="row">
                      <div className="col">
                        <div className="panel panel-default messageBox">
                          <div className="alert alert-success" role="alert">{this.state.message}</div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-3 twenties">
                        <h3>Twenties</h3>
                        <p className="change">{this.state.twenties}</p>
                      </div>
                      <div className="col-sm-3">
                        <h3>Tens</h3>
                        <p className="change">{this.state.tens}</p>
                      </div>
                      <div className="col-sm-3">
                        <h3>Fives</h3>
                        <p className="change">{this.state.fives}</p>
                      </div>
                      <div className="col-sm-3">
                        <h3>Ones</h3>
                        <p className="change">{this.state.ones}</p>
                      </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                          <h3>Quarters</h3>
                          <p className="change">{this.state.quarters}</p>
                        </div>
                        <div className="col-sm-3">
                          <h3>Dimes</h3>
                          <p className="change">{this.state.dimes}</p>
                        </div>
                        <div className="col-sm-3">
                          <h3>Nickels</h3>
                          <p className="change">{this.state.nickels}</p>
                        </div>
                        <div className="col-sm-3">
                          <h3>Pennies</h3>
                          <p className="change">{this.state.pennies}</p>
                        </div>
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
