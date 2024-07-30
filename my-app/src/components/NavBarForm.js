import React, { Component } from 'react'
import css from "./css/NavBarForm.module.css"
import NavBarChild from "./NavBarChild";



export class NavBarForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: true,
    }
  }

  handelButtonClick = () => {
    this.setState((prevState) => ({
      isLoggedIn: prevState.isLoggedIn ? false : true,
    }), () => console.log(this.state.isLoggedIn))
  }

  render() {
    return (
      <div className={css.NavBar}>
        <h1>My Gallery</h1>
        {
          this.state.isLoggedIn ?
            <button onClick={() => this.handelButtonClick()}>Login</button>
            : <form>
              <label htmlFor="username">Username:</label>
              <input placeholder="username" id="username" />

              <label htmlFor="password">Password:</label>
              <input placeholder="password" id="password" />
              <button onClick={() => this.handleButtonClick()}>Submit</button>
            </form>}



      </div>
    )
  }
}

export default NavBarForm