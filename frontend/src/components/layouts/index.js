import React, { Component } from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';


const Main = styled.main`
    padding-top: 63px;
`

export class Layout extends Component {
    render() {
        return (
            <Router>
                <Header></Header>
                <Main role="main">
                    {this.props.children}
                </Main>
                <Footer></Footer>
            </Router>
        )
    }
}

export default Layout;

