import React from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";

const Card = ({ article }) => {
  return (
    <Link to={`/article/${article.id}`} className="uk-link-reset">
    <div class="cardBack wow fadeInDown" data-wow-delay=".3s" data-wow-duration="500ms">
                    <article class="wow fadeInDown" data-wow-delay=".3s" data-wow-duration="500ms">
                        <div class="text-center">
                            <a href="post-fullwidth.html"><img class="img-fluid"  src={process.env.REACT_APP_BACKEND_URL + article.image.url}
            alt={article.image.url}/></a>
                        </div>
                        <div class="container">
                        <div class="blog-content">
                            <h2 class="CategoryTitle">
                            <a href="post-fullwidth.html">{article.title}</a>
                            </h2>
                            <div class="blog-meta lightB">
                                <span>{article.author}</span>
                                <span> / </span>
                                <span><Moment format="MMMM Do, YY">{article.published_at}</Moment></span>
                                <span> / </span>
                                <span>{article.category.name}</span>                       
                              
                            </div>
                            <p className="blue">
                              {article.description}
                            </p>
                            <a class="btn-get-started" >Continue Reading</a>
                           
                        </div>
                        </div>
                    </article>
                    </div>
      
    </Link>
  );
};

export default Card;
