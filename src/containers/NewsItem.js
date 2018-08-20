

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';



const imgStyle = {
  hight: 'auto',
  width: '80%',
  borderRadius: '5%'
};

const articleStyle = {
  width: '50%',
  margin: '0 auto',
  color: 'black'
}

class NewsItem extends React.Component{

	constructor(props){
		super(props);
		console.log('News',this);
	}

	render(){

		const {article} = this.props;
		console.log('article',article);
		let _news_data;

		if(article){

		  _news_data = article.map((article,index) => {
		  return(
		  	<div key = {index}>
		  		<article style={articleStyle} >
				  <div>
				    <h1>{article.author}</h1>
				    <img style={imgStyle} src={article.urlToImage} alt="" />
				    <h4>{article.description}</h4>
				    <a href={article.url} target="_blank">READ MORE</a>
				  </div>
				</article>
			</div>
		  )
		 })
		}
		 else{
		 	_news_data = (<div><p></p></div>);
		 }

		return(
			<div>
				{_news_data}
			</div>
		)
	}

}

const mapStateToProps = (state) => ({
	article: state.news,
})

NewsItem = connect(mapStateToProps,null)(NewsItem)
export default NewsItem;

