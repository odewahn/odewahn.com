var React=require('react');
var FeatureBlock = require('./feature-block.react');
var Featured=require('../../data');
var AppBar = require('material-ui/lib/app-bar');

var ThemeManager = require('material-ui/lib/styles/theme-manager');
var LightRawTheme = require('material-ui/lib/styles/raw-themes/dark-raw-theme');
var Colors = require('material-ui/lib/styles/colors');

const FontIcon = require('material-ui/lib/font-icon');
const IconButton = require('material-ui/lib/icon-button');

var FontAwesome = require('react-fontawesome');

/*
Example of how to render colors and styles:

* https://github.com/callemall/material-ui/blob/master/examples/browserify-gulp-example/src/app/components/main.jsx
* http://www.material-ui.com/#/customization/themes

*/


module.exports = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object,
  },

  getChildContext: function() {
    return {
      muiTheme: this.state.muiTheme,
    };
  },

  getInitialState: function() {
    return {
      muiTheme: ThemeManager.getMuiTheme(LightRawTheme),
    };
  },
  componentWillMount: function() {
    var newMuiTheme = ThemeManager.modifyRawThemePalette(this.state.muiTheme, {
      primary1Color: Colors.orangeA700,
      canvasColor: Colors.grey700
    });
    this.setState({muiTheme: newMuiTheme});
  },

  render: function() {


    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="box">
              <AppBar title="Andrew Odewahn" />
            </div>
          </div>
        </div>
        <div className="row">
            <div className="col-sm-3">
              <img className="headshot" src="images/headshot.jpg"/>
            </div>
            <div className="col-sm-9 bioText">
              <p>
                Hi!  I'm Andrew Odewahn. I'm the current Entrepreneur in Residence and former CTO at <a href="oreilly.com">O'Reilly Media</a>. I'm into developer education, Jupyter, Docker, Go, Carina, and generally lowering the barriers to entry on technology.

              </p>
              <div className="social">
                <a href="https://github.com/odewahn">
                  <FontAwesome className='socialIcon' name='github-alt' size='2x' />
                </a>
                <a href="https://twitter.com/odewahn">
                  <FontAwesome className='socialIcon' name='twitter' size='3x' />
                </a>
                <a href="mailto:andrew@odewahn.com">
                  <FontAwesome className='socialIcon' name='envelope' size='2x' />
                </a>
              </div>
            </div>
        </div>
        <div className="row">
          <div className="col-md-12">
              <FeatureBlock title="Projects" data={Featured} />
          </div>
        </div>
      </div>
    )
  }
});
