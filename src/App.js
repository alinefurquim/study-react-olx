import React from 'react';
import { connect } from 'react-redux';
import Routes from './Routes';
import './App.css';
import { BrowserRouter} from 'react-router-dom';
import { Template } from './components/MainComponents';
import Header from './components/partials/header/header';
import Footer from './components/partials/footer/footer';

const Page = (props) => {
  return (
    <BrowserRouter>
      <Template>
        <Header />
        <Routes />
        <Footer />
      </Template>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
}

const mapDispatchToProps = (dispatch) => {
  return {

  };
}

export default connect (mapStateToProps, mapDispatchToProps)(Page);