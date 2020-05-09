import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div id="colorlib-main">
        <div class="container">
          <div class="row d-flex">
            <div class="row pt-md-4">
              <div class="col-md-12">
                <div class="blog-entry animate d-md-flex">
                  <div class="text text-2 pl-md-4">
                    <h3 class="mb-2">
                      <a href="single.html">
                        A Loving Heart is the Truest Wisdom
                      </a>
                    </h3>
                    <div class="meta-wrap">
                      <p class="meta">
                        <span>
                          <i class="icon-calendar mr-2"></i>June 28, 2019
                        </span>
                        <span>
                          <a href="single.html">
                            <i class="icon-folder-o mr-2"></i>Travel
                          </a>
                        </span>
                        <span>
                          <i class="icon-comment2 mr-2"></i>5 Comment
                        </span>
                      </p>
                    </div>
                    <p class="mb-4">
                      A small river named Duden flows by their place and
                      supplies it with the necessary regelialia.
                    </p>
                    <p>
                      <a href="#" class="btn-custom">
                        Read More <span class="ion-ios-arrow-forward"></span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col">
                  <div class="block-27">
                    <ul>
                      <li>
                        <a href="#">&lt;</a>
                      </li>
                      <li class="active">
                        <span>1</span>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li>
                        <a href="#">4</a>
                      </li>
                      <li>
                        <a href="#">5</a>
                      </li>
                      <li>
                        <a href="#">&gt;</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
