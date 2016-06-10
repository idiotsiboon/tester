
var PostsJson = [{
  _id: "d6d7a567-3092-4aed-b8ba-fe54967e1b43",
  content: "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
  username: "Nancy Clark",
  createdAt: "7/22/2015"
}, {
  _id: "5ab43e63-090c-4c81-ae65-f33d85ca8420",
  content: "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
  username: "Martha Foster",
  createdAt: "10/1/2015"
}, {
  _id: "9734b804-3f15-40ff-94e4-4c9cb68f2f07",
  content: "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
  username: "Howard Fields",
  createdAt: "2/7/2016"
}, {
  _id: "8cf715c1-c79d-4e42-89eb-d5910fad27ba",
  content: "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
  username: "Brian Daniels",
  createdAt: "1/26/2016"
}, {
  _id: "758af271-7edb-4c14-bb6e-bcc282de9922",
  content: "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
  username: "Diane Stewart",
  createdAt: "12/22/2015"
}, {
  _id: "16ba444a-27d4-4fb7-b91a-46228447b23b",
  content: "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
  username: "Lawrence Howard",
  createdAt: "7/27/2015"
}, {
  _id: "1cbd224e-1bfc-4de9-8b82-9124281230c3",
  content: "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
  username: "Judy Morales",
  createdAt: "8/3/2015"
}];

/*
var Nav = require("./nav.js");
var Forum = require("./forum.js");
*/
window.HomeScreen = React.createClass({
//  nav
  renderNav: function () {
    return (<Nav setRoute={this.props.setRoute} />);
  },

//  forum
  renderForum: function () {
    return (
      <div className="grid-center">
        <div className="col-8" >
          <Forum posts={PostsJson} />
        </div>
      </div>);
  },

  render() {
    return (
      <div>
  {this.renderNav()}
  {this.renderForum()}
      </div>);
  }

});

//  module.exports = HomeScreen;
