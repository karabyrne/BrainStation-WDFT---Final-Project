import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup, ToolbarSeparator } from 'material-ui/Toolbar';
import { Link } from 'react-router';

const toolbarStyle = {
  background: "#3cc3db",
  height: 70,
  padding: '0 24px',
  boxShadow: '0 2px 5px rgba(0,0,0,.26)',
  marginTop: 0
};

const toolbarFont = {
  color: "white",
  fontSize: 20,
  textShadow: "0.5px 0.5px 1px #1A1919"
}


export default class ToolbarExamplesSimple extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    };
  }

  handleChange = (event, index, value) => this.setState({ value });

  render() {
    return (
      <div >
        <Toolbar style={toolbarStyle}>

          <ToolbarGroup firstChild={true}>
           <MenuItem
            containerElement={<Link to="/" />}
              primaryText="MADE FOR THAT"
              style={toolbarFont}
           />
            <MenuItem
              containerElement={<Link to="/about" />}
              primaryText="About"
              style={toolbarFont}
            />
            <MenuItem
              containerElement={<Link to="/professions" />}
              primaryText="Professions"
              style={toolbarFont}
            />
            <MenuItem
              containerElement={<Link to="/blog" />}
              primaryText="Blog"
              style={toolbarFont}
            />
          </ToolbarGroup>
          <ToolbarGroup>
            <ToolbarSeparator />
            <RaisedButton
              className="raisedButton"
              label="Get Started"
              primary={true}
              href="/professions"
              containerElement={<Link to="/professions" />}
            />
          </ToolbarGroup>
        </Toolbar>
      </div>
    );
  }
}
