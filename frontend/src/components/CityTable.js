export default function CityTable({ cities }) {
  if (cities.length === 0) {
    return <></>;
  } else {
    return (
      <>
        <table style={{ marginTop: "-2px" }}>
          <tr style={{ border: "1px solid black", marginTop: "-5px" }}>
            <td
              style={{
                padding: "4px",
                cursor: "pointer",
                margin: "6px",
                fontFamily: "cursive",
                border: "1px solid black",
              }}
            >
              City
            </td>
            <td style={{ padding: "4px", cursor: "pointer", margin: "6px" }}>
              Total Users
            </td>
            <td style={{ padding: "4px", cursor: "pointer", margin: "6px" }}>
              Average Income
            </td>
          </tr>

          {cities.map((record, index) => {
            if (record != null) {
              return (
                <tr
                  className="one"
                  style={{ border: "1px solid black" }}
                  key={index}
                >
                  <td
                    style={{
                      border: "0.5px solid grey",
                      backgroundColor: "lightgrey",
                      color: "black",
                    }}
                  >
                    {record._id.city}
                  </td>
                  <td
                    style={{
                      border: "0.5px solid grey",
                      backgroundColor: "lightgrey",
                      color: "black",
                    }}
                  >
                    {record.totalUsers}
                  </td>
                  <td
                    style={{
                      border: "0.5px solid grey",
                      backgroundColor: "lightgrey",
                      color: "black",
                      padding: "8px",
                    }}
                  >
                    {Number(record.averageIncome.$numberDecimal).toFixed(2)}
                  </td>
                </tr>
              );
            }
          })}
        </table>
      </>
    );
  }
}
