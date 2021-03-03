import React, {Component} from 'react';

class ClassMouse extends Component {
    constructor() {
        super();
        this.state = {
            x : 0,
            y: 0,
            display: true
        }
    }
    logMousePosition = (e)=>{
        this.setState({
            x: e.clientX,
            y: e.clientY,
        })
    };

    componentDidMount() {
        window.addEventListener("mousemove", this.logMousePosition)
    }


    onChangeDisplay = () =>{
        console.log("called onChangeDisplay")
        this.setState({
            display: !this.state.display
        })
    };
    componentWillUnmount() {
        this.setState({

        })
    }

    render() {
        const {x, y,display} = this.state;
        return (
            <div>
                <button onClick = {this.onChangeDisplay}>Toggle Display</button>
                {display? <>x- {x} y-{y}</>: null}

            </div>
        );
    }
}

export default ClassMouse;
