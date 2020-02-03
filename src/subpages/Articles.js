import devLogo from "../images/dev.webp";
import React from "react";
import {graphql, StaticQuery} from "gatsby";

const Articles = () =>
    <StaticQuery query={devQuery} render={data => {
        return <>
            <h2 className="major">Articles</h2>
            <p>Below you can find a list of my articles published on dev.to.</p>
            <span className="image main">
                <a href={'https://dev.to/mdabrowskieu'}> <img src={devLogo} alt="" /></a>
            </span>
            <ul>
                {data.allDevArticles.nodes.map(n => n.article).map(a => <li key={a.id}><a href={a.url}>{a.title}</a> ({a.published_at})</li>)}
            </ul>
    </>}} />;

export default Articles;

const devQuery = graphql`
query devQuery {
  allDevArticles(sort: {fields: article___published_at, order: DESC}) {
    nodes {
      article {
        title
        url
        published_at(formatString: "YYYY-MM-DD")
        id
      }
    }
  }
}
`;