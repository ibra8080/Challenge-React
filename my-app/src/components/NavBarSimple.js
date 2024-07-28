import React, { Component } from "react";
import css from "./css/NavBarSimple.module.css"

class NavBarSimple extends Component {

    constructor(props) {
        super(props);

        this.state = {
            signinButton: "Log in",
            messageSpan: "Hello, guest!",
        }
    }

    handleClick = () => {
        this.setState((prevState) => ({
            messageSpan: prevState.messageSpan === "Hello, guest!" ? "Wellcom back, User!" : "Hello, guest!",
            signinButton: prevState.signinButton === "Log out" ? "Log in" : "Log out",
        }), () => console.log(this.state.messageSpan))
    }

    render() {
        return (
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                <div>
                <span>{this.state.messageSpan}</span>
                <button onClick={() => this.handleClick()}>
                    {this.state.signinButton}
                </button>
                </div>
            </div>
        )
    }

}

export default NavBarSimple;