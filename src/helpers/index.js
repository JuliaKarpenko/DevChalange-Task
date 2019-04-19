export const getData = () => {
    let date = new Date();
  
    let dateString = [
      ("0" + date.getDate()).slice(-2),
      ("0" + (date.getMonth()+1)).slice(-2), 
      date.getFullYear()
    ].join("-");
  
    return dateString;
  };

export const getTime = (time) => {
    let date = new Date(time);

    let dateString = [
    ("0" + (date.getHours()+1)).slice(-2), 
    ("0" + date.getMinutes()).slice(-2)
    ].join(":");
    return dateString;
};


export const mapper = (articles, away) => {
    return articles.map(({ID, term, [away]: airportToID, timeBoard, status, airline: {en: {name}}, codeShareData: [{codeShare}]}) => ({
      id: ID,
      term: term,
      time: timeBoard,
      city: airportToID,
      status: status,
      company: name,
      flight: codeShare
    }));
  };