import React, { Component } from 'react';


class App extends Component {

	state = {
		path : "",
		response : "",
	};

	componentDidMount(){
		this.fetchData();
	}

	fetchData = async() => {
		const path = this.props.match.params.slug
		try{
			const response = await fetch(`http://localhost:8000/api/blog_list/${path}`);
			const JsonResponse = await response.json();
			this.setState({response:JsonResponse});
		}
		catch(error){
			console.log(error);
		}
	}

  render() {

  	const response = this.state;

  	if (!response){
  		return 'Loading...'
  	}

    return (

      	<div>
				<h1>Hello</h1>
    			<h1 class="mb-3">{response.title}</h1>
	              <img src="assets/images/image_2.jpg" alt="" class="img-fluid"/>
	           <p> {response.description} </p>
	
	            
	            <div class="about-author d-flex p-4 bg-light">
	              <div class="bio mr-5">
	                <img src="assets/images/person_1.jpg" alt="Image placeholder" class="img-fluid mb-4"/>
	              </div>
	              <div class="desc">
	                <h3>George Washington</h3>
	                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
	              </div>
	            </div>


		            <div class="pt-5 mt-5">
		              
		              
		           

		            </div>
	    	
	    </div>


    );
  }
}

export default App;