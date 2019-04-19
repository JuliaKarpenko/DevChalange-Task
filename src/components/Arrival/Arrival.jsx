import React, { Component } from 'react';
import Timetible from '../TimetibleToday/Timetible';
import DateChecker from '../DateChecker/DateChecker';
import { getDepartures } from '../../api';
import { mapper, getData, getTomorrow, getYesterday } from '../../helpers';

  
  class Arrival extends Component {
  
    state = {
      articles: [], 
      error: null,
      filterDay: "today",
    }
  
    componentDidMount() {
      this.setState({isLoading: true})
      
      getDepartures(getData())
      .then(response =>
        this.setState({articles: mapper(response.data.body.arrival, "airportFromID.city", 'timeToStand'), 
        }) 
      )
      .catch(error => this.setState({error}))
    }

    onChangeDayFilter = (type) => {
      let date;

      if ( type === 'today')  {
        date = getData();
        console.log(date);
      } else if (type === 'tomorrow') {
        date = getTomorrow();
        console.log(date);
      } else {
        date = getYesterday();
        console.log(date);
      }

      getDepartures(date)
        .then(response =>
          this.setState({articles: mapper(response.data.body.arrival, "airportFromID.city", 'timeToStand'), 
          }) 
        )
        .catch(error => this.setState({error}))
    }
  
    render() {
      const { articles, error } = this.state;

      return (
        <div>
          <DateChecker onClick={this.onChangeDayFilter}/>
          {error && <p>{error.message}</p>}
          <Timetible articles={articles}/>
        </div>
        
      ) 
    }
  }

export default Arrival;
