import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";

const imgStyle = {
	hight: "auto",
	width: "80%"
};

const articleStyle = {
	width: "50%",
	margin: "0 auto",
	color: "black"
};

class NewsItem extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { article } = this.props;
		let newsData;

		if (article) {
			newsData = article.map((article, index) => {
				return (
					<div key={index}>
						<article style={articleStyle}>
							<div>
								<h1>{article.author}</h1>
								<img style={imgStyle} src={article.urlToImage} alt="" />
								<h4>{article.description}</h4>
								<a href={article.url} target="_blank">
									READ MORE
                </a>
							</div>
						</article>
					</div>
				);
			});
		} else {
			newsData = (
				<div>
					<p></p>
				</div>
			);
		}

		return <div>{newsData}</div>;
	}
}

const mapStateToProps = state => ({
	article: state.news
});

NewsItem = connect(
	mapStateToProps,
	null
)(NewsItem);
export default NewsItem;
