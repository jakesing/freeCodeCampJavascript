import React, {Component} from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.getNewQuote = this.getNewQuote.bind(this);
    this.state = {
      quote: 'starting quote',
      author: 'starting author'
    }
  }



  async getNewQuote() {
    let url = "http://quotes.stormconsultancy.co.uk/random.json"
    const response = await fetch(url)
    const data = await response.json()
    this.setState({
      quote: data.quote,
      author: data.author
    })    
  }

  componentDidMount(){
    this.getNewQuote();
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron" id="quote-box">
          <h2 id="text">{this.state.quote}</h2>
          <div className="btn-group btn-group-lg btn-group-justified" role="group">
            <div className="btn-group" role="group">
              <button className="btn btn-primary" id="new-quote" onClick={this.getNewQuote}>New Quote</button>
            </div>  
            <div className="btn-group" role="group">
              <a 
                id="tweet-quote" 
                role="button"
                className="btn btn-info" 
                href={`https://www.twitter.com/intent/tweet?text=${encodeURI(this.state.quote)}`} 
                >
                <span className="glyphicon glyphicon-share"></span>
                Tweet this
              </a>
            </div>
          </div>  
          <p id="author">By: {this.state.author}</p>
        </div>
      </div>
    );
  }
}

export default App;
