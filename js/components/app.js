/* global LoginScreen, HomeScreen, NotFoundScreen */


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
      case "homeScreen":
        return (<HomeScreen setRoute={this.setRoute} />);
      default:
        return (<NotFoundScreen setRoute={this.setRoute} />);

    }
  }

});
