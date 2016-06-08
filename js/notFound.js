
var NotFound = React.createClass({

  getInitialState: function () {

    return {
      route: "NotFound"
    };

  },

  render() {
    return (<div>Not Found</div>);
  }

});


ReactDOM.render(
  <App />, document.getElementById("PostsId")
);
