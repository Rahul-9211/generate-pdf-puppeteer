import logo from './logo.svg';
import './App.css';
import { useState } from "react"
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [generatedPDF, setgeneratedPDF] = useState("pdf")
  async function getGenratedPDF() {
    await axios.get(`http://localhost:5000/generate-pdf`, {
      responseType: 'arraybuffer',
      headers: {
        'Accept': 'application/pdf'
      }
    }).then((res) => {
      console.log("res/data", res.data)
      const blob = new Blob([res.data], { type: res.ContentType })
      // const link = document.createElement('a')
      var link_href = URL.createObjectURL(blob)
      console.log("link", link_href)
      setgeneratedPDF(link_href)
      handleShow()
    }).catch((err) => console.log("err", err))
  }
  return (
    <div className="App">
      <div className="App-header">
        <button className="generateBtn" onClick={() => getGenratedPDF()}> Generate PDF
        </button>
      </div>

      <Modal show={show} onHide={handleClose}
        size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe id="displayZone" src={generatedPDF} type="application/pdf" style={{ width: "100%", height: "80vh" }}></iframe>
          {/* <embed class="pdfobject" src={generatedPDF} type="application/pdf" style="overflow: auto; width: 100%; height: 100%;" internalinstanceid="88"></embed> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>

  );
}

export default App;
