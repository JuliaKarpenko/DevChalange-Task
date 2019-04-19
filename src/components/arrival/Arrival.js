import React, { Component } from 'react';
import axios from 'axios';
import Timetible from '../timetibleToday/Timetible';

const getData = () => {
  let date = new Date();

  let dateString = [
    ("0" + date.getDate()).slice(-2),
    ("0" + (date.getMonth()+1)).slice(-2), 
    date.getFullYear()
  ].join("-");

  return dateString;
}

getData()

const API_URL = `https://api.iev.aero/api/flights/${getData()}`;

const mapper = articles => {
    return articles.map(({ID, term, "airportFromID.city": airportToID, timeToStand, status, airline: {en: {name}}, codeShareData: [{codeShare}]}) => ({
      id: ID,
      term: term,
      time: timeToStand,
      city: airportToID,
      status: status,
      company: name,
      flight: codeShare
    }))
  }
  
  
  class Arrival extends Component {
  
    state = {
      articles: [], 
      error: null
    }
  
    componentDidMount() {
      this.setState({isLoading: true})
      
      axios.get(API_URL)
      .then(response =>
        this.setState({articles: mapper(response.data.body.arrival), 
        }) 
      )
      .catch(error => this.setState({ error}))
    }
  
    render() {
      const { articles, error } = this.state
      return (
        <div>
            {error && <p>{error.message}</p>}
            <Timetible articles={articles}/>
        </div>
        
      ) 
    }
  }

export default Arrival;
