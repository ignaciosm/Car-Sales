import React from 'react';
import { connect } from "react-redux";
import { addFeature, addPrice } from '../actions';


const AdditionalFeature = props => {

  const handleAddFeature = () => {
    props.addFeature(props.feature);
    props.addPrice(props.feature);
    // console.log('from handleAddFeature', props.feature)
  };

  return (
    <li>
      <button onClick={handleAddFeature} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapDispatchToProps = {
  addFeature,
  addPrice
};
export default connect(
  state => state,
  mapDispatchToProps
)(AdditionalFeature);
