'use strict';

const React = require('react');
const ReactDOM = require('react-dom');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {journals: []};
    }

    render() {
        return (
            <div>Nothing to see here.</div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('react')
);