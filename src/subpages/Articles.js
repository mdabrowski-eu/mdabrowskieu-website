import devLogo from "../images/dev.webp";
import React from "react";
import {graphql, StaticQuery} from "gatsby";

const Articles = () =>
    <StaticQuery query={devQuery} render={data => {
        console.log(data.allDevArticles.nodes.map(n => n.article));
        return <>
            <h2 className="major">Articles</h2>
            <span className="image main">
                <img src={devLogo} alt="" />
            </span>
            <ul>
                {data.allDevArticles.nodes.map(n => n.article).map(a => <li key={a.id}><a href={a.url}>{a.title}</a> ({a.published_at})</li>)}
            </ul>
    </>}}/>;

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