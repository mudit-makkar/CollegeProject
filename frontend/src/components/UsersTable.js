export default function UsersTable({ users }) {
  if (users.length === 0) {
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
              First Name
            </td>
            <td style={{ padding: "4px", cursor: "pointer", margin: "6px" }}>
              Last Name
            </td>
            <td style={{ padding: "4px", cursor: "pointer", margin: "6px" }}>
              Email
            </td>
            <td style={{ padding: "4px", cursor: "pointer", margin: "6px" }}>
              Gender
            </td>
            <td style={{ padding: "4px", cursor: "pointer", margin: "6px" }}>
              Income
            </td>
            <td style={{ padding: "4px", cursor: "pointer", margin: "6px" }}>
              City
            </td>
            <td style={{ padding: "14px", cursor: "pointer", margin: "16px" }}>
              Car
            </td>
            <td style={{ padding: "4px", cursor: "pointer", margin: "6px" }}>
              Quote
            </td>
            <td style={{ padding: "4px", cursor: "pointer" }}>Phone Price</td>
          </tr>

          {users.map((record) => {
            if (record != null) {
              return (
                <tr
                  className="one"
                  style={{ border: "1px solid black" }}
                  key={record.id}
                >
                  <td
                    style={{
                      border: "0.5px solid grey",
                      backgroundColor: "lightgrey",
                      color: "black",
                    }}
                  >
                    {record.first_name}
                  </td>
                  <td
                    style={{
                      border: "0.5px solid grey",
                      backgroundColor: "lightgrey",
                      color: "black",
                    }}
                  >
                    {record.last_name}
                  </td>
                  <td
                    style={{
                      border: "0.5px solid grey",
                      backgroundColor: "lightgrey",
                      color: "black",
                      padding: "8px",
                    }}
                  >
                    {record.email}
                  </td>
                  <td
                    style={{
                      border: "0.5px solid grey",
                      backgroundColor: "lightgrey",
                      color: "black",
                      padding: "8px",
                    }}
                  >
                    {record.gender}
                  </td>
                  <td
                    style={{
                      border: "0.5px solid grey",
                      backgroundColor: "lightgrey",
                      color: "black",
                      padding: "8px",
                    }}
                  >
                    {record.income}
                  </td>
                  <td
                    style={{
                      border: "0.5px solid grey",
                      backgroundColor: "lightgrey",
                      color: "black",
                      padding: "8px",
                    }}
                  >
                    {record.city}
                  </td>
                  <td
                    style={{
                      border: "0.5px solid grey",
                      backgroundColor: "lightgrey",
                      color: "black",
                      padding: "8px",
                    }}
                  >
                    {record.car}
                  </td>
                  <td
                    style={{
                      border: "0.5px solid grey",
                      backgroundColor: "lightgrey",
                      color: "black",
                      padding: "8px",
                    }}
                  >
                    {record.quote}
                  </td>
                  <td
                    style={{
                      border: "0.5px solid grey",
                      backgroundColor: "lightgrey",
                      color: "black",
                      padding: "8px",
                    }}
                  >
                    {record.phone_price}
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
