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
        return (<LoginScreen  route={this.setRoute} />);
        break;

      case "homeScreen":
        return (<HomeScreen route={this.setRoute}/>);
        break;

      default:
        return (<NotFoundScreen route={this.setRoute}/>);

    }
  }

});
