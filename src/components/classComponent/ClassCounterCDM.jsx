import React, {Component} from 'react';

class ClassCounterCdm extends Component {
    constructor() {
        super();
        this.state= {
            count: 0
        }
    }
    componentDidMount() {
        document.title = `clicked ${this.state.count} times`
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        document.title = `clicked ${this.state.count} times`
    }

    render() {
        return (
            <div>
                <button onClick={()=> this.setState({
                    count : this.state.count + 1
                })} > Click {this.state.count}</button>
            </div>
        );
    }
}

export default ClassCounterCdm;