(function() {

  var React = require('react')
  var ReactDOM = require('react-dom')
  var Features = require('./components/features.react')


  var injectTapEventPlugin = require("react-tap-event-plugin");

  //Needed for onTouchTap
  //Can go away when react 1.0 release
  //Check this repo:
  //https://github.com/zilverline/react-tap-event-plugin
  injectTapEventPlugin();

  ReactDOM.render(<Features />, document.getElementById('app'));

})();
