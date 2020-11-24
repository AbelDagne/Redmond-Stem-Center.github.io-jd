import React from "react";
import Card from "../Card";

const Articles = ({ articles }) => {
  const rightArticles = articles.sort((a,b) => b.id - a.id);
  return (
    <div>   
        <div class="row">        
            {rightArticles.map((article, i) => {
              return(
              <div class="col-md-6 col-sm-8">
              <div class="cardHoldingMargin">
               <Card article={article} key={`article__${article.id}`} />

               </div>
               </div>);
            })}
            </div>
    </div>
  );
};

export default Articles;
