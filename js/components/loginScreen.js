window.LoginScreen = React.createClass({

  handleLogin: function () {
    this.props.setRoute("homeScreen");
  },
  renderUsernameFeild: function () {
    console.log("hi");
  },

  renderPasswordFeild: function () {

  },

  render() {
    return (
      <h1>
        <a className="btn btn-link" onClick={this.handleLogin}>Login</a>
      </h1>
          );
  }

});

//  module.exports = LoginScreen;
