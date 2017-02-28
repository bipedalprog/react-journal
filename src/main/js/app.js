'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import injectTapEventPlugin from 'react-tap-event-plugin';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {journals: []};
    }

    render() {
        return (
            <MuiThemeProvider>
                <AppBar title="Bipedal Journal" />
            </MuiThemeProvider>
        )
    }
}

injectTapEventPlugin();

ReactDOM.render(
    <App />,
    document.getElementById('react')
);