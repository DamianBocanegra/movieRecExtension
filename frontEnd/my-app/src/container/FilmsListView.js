import React from 'react'
import Films from '../components/films'
import axios from 'axios'

class FilmListView extends React.Component{

    state = {
        films : []
    }

    componentDidMount(){
            axios.get('http://127.0.0.1:8000/api/')
            .then(res => {
                this.setState({
                    films: res.data
                });
            })
    }
    render(){
        return(
            <Films data={this.state.films}/>
        );
    }
}
export default FilmListView