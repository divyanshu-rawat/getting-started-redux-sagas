
import React from 'react';
import { connect } from 'react-redux';
import { getNews } from '../actions';
import { bindActionCreators } from 'redux';
import '../App.css';


/*

	let Button= ({getNews}) =>(
	   <button onClick={getNews}>Press to see news</button>
	)

	const mapDispatchToProps = {
	     getNews: getNews,
	};


	let Button = (props) =>(
	   <button onClick={getNews}>Press to see news</button>
	)


*/


class Button extends React.Component{
	render(){
		return(
			<div>
				<button className = "_margin" onClick={this.props.getNews}>Press to see news</button>
			</div>
			)
	}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getNews}, dispatch);
}

Button = connect(null,mapDispatchToProps)(Button);
export default Button;