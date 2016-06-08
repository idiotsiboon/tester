var Nav= React.createClass({

handleSignout:function(){},

renderBrand: function(){
  return(
      <span>
        <a href="#" className="btn btn-link btn-lg">
            <i className="icon icon-people"></i></a>
        <a href="#" className="navbar-brand">Tester</a>
      </span>
  );
},

renderAvatar: function () {
  <figure className="avatar avatar-xl">
          <img src="../img/avatar-2.png" />
  </figure>
},

renderSignout: function () {
  return(
     <a href="#" className="btn btn-link">signout</a>
  );
},

demof:function (e) {
  console.log(e);
},

renderLinks:function () {
  return(
    <span>
    <a href="javascript:{this.demof}" className="btn btn-link">Login</a>
    <a href="#" className="btn btn-link">Home</a>
    </span>
  );
},


render(){
  return(
    <span>
    {this.renderBrand()}
    <section className="navbar-section">
    {this.renderLinks()}
    {this.renderAvatar()}
    {this.renderSignout()}
    </section>
    </span>
  );
}

});

ReactDOM.render(
  <Nav />, document.getElementById('NavId')
);
