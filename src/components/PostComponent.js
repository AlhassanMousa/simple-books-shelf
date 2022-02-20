import React from "react";
import { Link } from "react-router-dom";
import "../style/style.css";


const PostComponent = ({ id, data }) => {
  return (
    <div className="card">
      <Link to={`/Event/${id}`}>
        {data.url && <img src={data.url} alt="title" />}
        <h3>{data.title}</h3>
        <p> للكاتب {data.auth} </p>
      </Link>
    </div>
  );
};

export default PostComponent;
