import React from 'react';
import Toolbar from './components/component_toolbar.js';

export default class Main extends React.Component {
    render() {
        return (
            <div>
                <Toolbar />

                {this.props.children}

                <div className="clearfix clearing"></div>
                <div className="footer">
                    &copy; KB Inc. 2017
                </div>
            </div>
        )
    }
}