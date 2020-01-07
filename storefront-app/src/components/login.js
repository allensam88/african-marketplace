import React, { Component } from  'react';

class Form extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentView: "signUp"
    }
  }

  changeView = (view) => {
    this.setState({
      currentView: view
    })
  }

  currentView = () => {
    switch(this.state.currentView) {
      case "signUp":
        return (
          <form>
            <img src={require('./logo.png')} />
            <fieldset>
              <legend>Create Account</legend>
                  <label for="username">Username</label>
                  <input type="text" id="username" required/>
                  <label for="password">Password</label>
                  <input type="password" id="password" required/>
            </fieldset>
            <button>Create Account</button>
            <button type="button" onClick={ () => this.changeView("logIn")}>Have an Account?</button>
          </form>
        )
      case "logIn":
        return (
          <form>
            <img src={require('./logo.png')} />
            <fieldset>
              <legend>Log In</legend>
                  <label for="username">Username</label>
                  <input type="text" id="username" required/>
                  <label for="password">Password</label>
                  <input type="password" id="password" required/>
            </fieldset>
            <button>Login</button>
            <button type="button" onClick={ () => this.changeView("signUp")}>Create an Account</button>
          </form>
        )
    }
  }
  render() {
    return (
      <section id="entry-page">
        {this.currentView()}
      </section>
    )
  }
}

export default Form;