import React from "react";
import Articles from "../../components/Articles";
import Query from "../../components/Query";
import ARTICLES_QUERY from "../../queries/article/articles";
import { Link } from "react-router-dom";
import CATEGORIES_QUERY from "../../queries/category/categories";

const Home = () => {
  
  return (
    <div>
      <section id="heroM">
                <div class="heroM-container">
                 <h6 class="title">RSC Blog</h6>
                </div>
            </section>
      <div class="uk-container">
       <div class="row">
        <div class="col-md-4">
            <div class="sidebar">
           
                <div class="categories widget" >
                    <h3 class="CategoryTitle">Categories</h3>
      <Query query={CATEGORIES_QUERY} id={null}>
        {({ data: { categories } }) => {
          return (
         
                    <ul>                  
                    {categories.map((category, i) => {
                      return (                          
                        <li key={category.id}>
                          <Link
                            to={`/category/${category.id}`}
                            className="CategoryTitle"
                          >
                            {category.name}
                          </Link>
                        </li>
                      );
                    })}                    
                  </ul>                               
                    
          );
        }}
      </Query>
                </div>     
              </div> 
             </div>                    
            
          <div className="col-md-8">
          <div class="cardHoldingMargin2">
          <Query query={ARTICLES_QUERY}>
            {({ data: { articles } }) => {
              return <Articles articles={articles} />;
            }}
          </Query>
          </div> 
          </div> 
          </div>
          </div> 
          </div>
  );
};

export default Home;
