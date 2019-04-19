import React, { Component } from 'react';
import Timetible from '../TimetibleToday/Timetible';
import DateChecker from '../DateChecker/DateChecker';
import { getDepartures } from '../../api';
import { mapper } from '../../helpers';

  class Departure extends Component {
  
    state = {
      articles: [], 
      error: null
    }
  
    componentDidMount() {
      getDepartures()
      .then(response => this.setState({articles: mapper(response.data.body.departure, 'airportToID.city'), 
        }) 
      )
      .catch(error => this.setState({ error }));
    }


  
    render() {
      const { articles, error } = this.state;

      return (
        <div>
            <DateChecker/>
            {error && <p>{error.message}</p>}
            <Timetible articles={articles}/>
        </div>
        
      ) 
    }
  }

export default Departure;
