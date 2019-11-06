import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import CustomLayout from './container/layout'
import FilmList from './container/FilmsListView'


function App() {
  return (
    <div className="App">
       <CustomLayout>
         <FilmList />
      </CustomLayout>
    </div>
  );
}

export default App;
