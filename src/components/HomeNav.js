import "../style/HomeNav.scss";
import { Link } from "react-router-dom";
import React from "react";

const Features = () => {
  return (
    <div class="grid">
      <Link to="/LiteraturePage">
        <div class="itemo">
          <h4>روايات</h4>
        </div>
      </Link>
      <Link to="/EconomicPage">
        <div class="itemo">
          <h4>إقتصاد</h4>
        </div>
      </Link>
      <Link to="/IosPage">
        <div class="itemo">
          <h4>تطوير Ios</h4>
        </div>
      </Link>
      <Link to="/WebPage">
        <div class="itemo">
          <h4>تطوير الويب</h4>
        </div>
      </Link>
      <Link to="/AspPage">
        <div class="itemo">
          <h4>تعلم Asp</h4>
        </div>
      </Link>
      <Link to="/GamingPage">
        <div class="itemo">
          <h4>تطوير الألعاب</h4>
        </div>
      </Link>
    </div>
  );
};
export default Features;
