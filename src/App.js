import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { createShortUrl } from './services/api.service';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      showShortenUrl : false,
      shortUrl : 'http://localhost/8abcd'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    let requestData = {
        originalUrl : this.state.value
    }
    createShortUrl(requestData,'createShortUrl')
    .then(res => {
        console.log(res);
        this.setState({
          showShortenUrl : true,
          shortUrl: res.data.shortUrl
        })
    })
    event.preventDefault();
  }

  render() {
    return (
      <div className="App App-header">
        <form className="" onSubmit={this.handleSubmit}>
          <label className="label-size">
            Original Url : 
            <input className="input-box" type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input className="submit-button" type="submit" value="Submit" />
        </form>
        {this.state.showShortenUrl && !!this.state.shortUrl && <div>
            Shortened Url is ->{` `}
            <a target="_blank" href={this.state.shortUrl}>
              {this.state.shortUrl}
            </a>
          </div>
        }
      </div>
    );
  }
}

export default App;
