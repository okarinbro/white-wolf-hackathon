import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import '../styles/login.css'

class Login extends Component {
    state = {
        login: '',
        password: ''
    }

    loginButtonOnClick = (event) => {
        const userData = {
            login: this.state.login,
            password: this.state.password
        }

        console.log(userData);
        event.preventDefault();
        console.log(this.props);
        this.props.handleLogin();
        console.log("should run change");

        /* TODO: send POST request to login controller API and if user 
           has successfully log on, notify App component */
    }

    loginInputChangeHandler = (event) => {
        this.setState({ login: event.target.value })
    }

    passwordInputChangeHandler = (event) => {
        this.setState({ password: event.target.value })
    }

    render() {

        return (!this.props.register ?

            <div className="loginWindow">

                <form onSubmit={this.loginButtonOnClick}>
                    <TextField id="outlined-basic" label="Login" onChange={this.loginInputChangeHandler}></TextField>
                    <br></br>
                    <TextField id="outlined-basic" label="Password" type="password" onChange={this.passwordInputChangeHandler}></TextField>
                    <br></br>
                    <Button type="submit" variant="contained" color="primary" >Log in</Button>
                </form>
                <button onClick={this.props.handleRegister}>Register</button>
            </div>
            : <div>
                <form onSubmit={this.loginButtonOnClick}>
                    <label for="login">Login</label>
                    <input type="text" id="login" name="login" onChange={this.loginInputChangeHandler} />
                    <br></br>
                    <label for="firstName">Firstname</label>
                    <input type="text" id="firstName" name="firstName" onChange={this.loginInputChangeHandler} />
                    <br></br>
                    <label for="surName">Surname</label>
                    <input type="text" id="surName" name="surName" onChange={this.loginInputChangeHandler} />
                    <br></br>
                    <label for="password">Last name:</label>
                    <input type="text" id="password" name="password" onChange={this.passwordInputChangeHandler} />
                    <br></br>
                    <input type="submit" value="Register" />
                </form>
                <button onClick={this.props.handleRegister}>Register</button></div>
        )
    }
}

export default Login;