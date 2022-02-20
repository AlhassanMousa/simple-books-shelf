import { Container } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import mth from "../images/mth.png";

const PostNav = () => {
  return (
    <div className="PostNav">
      <Container>
        <div className="PostNav_Container">
          <Link to="/" style={{ textDecoration: "none" }}>
            <img src={mth} alt="logo" />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default PostNav;
