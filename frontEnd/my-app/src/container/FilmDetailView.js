import React from 'react'
import axios from 'axios'

import { Card } from 'antd'

class FilmDetail extends React.Component{

    state = {
        film : {}
    }

    componentDidMount(){
            const filmID = this.props.match.params.filmID
            axios.get(`http://127.0.0.1:8000/api/${filmID}`)
            .then(res => {
                this.setState({
                    film: res.data
                });
            })
    }
    render(){
        return(
            <Card title={this.state.film.title}>
                <p>{this.state.film.genre + 
                    " | " + this.state.film.releaseYear + 
                    " | " + this.state.film.length + 
                    " minutes | " + this.state.film.MPAA_rating + 
                    " | User Rating: " + 
                    this.state.film.qualityRating + "/5"}</p>
                    <p>{"I am a great movie. I think..."}</p> 
            </Card>
        );
    }
}
export default FilmDetail