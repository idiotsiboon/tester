window.Nav = React.createClass({
  renderBrand: function () {
    return (
      <span>
        <a href="#" className="btn btn-link btn-lg">
            <i className="icon icon-people"></i></a>
        <a href="#" className="navbar-brand">Tester</a>
      </span>
  );
  },

renderAvatar: function () {
  return(
  <figure className="avatar avatar-xl">
    <img src="img/avatar-2.png" />
  </figure>
  );
},

handleSignout: function (e) {
this.props.route('login')
console.log(e);
},

renderSignout: function () {

    return (
     <a onClick={this.handleSignout} className="btn btn-link">Signout</a>
  );
  },

renderLogin: function () {
      return (
      <a  onClick={this.handleLogin} className="btn btn-link">Login</a>
    );
    },

handleLogin: function (e) {
    console.log(e);
  },


  renderLinks: function () {
    return (
    <span>
    <a href="#" className="btn btn-link">Home</a>
    </span>
  );
  },


render(){
  return(
    <header className="navbar" id="NavId">
      {this.renderBrand()}
      <section className="navbar-section">
        {this.renderLinks()}
        {this.renderAvatar()}
        {this.renderSignout()}
      </section>
    </header>
  );
  }

});
