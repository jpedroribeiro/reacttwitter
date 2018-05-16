import React from 'react';
import List from './List';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ tweets: state.tweets });

const ConnectedList = connect(mapStateToProps)(List);

export default ConnectedList;
