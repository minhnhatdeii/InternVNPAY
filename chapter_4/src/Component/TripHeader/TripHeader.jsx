import React from 'react';
import './TripHeader.css';
import { Navigator, Button } from '@vnxjs/components';


function TripHeader({icon, namePage, route}) {
  return (
    <div className="trip-header">
      <Navigator openType='navigateBack'>
        <Button className="icon-button back-btn">
          <img src={icon} alt='back-btn'/>
        </Button>
      </Navigator>
      <div className="trip-info">
        <div className="trip-title">{namePage}</div>
        {route && <div className="trip-route">{route}</div>}
      </div>
      <div className="action-buttons">
        <button className="icon-button">⋯</button>
        <div className='btn-tripheader_line'/>
        <Navigator openType='navigateBack'>
          <button className="icon-button" onClick={() => navigateBack}>✕</button>
        </Navigator>
      </div>
    </div>
  );
};

export default TripHeader;
