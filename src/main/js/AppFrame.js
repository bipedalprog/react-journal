'use strict';

import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class AppFrame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {listOpen: false};
        this.handleTap = this.handleTap.bind(this);
    }

    handleTap() {
        this.setState({listOpen: !this.state.listOpen});
    }

    render() {
        return (
            <AppBar title="Bipedal Journal" onLeftIconButtonTouchTap={this.handleTap}>
                <Drawer open={this.state.listOpen}>
                    <MenuItem onTouchTap={this.handleTap}>Close</MenuItem>
                    <MenuItem>New</MenuItem>
                </Drawer>
            </AppBar>
        );
    }
}

export default AppFrame;