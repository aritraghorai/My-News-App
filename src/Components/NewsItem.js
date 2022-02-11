import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, url, newsUrl, mode, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={url} className="card-img-top img" alt="..." />
          <div className="card-body">
            <span
              className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
              style={{ left: "90%", zIndex: "1" }}
            >
              {source}
            </span>
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{description}...</p>
            <a
              href={newsUrl}
              target="_blank"
              className={`btn btn-${
                mode === "dark" ? "dark" : "primary"
              } btn-sm`}
              rel="noreferrer"
            >
              Go somewhere
            </a>
            <p className="card-text">
              <small className="text-muted">
                BY {author ?? "Unknown"} on {new Date(date).toDateString()}
              </small>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
