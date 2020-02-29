import React, { Component } from 'react';
import Ranking from './rank';
import NavigationBar from './navigationBar';
import MainContent from './mainContent';
import FindFriend from './friends';
import Info from './info'
import Gymder from './gymder';
import Goals from './goals';
import Day from './day';
import Login from './login';

class MainComponent extends Component {
    state = {
        contextDict: {
            "Friends": <FindFriend />,
            "Info": <Info />,
            "Gymder": <Gymder />,
            "Goals": <Goals />,
            "Your day": <Day />
        },
        contextName: "Info",
        context: <Info />,
        logged: false,
    }

    mapContext = (contextName) => {

    }

    handleContextChange = (contextName) => {
        console.log("context change");
        const context = this.state.contextDict[contextName];
        const logged = this.state.logged + 1;
        this.setState({ logged });
        this.setState({ context });


        console.log(this.state.logged);
        console.log(this.state.context);
    }

    handleLoginAccepted = () => {
        console.log("should change");
        const logged = true;
        this.setState({ logged });
    }
    logged = <div >
        <MainContent context={this.state.context} />
        <NavigationBar handleContextChange={this.handleContextChange} />
        <Ranking />
        <button onClick={this.getData}>Get</button>
    </div >;

    notLogged = <Login handleLogin={this.handleLoginAccepted} />;


    getData() {
        // create a new XMLHttpRequest
        var xhr = new XMLHttpRequest()

        // get a callback when the server responds
        xhr.addEventListener('load', () => {
            // update the state of the component with the result here
            console.log(xhr.responseText)
        })
        // open the request with the verb and the url
        xhr.open('GET', 'http://localhost:8080/api/user/friends/?id=1')

        // send the request
        xhr.send()
        console.log(xhr);
    }
    render() {

        return (this.state.logged ? <div >
            <MainContent context={this.state.context} />
            <NavigationBar handleContextChange={this.handleContextChange} />
            <Ranking />
            <button onClick={this.getData}>Get</button>
        </div > : <Login handleLogin={this.handleLoginAccepted} />);

    }
}

export default MainComponent;