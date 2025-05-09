const express = require("express");
const sql = require("mysql2");
const app = express();

const cors = require("cors");
const PORT = 5000;

const conn = sql.createConnection({
    host:"localhost",
    port: 3306, 
    password: "cdacacts",
    user: "root", 
    database: "module_exam"
})

conn.connect((err)=>{
    if(err){
        console.log("Cannot connect with sql...");
        return;
    }
    console.log("Yeahh.. connected");
})
//============
app.use(cors())
app.use(express.json());

app.get("/getDept", (req, res)=>{
    const sql = "select * from department";

    conn.query(sql, (err,result)=>{
        if(err){
            console.error("The error...",err.message);
            return res.status(500).send("Error while data fetching");
        }
        return res.status(200).json({success:true, data: result});
    })    
})

app.get("/getStudents",(req, res)=>{
    const sql = "select * from student";

    conn.query(sql, (err,result)=>{
        if(err){
            console.error("The error...",err.message);
            return res.status(500).send("Error while data fetching");
        }
        return res.status(200).json({success:true, data: result});
    })   
})

app.post("/DeptToStudent",(req, res)=>{
    const sql = "insert into student (sid, sname, sage, deptID) values (?, ?, ?, ?)";

    const data = req.body;
    const {id, name, age, deptID} = data;

    conn.query(sql, [id, name, age, deptID], (err, result)=>{
        if(err){
            console.error("Error--->",err.message);
            res.status(500).json({success: false, message: "Cant fetch a simple data shame .."});
        }
        res.status(200).json({success: true, message: "Result is posted from dept to student ..."});
    })

})

app.listen(PORT,()=>{
    console.log(`Connected to the port..${PORT}`)
})


