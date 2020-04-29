import React from 'react';
import FormIdContext from "../context/FormIdContext";
import { connect, styled, css} from "frontity";

/**
 * Span component
 *
 * @param {Object} state Frontity state.
 * @param {Object} children children.
 * @param {String} className Classname.
 * @param {String} spanKey Key of children input field.
 *
 * @return {*}
 */
const Span = ( { state, children, className, spanKey } ) => {

	const id = React.useContext( FormIdContext );
	
	let errorMessage = '';

	if ( 'undefined' !== typeof ( state.cf7.forms[ id ].invalidFields ) ) {
		errorMessage = ( 'undefined' !== typeof ( state.cf7.forms[id].invalidFields[spanKey] ) ) ? state.cf7.forms[id].invalidFields[spanKey] : '';
	}

	return (
		<span className={ className }>
			{ children }
			{ errorMessage && (
				<NotValidTip css={css`color: ${state.theme.colors.red};`}>⬆ { errorMessage }</NotValidTip>
			) }
		</span>
	);

};

// color={state.theme.colors.red}
// color: ${ color => props.color };

const NotValidTip = styled.span`
	display: block;
	padding: 1rem;
	margin: .3rem auto 0;
	width: 60%;
	min-width: 300px;
	background-color: rgba(255,255,255,.6); 
	${ color => color };
    font-size: 1.2rem;
	font-weight: normal;
	text-align: center;
	text-shadow: 1px 1px 0 rgba(0,165,70, .3);
	border-radius: .3rem;
	box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
	
	&::after {
		content: '';
		display: block;
		margin-top: .3rem;
		height: .3rem;
		width: 100%;
		background: linear-gradient(
		  -45deg, 
		  #E1623F 25%, 
		  rgb(205, 38, 83) 25%, 
		  rgb(205, 38, 83) 50%, 
		  #E1623F 50%, 
		  #E1623F 75%, 
		  rgb(205, 38, 83) 75%, 
		  rgb(205, 38, 83)
		  );
		background-size: 20px 20px;
		background-position: 0 0;
		}
`;

export default connect( Span );
