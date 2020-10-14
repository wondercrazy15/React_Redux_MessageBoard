import React, { Component } from "react";
import "./Footer.scss";
function Footer(props) {

    return (
        <div id="Footer">
            <footer className="page-footer font-small indigo  pt-4">
                <div className="container">
                    <ul className="list-unstyled list-inline text-center">
                        <li className="list-inline-item">
                            <a className="btn-floating btn-fb mx-1">
                                <i className="fab fa-facebook-f"> </i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="btn-floating btn-tw mx-1">
                                <i className="fab fa-twitter"> </i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="btn-floating btn-gplus mx-1">
                                <i className="fab fa-google-plus-g"> </i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="btn-floating btn-li mx-1">
                                <i className="fab fa-linkedin-in"> </i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="btn-floating btn-dribbble mx-1">
                                <i className="fab fa-dribbble"> </i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-copyright text-center py-3">© 2020 Copyright:  <a href="#"> abc.com</a>
                </div>
            </footer>
        </div>
    );

}
export default Footer
