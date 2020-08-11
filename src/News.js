import React, { Component } from 'react';

class News extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="card news">
              <div className="card-body">
                <h1 className="news-name" data-toggle="modal" data-target="#new-modal">{this.props.title}</h1>
                <p>{this.props.description}</p>
                <p>{this.props.source}</p>
                <p><span className="badge news-type">More</span></p>
              </div>
            </div>
        )
    }
}

export default News;