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
    const renderedPosts = this.props.posts.map(function(post) {
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
      "username": "Maggie"
    };

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
    "_id": "574dc2f718a842f7acb93970",
    "content": "eiusmod deserunt cillum reprehenderit duis reprehenderit do aliquip ad ut",
    "username": "Mcgowan"
  },
  {
    "_id": "574dc2f75219a89b5fba518d",
    "content": "aliquip culpa nulla ad officia pariatur aliqua minim ipsum elit",
    "username": "Maggie"
  },
  {
    "_id": "574dc2f7936fd67586514b61",
    "content": "laborum labore qui id culpa ea ea Lorem ut labore",
    "username": "Melva"
  },
  {
    "_id": "574dc2f7f88e2d2f5c39967a",
    "content": "tempor aliquip do deserunt consectetur voluptate aliqua adipisicing quis cupidatat",
    "username": "Becker"
  },
  {
    "_id": "574dc2f7f7632fd183f28dcc",
    "content": "veniam culpa labore tempor adipisicing cupidatat minim exercitation esse qui",
    "username": "Freda"
  },
  {
    "_id": "574dc2f76202811a20d87703",
    "content": "sint laboris voluptate proident ut sunt officia mollit deserunt ipsum",
    "username": "Huffman"
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
