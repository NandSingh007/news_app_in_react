//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Newsiterm from './components/Newsiterm';
import News from './components/News';
import React, { Component } from 'react'   //rce    lacture23 

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false
        }
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=85624340d243441696eeca80d11f5334";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles });
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className='container my-4'>
                    <h1>NewsUpdate</h1>
                    <div className="row">
                        {this.state.articles.map((element) => {                                     // puchna heee 
                            return <div className="col-md-4" key={element.url}><Newsiterm title={element.title ? element.title.slice(0, 36) : ""} description={element.description ? element.description.slice(0, 65) : ""} imageUrl={element.urlToImage} newsUrl={element.url} /></div>
                        })}
                    </div>
                </div>
                <News />
            </div>

        )
    }
}

