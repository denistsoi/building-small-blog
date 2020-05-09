import React, { Component } from "react";

export default class App extends Component {
  state = {
    bloglist: [],
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/blog_list");
      const jsonResponse = await response.json();
      this.setState({ bloglist: jsonResponse });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { bloglist } = this.state;
    if (!bloglist) {
      return (
        <div>
          <h1>loading...</h1>
        </div>
      );
    }

    return (
      <div>
        {bloglist.map((bloglist, id) => (
          <div key={id}>
            <h3 className="mb-2">
              <a href="single.html">{bloglist.title}</a>
            </h3>
            <p className="mb-4">{bloglist.description}</p>
          </div>
        ))}
      </div>
    );
  }
}
