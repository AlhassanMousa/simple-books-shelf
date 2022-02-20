import { Button, Container, Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import db from "../firebase";
import "../style/App.scss";
import PostComponent from "./PostComponent";
import { Link } from "react-router-dom";

function Asp() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const now = new Date();
    db.collection("bookreader")
      .where("cat", "==", "Asp")
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
        <Link to="/AspPage">
          <h2 className="linkh2">#تعلم ASP.NET</h2>
        </Link>

        {events.map(({ id, data }) => (
          <PostComponent key={id} id={id} data={data} />
        ))}
      </Container>
    </div>
  );
}

export default Asp;
