import {useState, useEffect} from 'react';
import Form from "./Form";
import DisplayData from "./DisplayData";

function App () {
  
  const [submittedData, setSubmittedData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/names")
    .then((r) => r.json())
    .then(setSubmittedData)
  }, []);

    return (
        <div> 
          <Form submittedData = {submittedData} setSubmittedData = {setSubmittedData}/>
          <DisplayData submittedData={submittedData} />
        </div>
    )
}

export default App;