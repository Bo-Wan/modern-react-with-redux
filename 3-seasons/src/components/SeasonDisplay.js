import React from 'react';
import './SeasonDisplay.css'

const seasonConfig = {
  summer: {
    text: 'beach',
    iconName: 'sun',
  },
  winter: {
    text: 'chill',
    iconName: 'snowflake',
  }
}

const getSeason = (lat, month) => {
  if(month > 2 && month < 9)
    return lat > 0? 'summer' : 'winter'
  else
    return lat < 0? 'summer' : 'winter'
}

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, props.month);

  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={ `massive ${iconName} icon icon-left`  }></i>
      <h1>
        {text}
      </h1>
      <i className={ `massive ${iconName} icon icon-right` }></i>
    </div>
  );

};

export default SeasonDisplay;
