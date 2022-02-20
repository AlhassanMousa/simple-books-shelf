import {  Container } from "@material-ui/core";
import { useEffect, useState } from "react";
import db from "../firebase";
import "../style/App.scss";
import PostComponent from "./PostComponent";
import "../style/index.css";
import { Link } from "react-router-dom";

function Ios() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const now = new Date();
    db.collection("bookreader")
      .where("cat", "==", "Ios")
      .limit(4)
      .onSnapshot((snapshot) => {
        setEvents(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
  }, []);

  return (
    <div>
      <Container>
        <Link to="/IosPage">
          <h2 className="linkh2">#تطوير Ios</h2>
        </Link>
        {events.map(({ id, data }) => (
          <PostComponent key={id} id={id} data={data} />
        ))}
      </Container>
    </div>
  );
}
export default Ios;
