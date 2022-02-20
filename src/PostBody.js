import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import db from "./firebase";
import { CircularProgress } from "@material-ui/core";
import NavBar from "./components/navbar/NavBar";
import "./style/App.scss";
import { pdfjs } from "react-pdf";
import "./style/style.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PostBody = () => {
  const [dataPost, setDataPost] = useState(null);
  const [loading, setLoading] = useState(true);

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  const { id } = useParams();

  useEffect(() => {
    db.collection("bookreader")
      .doc(id)
      .get()
      .then((doc) => {
        setDataPost(doc.data());
        setLoading(false);
      });
  }, [id]);

  return (
    <>
      <NavBar />
      <div className="postBody">
        {loading ? (
          <CircularProgress
            style={{ margin: "100px 0", color: "#9AC4F8" }}
            size={100}
          />
        ) : (
          <iframe
            style={{ width: "100%", height: "1200px" }}
            src={dataPost.book}
            allowtransparency="true"
            allow="encrypted-media"
            loading="lazy"
            frameborder="0"
            sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-presentation allow-same-origin allow-scripts allow-top-navigation allow-top-navigation-by-user-activation"
            scrolling="no"
            seamless=""
            type="application/pdf"
            title="title"
          />
        )}
      </div>
    </>
  );
};

export default PostBody;

/*

 <div className="postBody">
      {loading ? (
        <CircularProgress
          style={{ margin: "100px 0", color: "#9AC4F8" }}
          size={100}
        />
      ) : (
        <div className="postBody_container postContainer">
          <h1>{dataPost?.title}</h1>

          <div
            className="postBody_image"
            style={{ backgroundImage: `url(${dataPost?.image})` }}
          />

          <p>{dataPost?.paragraph}</p>

          <div className="postBody_icons">
            <div className="postBody_Container">
              <ThumbsUpDownIcon />
              <h3 style={{ marginRight: "20px" }}>5</h3>

              <ChatBubbleOutlineIcon />
              <h3>3</h3>
            </div>

            <div className="postBody_Container">
              <BookmarkBorderOutlinedIcon />
            </div>
          </div>
        </div>
      )}
    </div>




*/

/*

    <>
      <NavBar />
      <div className="postBody">
        {loading ? (
          <CircularProgress
            style={{ margin: "100px 0", color: "#9AC4F8" }}
            size={100}
          />
        ) : (
          <div className="postContainer">
            <h1>{dataPost?.title}</h1>


            <div className='DocButton'>
                <button
                  type="button" className='DocBut'
                  onClick={() => setPageNumber(prevState => prevState - 1)}
                  disabled={pageNumber == 1 ? true : false}>السابق </button>
                <p className='DocText'> صفحة {pageNumber || (numPages ? 1 : "--")} من {numPages || "--"}
                </p>
                <button
                  type="button" className='DocBut'
                  onClick={() => setPageNumber(prevState => prevState + 1)}
                  disabled={pageNumber == numPages ? true : false}>التالية </button>
              </div>


            <div className="con">
              <Document className='Doc' file={resume} onLoadSuccess={onDocumentLoadSuccess} ><Page pageNumber={pageNumber} /></Document>

         
            </div>







            
            <div
              className="postBody_image"
              style={{ backgroundImage: `url(${dataPost?.image})` }}
            />


            <div >


              <div>
                <h3 ><BiTime color="grey" />{'التاريخ'}</h3>
                <p>{dataPost.startDate.toDate().toLocaleString('ar-EG', { dateStyle: 'full', timeStyle: 'short' })}</p>
              </div>


              <div>
                <h3 ><BsFillPeopleFill color="grey" />{'مهتمين'}</h3>
                <p >{dataPost?.attendance}</p>
              </div>



              <div>
                <h3><AiFillInfoCircle color="grey" />{'تفاصيل'}</h3>
                <p>{dataPost?.details}</p>
              </div>

            </div>
            <Button target="_blank" variant="outlined" className="goButton" href={dataPost?.link}> <h4><BiMapPin color="grey" />إكتشف</h4></Button>

          </div>

        )}
      </div>
    </>






*/

/*

      <div className='DocButton'>
                <button
                  type="button" className='DocBut'
                  onClick={() => setPageNumber(prevState => prevState - 1) }
                  disabled={pageNumber == 1 ? true : false}>السابق </button>
                <p className='DocText'> صفحة {pageNumber || (numPages ? 1 : "--")} من {numPages || "--"}</p>
                <button
                  type="button" className='DocBut'
                  onClick={() => setPageNumber(prevState => prevState + 1)}
                  disabled={pageNumber == numPages ? true : false}>التالية </button>
              </div>


              <SizeMe
  monitorHeight
  refreshRate={128}
  refreshMode={"debounce"}
  render={({ size }) => (
              <Document className='Doc' size='A4' file={dataPost?.book} onLoadSuccess={onDocumentLoadSuccess} ><Page pageNumber={pageNumber} width={size.width}/></Document>


              )} />




*/
