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
var Posts = React.createClass({


  render: function () {


    var x = this.props.posts.sort(function (a, b) {
      var c = new Date(a.createdAt);
      var d = new Date(b.createdAt);
      return d - c;
    });

    const renderedPosts = x.map(function (post) {
      return (
        <Post content={post.content} key={post._id} id={post._id} username={post.username} />
      );
    });

    return (
      <div className="card">
        {renderedPosts}
      </div>
    );
  }
});

/* START NewPost*/

var NewPost = React.createClass({
// SET INITIAL STATE
  getInitialState: function () {
    return {
      content: "write here"
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
    e.preventDefault();

    // JSON OF Post
    var post = {
      "_id": Math.random(),
      "content": this.state.content,
      "username": "Maggie",
      "createdAt": new Date()
    };
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
              <textarea className="form-input" value={this.state.content} onChange={this.handleChange} placeholder="Textarea" rows="3"></textarea>
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
var PostsJson = [{
  "_id": "d6d7a567-3092-4aed-b8ba-fe54967e1b43",
  "content": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
  "username": "Nancy Clark",
  "createdAt": "7/22/2015"
}, {
  "_id": "5ab43e63-090c-4c81-ae65-f33d85ca8420",
  "content": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
  "username": "Martha Foster",
  "createdAt": "10/1/2015"
}, {
  "_id": "9734b804-3f15-40ff-94e4-4c9cb68f2f07",
  "content": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
  "username": "Howard Fields",
  "createdAt": "2/7/2016"
}, {
  "_id": "8cf715c1-c79d-4e42-89eb-d5910fad27ba",
  "content": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
  "username": "Brian Daniels",
  "createdAt": "1/26/2016"
}, {
  "_id": "758af271-7edb-4c14-bb6e-bcc282de9922",
  "content": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
  "username": "Diane Stewart",
  "createdAt": "12/22/2015"
}, {
  "_id": "16ba444a-27d4-4fb7-b91a-46228447b23b",
  "content": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
  "username": "Lawrence Howard",
  "createdAt": "7/27/2015"
}, {
  "_id": "1cbd224e-1bfc-4de9-8b82-9124281230c3",
  "content": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
  "username": "Judy Morales",
  "createdAt": "8/3/2015"
}];
var Forum = React.createClass({
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
      <div>
        <NewPost onNewPost={this.handleNewPost} />
        <Posts posts={this.state.posts} />
      </div>
    );
  }

});
