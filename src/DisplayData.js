import React from "react";

function DisplayData ({submittedData}) {
const listOfSubmissions = submittedData.map((data, index) => {
    return (
      <div key={index}>
        {data.firstName} {data.lastName}
      </div>
    );
  });
  return (
    <div>
      <h1>Submissions</h1>
      {listOfSubmissions}
    </div>
  );
}

export default DisplayData;