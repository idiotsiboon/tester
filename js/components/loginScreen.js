window.LoginScreen = React.createClass({
  renderUsernameFeild:function () {

  },

  renderPasswordFeild:function () {

  },

  handleLogin:function(){
    this.props.route('homeScreen')
  },

  render(){
    return(
      <h1>
      <a className="btn btn-link" onClick={this.handleLogin}>Login</a>
      </h1>
    );
  }

});
