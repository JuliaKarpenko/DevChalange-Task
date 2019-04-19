export const getData = () => {
  let date = new Date();

  let dateString = [
    ("0" + date.getDate()).slice(-2),
    ("0" + (date.getMonth()+1)).slice(-2), 
    date.getFullYear()
  ].join("-");

  return dateString;
};

export const getTomorrow = () => {
  let tomorrow = new Date();

  tomorrow.setDate(tomorrow.getDate()+1);

  let tomorrowString = [
    ("0" + tomorrow.getDate()).slice(-2),
    ("0" + (tomorrow.getMonth()+1)).slice(-2), 
    tomorrow.getFullYear()
  ].join("-");

  return tomorrowString;
};

export const getYesterday = () => {
  let tomorrow = new Date();

  tomorrow.setDate(tomorrow.getDate()-1);

  let tomorrowString = [
    ("0" + tomorrow.getDate()).slice(-2),
    ("0" + (tomorrow.getMonth()+1)).slice(-2), 
    tomorrow.getFullYear()
  ].join("-");

  return tomorrowString;
};


export const getTime = (time) => {
  if (time) {

      let date = new Date(time);

      let dateString = [
      ("0" + (date.getHours()+1)).slice(-2), 
      ("0" + date.getMinutes()).slice(-2)
      ].join(":");
      return dateString;
  }
  return 'coming soon';
};


export const mapper = (articles, away, dateKey) => {
    return articles.map((el) => {
      const {ID, term, [away]: airportToID, status, airline: {en: {name}}, codeShareData: [{codeShare}]} = el;
      const time = el[dateKey];

      return ({
        id: ID,
        term: term,
        time: time,
        city: airportToID,
        status: status,
        company: name,
        flight: codeShare
      });
    }); 
  };