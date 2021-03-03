import React, {Component} from "react"
import logo from "./logo.svg"
import "./App.css"
import AdSense from 'react-adsense';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ClassMouse from "./components/classComponent/ClassMouse";
import HookComponentWillUnmount from "./components/hookComponent/useEffect/hookComponentWillUnmount";

class LambdaDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {loading: false, msg: null}
    }

    handleClick = api => e => {
        e.preventDefault();

        this.setState({loading: true});
        fetch("/.netlify/functions/" + api)
            .then(response => response.json())
            .then(json => this.setState({loading: false, msg: json.msg}))
    };

    render() {
        const {loading, msg} = this.state;

        return (
            <p>
                <button onClick={this.handleClick("hello")}>{loading ? "Loading..." : "Call Lambda"}</button>
                <button
                    onClick={this.handleClick("async-dadjoke")}>{loading ? "Loading..." : "Call Async Lambda"}</button>
                <br/>
                <AdSense.Google
                    client='ca-pub-2746548096441133'
                    slot='7806394673'
                    style={{display: 'block'}}
                    format='auto'
                    responsive='true'
                    layoutKey='-gw-1+2a-9x+5c'
                />

                <span>{msg}</span>
            </p>
        )
    }
}

class App extends Component {
    render() {
        return (
            <>
                <div className="App">
                    <header className="App-header">
                        <BrowserRouter>
                            <Switch>
                                {/*<Route component={DemoComponent} path="/table"/>*/}

                                <Route component={ClassMouse} path="/"/>

                                {/* eslint-disable-next-line no-undef */}
                                <Route component={HookComponentWillUnmount} path="/mouse"/>
                            </Switch>
                        </BrowserRouter>
                        <LambdaDemo/>
                    </header>
                </div>


            </>

        )
    }
}

export default App
