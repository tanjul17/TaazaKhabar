import React, { Component } from "react";
import { Link } from "react-router-dom";
export class Footer extends Component {
  render() {
    return (
      <>
        <div>
          <footer
            class="text-center text-white"
            style="background-color: #f1f1f1;"
          >
            <div className="container pt-4">
              <section class="mb-4">
                <Link 
                  class="btn btn-link btn-floating btn-lg text-dark m-1"
                  href="#!"
                  role="button"
                  data-mdb-ripple-color="dark"
                >
                  <i class="fab fa-facebook-f"></i>
                </Link>
                <Link 
                  class="btn btn-link btn-floating btn-lg text-dark m-1"
                  href="#!"
                  role="button"
                  data-mdb-ripple-color="dark"
                >
                  <i class="fab fa-twitter"></i>
                </Link>
                <Link 
                  class="btn btn-link btn-floating btn-lg text-dark m-1"
                  href="#!"
                  role="button"
                  data-mdb-ripple-color="dark"
                >
                  <i class="fab fa-google"></i>
                </Link>

                <Link 
                  class="btn btn-link btn-floating btn-lg text-dark m-1"
                  href="#!"
                  role="button"
                  data-mdb-ripple-color="dark"
                >
                  <i class="fab fa-instagram"></i>
                </Link>

                <Link 
                  class="btn btn-link btn-floating btn-lg text-dark m-1"
                  href="#!"
                  role="button"
                  data-mdb-ripple-color="dark"
                >
                  <i class="fab fa-linkedin"></i>
                </Link>

                <Link 
                  class="btn btn-link btn-floating btn-lg text-dark m-1"
                  href="#!"
                  role="button"
                  data-mdb-ripple-color="dark"
                >
                  <i class="fab fa-github"></i>
                </Link>
              </section>
            </div>

            <div
              class="text-center text-dark p-3"
              style="background-color: rgba(0, 0, 0, 0.2);"
            >
              © 2020 Copyright:
              <Link className="text-dark" href="https://mdbootstrap.com/">
                MDBootstrap.com
              </Link>
            </div>
          </footer>
        </div>
      </>
    );
  }
}

export default Footer;
