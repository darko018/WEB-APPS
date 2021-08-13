import { Fragment } from 'react';

import { Header } from './Header/Header.jsx'
import { BlogList } from './BlogList/BlogList.jsx'

import './App.css';

function App() {
  return (
    //Decomposed Page

  //  <Header /> 
  //    <BlogList>
  //      <BlogItems />
  //      <BlogItems />
  //      <BlogItems />
  //      <BlogItems />
  //      <BlogItems />
  //    </BlogList>
  <Fragment>  
    <Header />
    <BlogList />
  </Fragment>   
  );
}

export default App;
