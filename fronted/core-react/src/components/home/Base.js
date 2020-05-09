
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Base.css';

export default class App extends Component{
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

  render(){
  		{
    const { bloglist } = this.state;
    if (!bloglist) {
      return (
        <div>
          <h1>loading...</h1>
        </div>
      );
    }

  	return(
  		<div>
  		{bloglist.map((bloglist) => (
  			<div>

  				<div class="col-md-12">
					<div class="blog-entry animate d-md-flex">
				
						<img src={bloglist.image} className="App-logo"/>
						
						<div class="text text-2 pl-md-4">
						
			              <h3 class="mb-2"><Link to={{
			              	pathname: `/basedetail/${bloglist.slug}`,
			              	bloglist:bloglist
			              }}>{bloglist.title}</Link></h3>

			              <div class="meta-wrap">
							<p class="meta">
		              		<span><i class="icon-calendar mr-2"></i>June 28, 2019</span>
		              		<span><a href="single.html"><i class="icon-folder-o mr-2"></i>Travel</a></span>
		              		<span><i class="icon-comment2 mr-2"></i>5 Comment</span>
				            </p>
			              	</div>
			              <p class="mb-4">{bloglist.description}</p>
			              <p><a href="#" class="btn-custom">Read More <span class="ion-ios-arrow-forward"></span></a></p>
				        </div>
					</div>
				</div>

  			</div>
  			))}
  				<div class="row">
			        <div class="col">
			            <div class="block-27">
			              <ul>
			                <li><a href="#">&lt;</a></li>
			                <li class="active"><span>1</span></li>
			                <li><a href="#">2</a></li>
			                <li><a href="#">3</a></li>
			                <li><a href="#">4</a></li>
			                <li><a href="#">5</a></li>
			                <li><a href="#">&gt;</a></li>
			              </ul>
			            </div>
			        </div>
			    </div>
  		</div>

  		);
  	}
  }
}

