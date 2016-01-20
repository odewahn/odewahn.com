var React = require('react');
var FeatureItem = require('./feature-item.react.js')

module.exports = React.createClass({
  render: function() {
    var featureItems = this.props.data.map(function(item){
      return (
        <div className="col-md-6">
          <div className="box">
            <FeatureItem data={item}/>
          </div>
        </div>
      )
    });
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            {featureItems}
          </div>
        </div>
      </div>
    );
  }
});
