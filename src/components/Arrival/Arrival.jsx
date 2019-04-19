import React, { Component } from 'react';
import Timetible from '../TimetibleToday/Timetible';
import DateChecker from '../DateChecker/DateChecker';
import { getDepartures } from '../../api';
import { mapper } from '../../helpers';

  
  class Arrival extends Component {
  
    state = {
      articles: [], 
      error: null,
      filterDay: "today",
    }
  
    componentDidMount() {
      this.setState({isLoading: true})
      
      getDepartures()
      .then(response =>
        this.setState({articles: mapper(response.data.body.arrival, "airportFromID.city"), 
        }) 
      )
      .catch(error => this.setState({error}))
    }

    onChangeDayFilter(type) {
      // let date
      // if type === 'today'
      // else if type === 'yesterday' date = new Date - 1
      // else ... date = new Date + 1

      // fetchData(date)
      // .then(response =>
      //   this.setState({articles: mapper(response.data.body.arrival, "airportFromID.city"), 
      //   }) 
      // )
      // .catch(error => this.setState({error}))
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

export default Arrival;
