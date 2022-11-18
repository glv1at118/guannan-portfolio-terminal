import React from 'react';
import '../styles/news.css';

export default class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headlineNewsList: [],
            apiKey: "2d8632aa8766423bb537fd74092883c8",
            topHeadLinesEndpoint: "https://newsapi.org/v2/top-headlines",
            pageSize: 50
        };
    }
    getHeadlineNewsList = async (countryCode) => {
        let fetchResult = await fetch(`${this.state.topHeadLinesEndpoint}?country=${countryCode}&pageSize=${this.state.pageSize}`, {
            headers: {
                Authorization: this.state.apiKey,
                "Content-Type": "text/plain"
            }
        });
        if (fetchResult.ok) {
            this.setState({
                headlineNewsList: (await fetchResult.json()).articles
            });
        } else {
            throw fetchResult;
        }
    }
    render() {
        return (
            <ul id="my-news">
                <div className="btn-group-container nes-container is-rounded">
                    <button type="button" className="nes-btn" onClick={() => { this.getHeadlineNewsList("us") }}>US News</button>
                    <button type="button" className="nes-btn" onClick={() => { this.getHeadlineNewsList("ca") }}>CA News</button>
                    <button type="button" className="nes-btn" onClick={() => { this.getHeadlineNewsList("cn") }}>CN News</button>
                </div>
                {
                    this.state.headlineNewsList.map((newsItem, index) => {
                        return (
                            <li className="news-item" key={index}>
                                <div className="nes-container is-rounded side-news with-title">
                                    <p className="title">
                                        <a href={newsItem.url} target="_blank" rel="noopener noreferrer">
                                            {newsItem.title} <i className="fas fa-external-link-alt"></i>
                                        </a>
                                    </p>
                                    <p className="news-info">
                                        {newsItem.description === null || newsItem.description === "" || typeof newsItem.description === "undefined" ? 'News brief is not available.' : newsItem.description}<br /><br />
                                        - Published At: {newsItem.publishedAt}
                                    </p>
                                </div>
                            </li>
                        );
                    })
                }
            </ul>
        );
    }
}