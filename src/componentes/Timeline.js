import React, { Component } from 'react';
import FotoItem from './FotoItem';

export default class Timeline extends Component {
    
    constructor()
    {
        super();
        this.state = {fotos : []};
    }

    componenteDidMount()
    {
        fetch('http://localhost:8080/api/public/fotos/alots')
        .then(resp => resp.json())
        .then(fotos => {
            this.setState({fotos : fotos});
        })
        .catch(err => {

        });
    }
    
    render(){
        return (
        <div className="fotos container">
          <FotoItem/>
          <FotoItem/>
        </div>            
        );
    }
}