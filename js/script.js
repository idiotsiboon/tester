var Post = React.createClass({

  renderAvatar: function () {

    return (
      <div className="col-1">
        <figure className="avatar avatar-md">
          <img src="img/avatar-2.png" />
        </figure>
      </div>
    );
  },

  renderUsername: function() {

    return (
      <div className="col-2">
        <h4 className="card-title">{this.props.username}</h4>
      </div>
    );
  },

  renderContent: function() {

    return (
      <div className="card-body" data-id={this.props.id}>
        {this.props.content}
      </div>
    );
  },

  render: function() {

    return (
      <span>
        <div className="card-header">
          <div className="grid-center">
            {this.renderAvatar()}
            {this.renderUsername()}
          </div>
        </div>
        {this.renderContent()}
      </span>
    );
  }
});

/*START PostS*/
var Posts = React.createClass({


  render: function() {


    var x= this.props.posts.sort(function(a,b){
    var c = new Date(a.createdAt);
    var d = new Date(b.createdAt);
    return d-c;
    });

    const renderedPosts = x.map(function(post) {
      return (
        <Post content={post.content} key={post._id} id={post._id} username={post.username}/>
      );
    });

    return  (
      <div className="card">
        {renderedPosts}
      </div>
    );
  }
});

/*START NewPost*/

var NewPost = React.createClass({
//SET INITIAL STATE
  getInitialState: function() {
    return {
      content : "write here"
    }
  },
//WHEN value OF Textarea CHANGES
  handleChange: function(e) {
    this.setState({
      content: e.target.value
    });
  },

  //FORM submit
  handleSubmit: function(e) {
    e.preventDefault();

    //JSON OF Post
    var post = {
      "_id": Math.random(),
      "content": this.state.content,
      "username": "Maggie",
      "createdAt":new Date(),
    };
    console.log(post);

    this.props.onNewPost(post);

    this.setState({
      content: ""
    });
  },

  render: function() {

    return (
      <form onSubmit={this.handleSubmit}>
          <div className="form-group">
              <textarea className="form-input" value={this.state.content} onChange={this.handleChange} placeholder="Textarea" rows="3"></textarea>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Create</button>
        </div>
      </form>
    );
  }
});
/*END NewPost*/

/*END Post*/

//JSON OF ALL POSTS
var PostsJson = [
  {
    "_id": "57568c2b63cf6d8e04b254e3",
    "content": "voluptate anim mollit dolor enim aliqua officia labore anim mollit",
    "username": "Conway",
    "createdAt": "2016-05-06T05:37:12 -06:-30"
  },
  {
    "_id": "57568c2bf54503c6018545fe",
    "content": "consequat ex occaecat et nisi enim dolor exercitation non eu",
    "username": "Hood",
    "createdAt": "2016-03-14T07:11:03 -06:-30"
  },
  {
    "_id": "57568c2b72f6daf56efc6d48",
    "content": "eu non consectetur excepteur nulla duis reprehenderit incididunt veniam deserunt",
    "username": "Jo",
    "createdAt": "2016-01-05T08:48:26 -06:-30"
  },
  {
    "_id": "57568c2b0f3591acf7508c1a",
    "content": "velit nostrud aliquip cupidatat est nisi exercitation cillum laborum ex",
    "username": "Jeanie",
    "createdAt": "2016-03-01T06:42:10 -06:-30"
  },
  {
    "_id": "57568c2b57d38b3cb87c746f",
    "content": "labore cillum nisi exercitation enim ipsum veniam excepteur sunt aliquip",
    "username": "Nina",
    "createdAt": "2016-04-10T03:41:29 -06:-30"
  },
  {
    "_id": "57568c2b8b3af3cd1eaa40ce",
    "content": "id consequat occaecat nulla cillum aute esse amet occaecat ut",
    "username": "Nieves",
    "createdAt": "2016-03-17T01:22:54 -06:-30"
  }
];

var Forum = React.createClass({
  getInitialState: function() {
    return {
      posts: this.props.posts
    }
  },

  handleNewPost: function(post) {
    this.setState({
      posts: this.state.posts.concat(post)
    });
  },

  render: function() {

    return (
      <div>
        <NewPost onNewPost={this.handleNewPost} />
        <Posts posts={this.state.posts} />
      </div>
    );
  }
});


ReactDOM.render(
  <Forum posts={PostsJson} />, document.getElementById('PostsId')
);
