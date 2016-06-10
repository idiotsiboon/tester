/*
var LoginScreen = require("./loginScreen.js");
var HomeScreen = require("./homeScreen.js");
var NotFoundScreen = require("./notFoundScreen.js");
*/

window.App = React.createClass({
  getInitialState: function () {
    return {
      route: "homeScreen"
    };
  },

  setRoute(r) {
    this.setState({ route: r });
  },


  render() {
    const route = this.state.route;

    switch (route) {

      case "login":
        return (<LoginScreen setRoute={this.setRoute} />);
        break;
      case "homeScreen":
        return (<HomeScreen setRoute={this.setRoute} />);
        break;
      default:
        return (<NotFoundScreen setRoute={this.setRoute} />);

    }
  }

});
