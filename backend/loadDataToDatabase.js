const fs=require("fs");
const User=require("./models/User");
async function loadDataToDatabase()
{
    const filePath="../sample_data.json";
    const data=JSON.parse(fs.readFileSync(filePath,'utf-8'));
    try{
        await User.create(data);
        console.log("data successfully imported");
    }
    catch(err)
    {
        console.log(err);
    }    
}
module.exports=loadDataToDatabase;