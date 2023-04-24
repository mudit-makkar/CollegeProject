import { useState, useEffect } from "react";
import UsersTable from "./UsersTable";
import CityTable from "./CityTable";
import axios from "axios";
export default function Home() {
  //{"first_name":"","last_name":"","email":"","gender":"","income":"","city":"","car":"","quote":"","phone_price":""}
  const [data, setData] = useState([]);
  const [showCityTable, setShow] = useState(false);

  function handleClick(url) {
    setData([]);
    if (url === "five") setShow(true);
    else setShow(false);
    axios
      .get("http://localhost:3001/" + url)
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <div
        style={{
          backgroundColor: "darkblue",
          padding: "14px",
          height: "14px",
          textAlign: "center",
        }}
      >
        <button
          style={{
            border: "0px",
            backgroundColor: "darkblue",
            marginRight: "20px",
            fontSize: "18px",
            cursor: "pointer",
            color: "white",
          }}
          onClick={() => handleClick("one")}
        >
          One
        </button>
        <button
          id="1"
          /* onDoubleClick={()=>handledblClick(button)}*/ style={{
            border: "0px",
            backgroundColor: "darkblue",
            marginRight: "20px",
            fontSize: "18px",
          }}
          onClick={() => handleClick("two")}
        >
          Two
        </button>
        <button
          style={{
            border: "0px",
            backgroundColor: "darkblue",
            marginRight: "20px",
            fontSize: "18px",
          }}
          onClick={() => handleClick("three")}
        >
          Three
        </button>
        <button
          style={{
            border: "0px",
            backgroundColor: "darkblue",
            marginRight: "20px",
            fontSize: "18px",
          }}
          onClick={() => handleClick("four")}
        >
          Four
        </button>
        <button
          style={{
            border: "0px",
            backgroundColor: "darkblue",
            fontSize: "16px",
          }}
          onClick={() => handleClick("five")}
        >
          Five
        </button>
      </div>
      {showCityTable ? (
        <CityTable cities={data} />
      ) : (
        <UsersTable users={data} />
      )}
    </>
  );
}
