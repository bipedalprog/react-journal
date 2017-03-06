'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppFrame from './AppFrame';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {journals: []};
    }

    render() {
        return (
            <MuiThemeProvider>
                <AppFrame/>
            </MuiThemeProvider>
        )
    }
}

injectTapEventPlugin();

ReactDOM.render(
    <App />,
    document.getElementById('react')
);