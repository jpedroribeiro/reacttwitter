import { connect } from 'react-redux';
import { addTuite } from './actions';
import Form from './Form';

const mapDispatchToProps = dispatch => ({
	addTuite: tuite => dispatch(addTuite(tuite))
});

const ConnectedForm = connect(null, mapDispatchToProps)(Form);

export default ConnectedForm;
