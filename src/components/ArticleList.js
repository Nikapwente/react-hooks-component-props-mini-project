import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
    console.log(posts);
    return (
      <main>
        {posts.map((posts)=>{return <Article key={posts.id} title={posts.title} preview={posts.preview} date={posts.date}/>})}
      </main>
    )
  }
  
  export default ArticleList;