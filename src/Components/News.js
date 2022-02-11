import React, { Component } from "react";
import NewsItem from "./NewsItem";
import img from "../images/default-image.jpeg";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
export default class News extends Component {
  static propTypes = {
    country: PropTypes.string,
    catagory: PropTypes.string,
    mode: PropTypes.string,
  };
  capitalizeFristLetter = (s) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
  };
  constructor(props) {
    super();
    this.state = {
      articles: [],
      loading: true,
      totalArticle: 0,
      pageSize: 1,
    };
    document.title = `${this.capitalizeFristLetter(props.catagory)} - My News`;
  }
  fetchNews = async (
    page = 1,
    catagory = this.props.catagory,
    country = this.props.country
  ) => {
    this.props.setProgress(10);
    // this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=3b1ce773401c41c7bdafc2a8a98006a6&pageSize=${this.props.pageSize}&category=${catagory}&page=${page}`;

    let data = await fetch(url);
    this.props.setProgress(40);
    let parseData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      page: page,
      totalArticle: parseData.totalResults,
      catagory: catagory,
      loading: false,
    });
    // console.log(this.state.totalArticle);
    // console.log(this.state.pageSize);
    this.props.setProgress(100);
  };
  async componentDidMount() {
    this.fetchNews();
  }
  fetchMoreData = () => {
    this.fetchNews(this.state.page + 1);
    console.log(this.state.page);
  };
  // handlePreviousClick = async () => {
  //   await this.fetchNews(this.state.page - 1);
  // };
  // handleNextClick = async () => {
  //   await this.fetchNews(this.state.page + 1);
  // };
  render() {
    let { mode } = this.props;
    return (
      <div>
        <div className="container ">
          <h2
            className={`text-${
              mode === "dark" ? "dark" : "primary"
            } text-center`}
          >
            My News {this.capitalizeFristLetter(this.props.catagory)}
          </h2>
          {/* {this.state.loading && <Spinner />} */}
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalArticle}
            loader={<Spinner />}
          >
            <div className="row" key={this.state.page}>
              {!this.state.loading &&
                this.state.articles.map((ele) => {
                  return (
                    <div className="col-md-4" key={ele.url}>
                      <NewsItem
                        mode={mode}
                        title={ele.title ? ele.title.slice(0, 70) : " "}
                        description={
                          ele.description ? ele.description.slice(0, 88) : " "
                        }
                        url={ele.urlToImage ?? img}
                        newsUrl={ele.url}
                        author={ele.author}
                        date={ele.publishedAt}
                        source={ele.source.name}
                      />
                    </div>
                  );
                })}
            </div>
          </InfiniteScroll>
        </div>
        {/* <div className="container d-flex justify-content-around mb-3">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className={`btn btn-${mode === "dark" ? "dark" : "primary"}`}
            onClick={this.handlePreviousClick}
          >
            &larr; Previous
          </button>
          <h2>{this.state.page}</h2>
          <button
            type="button"
            disabled={
              Math.ceil(this.state.totalArticle / this.state.pageSize) <
              this.state.page
            }
            className={`btn btn-${mode === "dark" ? "dark" : "primary"}`}
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}
      </div>
    );
  }
}
