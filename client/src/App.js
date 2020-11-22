import React, { Component } from 'react'
import axios from 'axios'
import './App.css';

export class App extends Component {
  state = {
    posts: []
  }

  componentDidMount = () => {
    this.getBlogPost();
  }


  getBlogPost = () => {
    axios.get('http://localhost:8100')
      .then((response) => {
        const data = response.data;
        this.setState({ posts: data });
        console.log('Data has been recieved')
      })
      .catch(() => {
        console.log('Error retrieving data')
      })
  }

  displayBlogPost = (posts) => {

    if (!posts.length) return null;


    return posts.map((post, index) => (
      <div key={index} className="blog-post__display">
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>
                  AWB NUMBER
              </th>
                <th>TRANSPORTER</th>
                <th>SOURCE</th>
                <th>DESTINATION</th>
                <th>BRAND</th>
                <th>STATUS</th>
                <th>START DATE</th>
                <th>ETD</th>

              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {post.awbnumber}
                </td>
                <td>
                  {post.carrier}
                </td>

                <td>
                  {post.source}
                </td>
                <td>
                  {post.destination}
                </td>
                <td>
                  {post.brand}
                </td>
                <td>
                  {post.status}
                </td>
                <td>
                  {post.ETD}
                </td>
                <td>
                  {post.ETD}
                </td>

              </tr>
            </tbody>
          </table>
        </div>

      </div>
    ));
  };

  render() {
    return (

      <div>
        <nav class="navigation-bar">
         <img class="logo" src="https://photos.angel.co/startups/i/316505-bc45a7025ce1c70fb7446ce41f55263f-medium_jpg.jpg?buster=1445582766" alt="logo of company" width="50" height="50">
          </img>
          <a href="#">Contact</a>
          <a href="#">Transport</a>
          <a href="#">Brands</a>
          <a href="#">Home</a>
          
        </nav>


        <div><h2>Welcome to my App</h2></div>

        <div className="blog-">
          {this.displayBlogPost(this.state.posts)}
        </div>
      </div>
    )
  }
}

export default App





