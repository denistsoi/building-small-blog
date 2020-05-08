import React, {Component} from "react";


export default class App extends Component{
	render(){
		return(
			<div>
				<a href="#" class="js-colorlib-nav-toggle colorlib-nav-toggle"><i></i></a>
					<aside id="colorlib-aside" role="complementary" class="js-fullheight">
						<nav id="colorlib-main-menu" role="navigation">
							<ul>
								<li class="colorlib-active"><a href="index.html">Home</a></li>
								<li><a href="fashion.html">Fashion</a></li>
								<li><a href="travel.html">Travel</a></li>
								<li><a href="about.html">About</a></li>
								<li><a href="contact.html">Contact</a></li>
							</ul>
						</nav>

						<div class="colorlib-footer">
							<h1 id="colorlib-logo" class="mb-4"></h1>
							<div class="mb-4">
								<h3>Subscribe for newsletter</h3>
								<form action="#" class="colorlib-subscribe-form">
						            <div class="form-group d-flex">
						            	<div class="icon"><span class="icon-paper-plane"></span></div>
						              <input type="text" class="form-control" placeholder="Enter Email Address"/>
						            </div>
						        </form>
							</div>
							<p class="pfooter">
							  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
							</p>
						</div>
					</aside>
			</div>

			)
	}
}