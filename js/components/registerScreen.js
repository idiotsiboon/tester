/*
sername
password
abot
handleregister
*/

window.RegisterScreen = React.createClass({

  handleRegister: function () {
    this.props.setRoute("homeScreen");
  },
  renderUsernameFeild: function () {

  },

  renderPasswordFeild: function () {

  },

  render() {
    return (
      <h1>
        <a className="btn btn-link" onClick={this.handleRegister}>Register</a>
      </h1>
    );
  }

});
