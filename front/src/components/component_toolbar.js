import React from 'react';
// import IconMenu from 'material-ui/IconMenu';
// import IconButton from 'material-ui/IconButton';
// import FontIcon from 'material-ui/FontIcon';
// import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
// import DropDownMenu from 'material-ui/DropDownMenu';
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

// const raisedButton = {
//   color: "#F93434",
// }

// const buttonStyle = {
//   background: "white",
//   color: "black",
// }


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
      <div>
        <Toolbar style={toolbarStyle}>
          {/* <Link to="/professions">testlink</Link> */}

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
            {/* <MenuItem primaryText="Home" href="/" /> */}
            {/* <MenuItem primaryText="About" href="/about" />
            <MenuItem primaryText="Professions" href="/professions" />
            <MenuItem primaryText="Blog" href="/blog" /> */}
          </ToolbarGroup>
          <ToolbarGroup>
            {/* <FontIcon className="muidocs-icon-custom-sort" /> */}
            <ToolbarSeparator />
            <RaisedButton
              className="raisedButton"
              label="Get Started"
              primary={true}
              //linkButton={true}
              href="/professions"
              containerElement={<Link to="/professions" />}
            />
          </ToolbarGroup>
        </Toolbar>
      </div>
    );
  }
}
