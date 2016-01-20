var React = require('react');
var marked = require('marked');

const Card = require('material-ui/lib/card/card');
const CardHeader = require('material-ui/lib/card/card-header');
const CardTitle = require('material-ui/lib/card/card-title');
const CardText = require('material-ui/lib/card/card-text');
const CardActions = require('material-ui/lib/card/card-actions');
const CardMedia = require('material-ui/lib/card/card-media');

const FontIcon = require('material-ui/lib/font-icon');


module.exports = React.createClass({

  render: function() {

    var imgStyle = {
    //  width: '200px'
    };

    return (
      <div className="featuredItem">
        <Card>
          <CardMedia overlay={<CardTitle title={this.props.data.title} />}>
            <img style={imgStyle} src={this.props.data.image || "http://lorempixel.com/600/337/nature/" }/>
          </CardMedia>
          <CardText>
            {this.props.data.description}
            <br/>
            <a href={this.props.data.link}>
              <FontIcon className="material-icons">link</FontIcon>
            </a>
          </CardText>
        </Card>
      </div>
    );
  }
});
