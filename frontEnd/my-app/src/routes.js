import React from 'react'

import {Route} from 'react-router-dom'
import FilmList from './container/FilmsListView'
import FilmDetail from './container/FilmDetailView';


const BaseRouter = () => (
    <div>
        <Route exact path='/' component = {FilmList} />
        <Route exact path='/:filmID' component = {FilmDetail} />
    </div>
);

export default BaseRouter