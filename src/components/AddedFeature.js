import React from 'react';
import { connect } from "react-redux";
import { removeFeature, removePrice } from '../actions';

const AddedFeature = props => {

  const handleRemoveFeature = () => {
    props.removeFeature(props.feature);
    props.removePrice(props.feature);
    // console.log('from handleRemoveFeature', props.feature)
  }

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={handleRemoveFeature} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

const mapDispatchToProps = {
  removeFeature,
  removePrice
};
export default connect(
  state => state,
  mapDispatchToProps
)(AddedFeature);
