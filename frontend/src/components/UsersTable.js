export default function UsersTable({users})
{
    if(users.length===0)
    {
        return <></>
    }
    else{
    return (
        <>
             <table>
                    <tr>
                       <td>First Name</td>
                       <td>Last Name</td>
                       <td>Email</td>
                       <td>Gender</td>
                       <td>Income</td>
                       <td>City</td>
                       <td>Car</td>
                       <td>Quote</td>
                       <td>Phone Price</td>
                    </tr>

                    {
                        users.map((record)=>{
                            if(record!=null)
                            {
                                return (<tr>
                                <td>{record.first_name}</td>
                                <td>{record.last_name}</td>
                                <td>{record.email}</td>
                                <td>{record.gender}</td>
                                <td>{record.income}</td>
                                <td>{record.city}</td>
                                <td>{record.car}</td>
                                <td>{record.quote}</td>
                                <td>{record.phone_price}</td>
                                </tr>)
                            }
                        })
                    }
                </table>
        </>
    )
                }
}