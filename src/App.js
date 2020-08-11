import React, { Component } from 'react';
import News from './News';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

var token = '1ef7618c27f5b48bafb7c74bc241d9a2'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      articles: [
        {
          title: "Coronavirus: New Research Reveals Which Face Masks Work Best",
          description: "Crude oil gained more ground on Tuesday, with prices underpinned by expectations of U.S. stimulus and a rebound in Asian demand as economies reopen.",
          source: "NBC News",
        },
      ],

      // isModalOpen: false,
    }
  }

loadArticlesByTopic = (topic)=>{
    var url = 'https://gnews.io/api/v3/topics/'+topic+'?token='+token
    fetch(url)
      .then( res=>res.json())
      .then((data)=>{
        var articles = data.articles
        console.log(articles)
      })
  }
  
loadArticlesByTerm = (term)=>{
  
    var url = 'https://gnews.io/api/v3/search?q='+term+'&token='+token
    fetch(url)
      .then( res=>res.json())
      .then((data)=>{
        var articles = data.articles
        console.log(articles)
      })
  }

  openModal = ()=>{}
  closeModal = ()=>{}

  render(){
    return(
      <div className="app">
        <div className="container">
          <div className="news-filters">
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
              <div role="group" className="btn-group btn-group-toggle">
                <label className="news-filter btn active btn-primary">
                  <input name="news-filter" type="radio" autoComplete="off" value="all" checked=""/>All
                </label>
                <label className="news-filter btn btn-primary">
                  <input name="news-filter" type="radio" autoComplete="off" value="entertainment"/>Entertainment
                </label>
                <label className="news-filter btn btn-primary">
                  <input name="news-filter" type="radio" autoComplete="off" value="sport"/>Sport
                </label>
                <label className="news-filter btn btn-primary">
                  <input name="news-filter" type="radio" autoComplete="off" value="politic"/>Politic
                </label>
              </div>
            </div>
          </div>
          
          <div className="news">
            {
              this.state.articles.map((item)=>{
                var newsProps = {
                  key:item.title,
                  ...item,
                }
                return <News {...newsProps}/>
              })
            }
          </div> 

        </div>
        <div className="modal" id="news-modal" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
      
              <div className="modal-body">

                <div className="news-popup-body row">
                  <div className="col-6">
                    <h1 className="news-name">The Store</h1>
                    <p>5B Gore St</p>
                    <p>Auckland</p>
                    <p><span className="badge news-type">Café</span></p>
                  </div>
                  <div className="col-6">
                    <img src="https://fastly.4sqi.net/img/general/200x200/194220_nI7vTqtIFQncbe7Zgn_XLymzqM78Cx-aZ_gySunjz-M.jpg" className="img-fluid" alt="Responsive image"/>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
