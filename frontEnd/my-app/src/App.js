import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import BaseRouter from './routes'
import './App.css';
import 'antd/dist/antd.css';
import CustomLayout from './container/layout'
import FilmList from './container/FilmsListView'


function App() {
  return (
    <div className="App">
     <Router>
       <CustomLayout>
         <BaseRouter />
      </CustomLayout>
      </Router>  
    </div>
  );
}

export default App;
