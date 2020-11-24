import React from "react";
import { useParams } from "react-router";
import Query from "../../components/Query";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";

import ARTICLE_QUERY from "../../queries/article/article";

var foo = "RSC Blog"
const Article = () => {
  let { id } = useParams(); 
  return (
    <Query query={ARTICLE_QUERY} id={id}>
      {({ data: { article }}) =>  { 
        return (
          <div>
             <div>
              <section id="heroM">
                <div class="heroM-container">
                 <h6 class="title">{article.title}</h6>
                </div>
            </section>
            </div>
          <div class="container">
          <div class=" text-center">
           
            <div class="ima">
              <img src={process.env.REACT_APP_BACKEND_URL  + article.image.url}></img>
            </div>
            </div> 
           
            <div className="uk-section">
              <div className="uk-container uk-container-small CategoryTitle blue">
                <ReactMarkdown source={article.content} />
               </div>
               <div className="uk-container uk-container-small ">
               <hr class="spacingF"></hr>
               <ul className="uk-navbar-nav">
                
                <div className="uk-container uk-container-small blue">
                  Post by: {article.author}    
                </div>              
                
                  <div className="uk-container uk-container-small blue">
                    <Moment format="MMM Do YYYY">{article.published_at}</Moment>
                  </div>              
              </ul>                
              </div>
            </div>  
          </div>
          </div>
        );
      }}
      
    </Query>
  );
};


export default Article;
