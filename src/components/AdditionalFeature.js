import React from 'react';
import { useDispatch } from 'react-redux';
import { buyItem, BUY_ITEM } from '../actions'

const AdditionalFeature = props => {
  const dispatch = useDispatch()

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button 
      className="button"
      onClick={() => dispatch({type: BUY_ITEM, payload: props.feature})}
      >Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
