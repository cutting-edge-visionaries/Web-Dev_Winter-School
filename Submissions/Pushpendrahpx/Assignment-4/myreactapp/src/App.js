import React, { Component } from 'react'

import './App.css'



class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
         num1:0,
         num2:0,
         ans:0
    }
  }
  addnum = (form)=> {
    form.preventDefault();
    this.setState({
      num1:form.target.id1.value,// form this is used to set value num1 which is maintained as state and form.target.id1.value is used to get value at id1
      num2:form.target.id2.value,
      ans:(+form.target.id1.value + +form.target.id2.value) // Magic in JS  :) Other than Normal Languages here when it is not used with +value it simply merges2 inputs as string
    });
  }
  render() {
    return (    <div className="App">
                  <header className="App-header">
                    <form onSubmit={this.addnum}>
                      <h1>Add 2 Numbers here :)</h1>
                      <div>
                        <input type='text' placeholder='Enter Number 1' id='id1' />
                      </div>

                      <div>
                        <input type='text' placeholder='Enter Number 2 ' id='id2'  />
                      </div>

                      <div>
                        <button>Click Me to Add </button>
                      </div>

                      <div>
                        {`Sum of num1 and num2 is ${this.state.ans}` }
                      </div>
                    </form>
                  </header>
                </div>
    )
  }
}

export default App
