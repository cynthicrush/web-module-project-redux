import React from 'react';
import {connect} from 'react-redux';

import { removeFeature } from '../actions';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => props.removeFeature(props.feature)}>X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedFeature: state.feature
  };
};

export default connect(mapStateToProps, {removeFeature})(AddedFeature);
