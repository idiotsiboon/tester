var Post = React.createClass({
  renderAvatar: function () {
    return (
      <div className="col-1">
        <figure className="avatar avatar-md">
          <img src="img/avatar-2.png" role="presentation" />
        </figure>
      </div>
    );
  },

  renderUsername: function () {
    return (
      <div className="col-2">
        <h4 className="card-title">{this.props.username}</h4>
      </div>
    );
  },

  renderContent: function () {
    return (
      <div className="card-body" data-id={this.props.id}>
        {this.props.content}
      </div>
    );
  },

  render: function () {
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

/* START PostS*/
var PostsList = React.createClass({
  render: function () {
    var x = this.props.posts.sort(
        function (a,b) {
          var c = new Date(a.createdAt);
          var d = new Date(b.createdAt);
          return d - c;
        }
      );

    const renderedPosts = x.map(
      function (post) {
        return (
          <Post content={post.content} key={post._id} id={post._id} username={post.username} />
        );
      }
  );

    return (
      <div className="card">
        {renderedPosts}
      </div>
    );
  }
});

/* START NewPost*/

var CreatePost = React.createClass({
// SET INITIAL STATE
  getInitialState: function () {
    return {
      content: "",
      placeholder: "Start Here"
    };
  },
// WHEN value OF Textarea CHANGES
  handleChange: function (e) {
    this.setState({
      content: e.target.value
    });
  },

  // FORM submit
  handleSubmit: function (e) {
    var post = {
      _id: Math.random(),
      content: this.state.content,
      username: "Maggie",
      createdAt: new Date()
    };

    e.preventDefault();

    // JSON OF Post
    console.log(post);

    this.props.onNewPost(post);

    this.setState({
      content: ""
    });
  },

  render: function () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <textarea
            className="form-input"
            value={this.state.content}
            placeholder={this.state.placeholder}
            onChange={this.handleChange}
            rows="3"
          >
          </textarea>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">Create</button>
        </div>
      </form>
    );
  }
});
/* END NewPost*/

/* END Post*/

// JSON OF ALL POSTS

window.Forum = React.createClass({
  getInitialState: function () {
    return {
      posts: this.props.posts,
      route: "forum"
    };
  },

  handleNewPost: function (post) {
    this.setState({
      posts: this.state.posts.concat(post)
    });
  },

  render: function () {
    return (
      <div className="col-8">
        <CreatePost onNewPost={this.handleNewPost} />
        <PostsList posts={this.state.posts} />
      </div>
    );
  }

});


//  ReactDOM.render(<Forum posts={PostsJson}/>, document.getElementById('forum-container'));
