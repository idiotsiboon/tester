var App = React.createClass({

  getInitialState: function () {

  return{
      route:'NotFound',
    };

  },

  setRoute(r){
    this.setState({route:r});
  },

  render(){
    const route = this.state.route;

    switch (route) {

      case 'login':
        return(<Login/>);
        break;

      case 'forum':
          return(<Forum/>);
          break;


      default:
        return(<NotFound/>);


    }


},


});
