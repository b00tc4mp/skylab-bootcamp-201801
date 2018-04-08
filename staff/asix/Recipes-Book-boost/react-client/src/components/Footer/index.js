import React, { Component } from 'react'
import './index.css'
import logo from '../../logo.png'

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2">
                                <img src={logo} alt="" className="logo-footer" />
                            </div>
                            <div className="col-md-2">
                                Navigation
        <ul>
                                    <li><a className="ancor-footer" href="">Home</a></li>
                                    <li><a className="ancor-footer" href="">Category</a></li>
                                    <li><a className="ancor-footer" href="">Collection</a></li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                Sitemap
        <ul>
                                    <li><a className="ancor-footer" href="">Contact Us</a></li>
                                    <li><a className="ancor-footer" href="">About Us</a></li>
                                    <li><a className="ancor-footer" href="">Terms and Conditions</a></li>
                                    <li><a className="ancor-footer" href="">Cookies Policy</a></li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <p className="description">Your perfect recipe with recipe-book,
                                  your own custom recipe book. Just register and find your perfect
                                  recipe or create in just minutes</p>
                            </div>
                        </div>
                    </div>
                </footer>

            </div>
        );
    }
}

export default Footer