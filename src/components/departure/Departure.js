import React, { Component } from 'react';
import axios from 'axios';
import Timetible from '../timetibleToday/Timetible';

const API_URL = "https://api.iev.aero/api/flights/18-04-2019";

const mapper = articles => {
    return articles.map(({ID, term, 'airportToID.city': airportToID, timeBoard, status, airline: {en: {name}}, codeShareData: [{codeShare}]}) => ({
      id: ID,
      term: term,
      time: timeBoard,
      city: airportToID,
      status: status,
      company: name,
      flight: codeShare
    }));
  };
  
  
  class Departure extends Component {
  
    state = {
      articles: [], 
      error: null
    }
  
    componentDidMount() {
      axios.get(API_URL)
      .then(response => this.setState({articles: mapper(response.data.body.departure), 
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

export default Departure;
