import PropTypes from 'prop-types'
import React from 'react'
import Work from "../subpages/Work";
import Music from "../subpages/Music";
import Skillset from "../subpages/Skillset";
import Contact from "../subpages/Contact";
import Articles from "../subpages/Articles";

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      />
    );

    return (
      <div
          ref={this.props.setWrapperRef}
          id="main"
          style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}
      >
        {this.createArticle(close, 'work', <Work/>)}
        {this.createArticle(close, 'music', <Music/>)}
        {this.createArticle(close, 'articles', <Articles/>)}
        {this.createArticle(close, 'skillset', <Skillset/>)}
        {this.createArticle(close, 'contact', <Contact/>)}

      </div>
    )
  }

  createArticle(close, id, content) {
    return <article
        id={id}
        className={`${this.props.article === id ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
        }`}
        style={{display: 'none'}}
    >
      {content}
      {close}
    </article>;
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
};

export default Main
