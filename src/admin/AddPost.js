import { Button, Container } from "@material-ui/core";
import React, {  useState } from "react";
import db from "../firebase";
import "../style/App.scss";

import "firebase/auth";
import "firebase/firestore";
import firebase from "firebase";


import "react-datepicker/dist/react-datepicker.css";

const AddPost = () => {
  const [value, setValues] = useState({
    title: "",
    url: "",
    auth: "",
    cat: "",
    book: "",
  });

  const [startDate, setStartDate] = useState(new Date());

  const changeValue = (e) => {
    setValues({ ...value, [e.target.name]: e.target.value });
  };
  const submit = (e) => {
    e.preventDefault();

    db.collection("bookreader").add({
      title: value.title,
      url: value.url,
      auth: value.auth,
      cat: value.cat,
      book: value.book,
    });

    setValues({
      ...value,
      title: "",
      url: "",
      cat: "",
      book: "",
      link: "",
      auth: "",
    });
  };

  console.log(startDate);
  return (
    <form onSubmit={submit}>
      <Container>
        <span className="span1"></span>
        <h1>قم بإضافة كتاب جديد</h1>

        <div className="Form_InputDivs">
          <p>العنوان</p>
          <input
            value={value.title}
            name="title"
            type="text"
            placeholder="العنوان..."
            onChange={changeValue}
          />
        </div>

        <div className="Form_InputDivs">
          <p>الفئة</p>
          <select
            value={value.cat}
            type="text"
            placeholder="الفئة"
            name="cat"
            onChange={changeValue}
          >
            <option selected>....</option>
            <option value="Literature">روايات</option>
            <option value="Economic">إقتصاد</option>
            <option value="Ios">تطبيقات Ios</option>
            <option value="Web">تطوير الويب</option>
            <option value="Asp">Asp </option>
            <option value="Graphic">جرافيك ديزاين</option>
            <option value="Gaming"> تطوير الألعاب</option>
          </select>
        </div>
        <div className="Form_InputDivs">
          <p>المؤلف</p>
          <input
            value={value.auth}
            type="text"
            placeholder="المؤلف"
            name="auth"
            onChange={changeValue}
          />
        </div>

        <div className="Form_InputDivs">
          <p> الكتاب </p>
          <input
            value={value.book}
            type="text"
            placeholder="الكتاب"
            name="book"
            onChange={changeValue}
          />
        </div>

        <div className="Form_InputDivs">
          <p> لينك الصورة</p>
          <input
            value={value.url}
            type="text"
            placeholder="لينك الصوره"
            name="url"
            onChange={changeValue}
          />
        </div>
        <div className="Form_SubmitBtn">
          <Button type="submit">Submit</Button>
          <Button onClick={() => firebase.auth().signOut()}>Sign out</Button>
        </div>
      </Container>
    </form>
  );
};

export default AddPost;
