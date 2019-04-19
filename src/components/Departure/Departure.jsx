import React, { Component } from 'react';
import Timetible from '../TimetibleToday/Timetible';
import DateChecker from '../DateChecker/DateChecker';
import { getDepartures } from '../../api';
import { mapper, getData, getTomorrow, getYesterday } from '../../helpers';

  class Departure extends Component {
  
    state = {
      articles: [], 
      error: null
    }
  
    componentDidMount() {
      getDepartures(getData())
      .then(response => this.setState({articles: mapper(response.data.body.departure, 'airportToID.city', 'timeToStand'), 
        }) 
      )
      .catch(error => this.setState({ error }));
    }

    onChangeDayFilter = (type) => {
      let date;

      if ( type === 'today')  {
        date = getData();
      } else if (type === 'tomorrow') {
        date = getTomorrow();
      } else {
        date = getYesterday();
      }

      getDepartures(date)
      .then(response => this.setState({articles: mapper(response.data.body.departure, 'airportToID.city', 'timeToStand'), 
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

export default Departure;
