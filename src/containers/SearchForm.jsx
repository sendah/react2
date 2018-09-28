import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setPlace, startSearch } from '../actions/';

const SearchForm = props => (
  <form
    className="search-form"
    onSubmit={(e) => {
      e.preventDefault();
      props.history.push(`/?place=${props.place}`);
      props.startSearch();
    }}
  >
    <input
      className="place-input"
      type="text"
      size="30"
      value={props.place}
      onChange={(e) => {
        e.preventDefault();
        props.setPlace(e.target.value);
      }}
    />
    <input className="submit-button" type="submit" value="検索" />
  </form>
);

SearchForm.propTypes = {
  place: PropTypes.string.isRequired,
  onPlaceChange: PropTypes.func.isRequired,
  setPlace: PropTypes.funnc.isRequired,
  startSearch: PropTypes.funnc.isRequired,
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};

const mapStateToProps = state => ({
  place: state.place,
});

export default connect(
  state => ({
    place: state.place,
  }),
  { setPlace, startSearch },
)(SearchForm);
