import React from 'react';
import { connect, styled } from "frontity";
import FormIdContext from "./../context/FormIdContext";

/**
 * Message component
 *
 * Used to display success and error messages.
 *
 * @param {Object} state Frontity state.
 *
 * @return {*|string}
 *
 */
const Message = ( { state } ) => {

	const id           = React.useContext( FormIdContext );
	const responseInfo = state.cf7.forms[ id ];

	/**
	 * Get the error or success message
	 *
	 * @return {string|*}
	 */
	const getMessage = () => {

		if ( 'sent' === responseInfo.status ) {
			return <SuccessMessage color={state.theme.colors.green} border={state.theme.colors.bs.success}>{ responseInfo.message }</SuccessMessage>
		} else if ( 'failed' === responseInfo.status ) {
			return <ErrorMessage color={state.theme.colors.red} border={state.theme.colors.bs.danger} >{ responseInfo.validationErrors }</ErrorMessage>
		} else {
			return '';
		}

	};

	return getMessage();

};

const SuccessMessage = styled.div`
	margin: .5rem 1rem 0;
	padding: 1rem;
	color: ${props => props.color || "green"};
    border: 2px solid ${props => props.border || "green"};
	background: rgba(255,255,255, .6);
	border-radius: .3rem;
	text-shadow: 1px 1px 1px white;
	box-shadow: 1px 1px 2px rgba(0,0,0, .4);
`;

const ErrorMessage = styled.div`
	margin: .5rem 1rem 0;
	color: ${props => props.color || "red"};
    border: 2px solid ${props => props.border || "red"};
	padding: 0.75rem 1.25rem;
	background: rgba(255,255,255, .6);
	border-radius: .3rem;
	text-shadow: 1px 1px 1px white;
	box-shadow: 1px 1px 2px rgba(0,0,0, .4);
`;

export default connect( Message );
