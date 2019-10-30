import React, { Component } from "react";

export default class Coding extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="popular2" class="popular page_section">
          <div class="container">
            <div class="row">
              <div class="col">
                <div class="section_title text-center">
                  <h1>Popular Academy</h1>
                </div>
              </div>
            </div>

            <div class="row course_boxes">
              <div class="col-lg-4 course_box">
                <div class="card">
                  <img
                    class="card-img-top"
                    src="images/1.png"
                    alt="https://unsplash.com/@kellybrito"
                  />
                  <div class="card-body text-center">
                    <div class="card-title">
                      <a
                        href="https://www.orange.jo/ar/pages/coding-academy.aspx"
                        target="_blank"
                      >
                        Orange Academy{" "}
                      </a>
                    </div>
                    <div class="card-text">
                      is the world's largest online learning etc...
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 course_box">
                <div class="card">
                  <img
                    class="card-img-top"
                    src="images/2.png"
                    alt="https://unsplash.com/@cikstefan"
                  />
                  <div class="card-body text-center">
                    <div class="card-title">
                      <a href="https://rbk.org/" target="_blank">
                        RBK BootCamp
                      </a>
                    </div>
                    <div class="card-text">
                      is a for-profit educational organization etc...
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 course_box">
                <div class="card">
                  <img
                    class="card-img-top"
                    src="images/3.png"
                    alt="https://unsplash.com/@dsmacinnes"
                  />
                  <div class="card-body text-center">
                    <div class="card-title">
                      <a href="https://jakartacoding.com/" target="_blank">
                        JakartaCoding
                      </a>
                    </div>
                    <div class="card-text">
                      course provider. It hosts online university-level...
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
