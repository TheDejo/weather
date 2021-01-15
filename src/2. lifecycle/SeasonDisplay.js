import React from 'react';
import './SeasonDisplay.css'

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: 'sun'
  },
  winter: {
    text: "Burr, it's chilly",
    iconName: 'snowflake'
  }
};


const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
      return lat > 0 ? 'summer' : 'winter' ;
    } else {
      return lat > 0 ? 'winter' : 'summer'
    }
};


const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const {text, iconName} = seasonConfig[season];

  return(
    <div className={`season-display ${season}`}>
      <h1> 
        <i className={`icon-left massive ${iconName} icon`} /><br/>
        {text}<br/>
        <i className={`icon-right massive ${iconName} icon`} />
      </h1>
    </div>
  ) 
}

export default SeasonDisplay;