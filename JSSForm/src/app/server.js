var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser');
var path = require('path');
var http = require('http');
var app = express();
var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
// Create connection to database
var config =
{
    userName: 'admin_login',
    password: 'Start@123',
    server: 'manutd8.database.windows.net',
    options:
    {
        database: 'TestSDB',
        encrypt: true
    }
}
var connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on('connect', function (err) {
    if (err) {
        console.log(err)
    }
    else {
        console.log("success");
    }
}
);

// Get port from environment and store in express
var port = process.env.PORT || '3000';

//Listen on provided PORT
app.listen(port, () => console.log("Server is running"));

///////////////////////////////////////////////////////////////////////////////////////////////////////

// getting data from DB
// app.get('/login', function (req, res) {
//     //   logger.info("Server Root");
//     var request = new Request(
//         "SELECT User_NAME FROM \"User\"WHERE USER_NAME = 'Ishmeet' AND Password = 'ish1234'",
//         function (err, rowCount, rows) {
//             if (rowCount == 0) {
//                 console.log("empty");
//             }
//             console.log(rowCount + ' row(s) returned');
//         }
//     );

//     request.on('row', function (columns) {
//         columns.forEach(function (column) {
//             console.log("%s\t%s", column.metadata.colName, column.value);
//             // res.send(column.metadata.colName, column.value);
//         });
//     });
//     connection.execSql(request);
//     res.send("Server Root");
// });

app.post('/login', function (req, res) {
    console.log("body " + req.body.username + " AND Password = " + req.body.password);
    var request = new Request(
        "SELECT USER_NAME FROM \"User\" WHERE USER_NAME = '" + req.body.username + "' AND Password = '" + req.body.password + "'",
        function (err, rowCount, rows) {
            if (err) {
                res.send(err);
            }
            else {
                if (rowCount == 1) {
                    res.status(200).send("authenticated");
                }
                // console.log("post " + rowCount + ' row(s) returned');
                // console.log(rowCount);
                // res.status(200).send("hi")
            }

        }
    );
    // request.on('row', function (columns) {
    //     columns.forEach(function (column) {
    //         console.log("%s\t%s", column.metadata.colName, column.value);
    //     });
    // });
    connection.execSql(request);
})

///////////////////////////////////////////////////////////////////////////////////////////////////////

// page 2
// get historical records from DB
app.get('/history', function (req, res) {
    var request = new Request(
        "SELECT Top 10 Create_DATE, Plant_Name, Region FROM Plant ",
        function (err, rowCount, rows) {
            if (rowCount == 0) {
                console.log("empty");
            }
            console.log("row", rows)
            console.log(rowCount + ' row(s) returned');
        }
    );
    let data = {};
    let result = [];
    request.on('row', function (columns) {
        //res.send(data);
        columns.forEach(function (column) {

            // data.push(column.value);
            // console.log(column.value);
            data[column.metadata.colName] = column.value;
            // data.push(item);
            // item.clear;
            // console.log("%s", column.value); 
        });
        console.log("data=======>", data, "\n");
        result.push(data);
        res.status(200).send("data");
        return this.result;
      
        // return result;
        // res.status(200).send("data found!");
        
        // res.send(result);
        // return data
    });

    // request.end(){
    //     res.send(result);
    // }
    // func()
    // async function func(){
    //     connection.execSql(request);
    //     console.log("done quary");
    //     res.send(result);
    // }
    
});
module.exports = router;

///////////////////////////////////////////////////////////////////////////////////////////////////////
// page 4

app.post('/form/plant', function (req, res) {
 
    //let Region = req.body.Region;
    var plants  = {Plant_Name: 'ABC', Region: 'Michigan'}; 
    
    // if (!task) {
    //     return res.status(400).send({ error:true, message: 'Please provide task' });
    // }
 
    var query = connection.execSql("INSERT INTO Plant (Plant_Name, Region) values ( 'plants')", function (error, results, fields) {
        if (error) throw error;
        // Neat!
      });
      console.log(query.sql);
    console.log("here");
    res.send("hello");
});

// app.post('/form/safety', function (req, res) {
 
//     //let Region = req.body.Region;
//     var safety  = {LOST_TIME_INCIDENT: '1', TOT_LOST_TIME_DAYS_MON: '2',TOT_EMP_FIRST_DAY_MON: '3' , TOT_EMP_LAST_DAY_MON: '4', EMP_LEFT_MON: '5', Cogs: '6', Mon_End_Inv_Local_Curr: '7', Pre_Mon_End_Inv_Local_Curr: '8'}; 
    
//     // if (!task) {
//     //     return res.status(400).send({ error:true, message: 'Please provide task' });
//     // }
//     "INSERT INTO Plant (Plant_Name, Region) values ( 'plants')"
//     var query = connection.execSql("INSERT INTO PLANT_KPI () values ('safety')", function (error, results, fields) {
//         if (error) throw error;
//         // Neat!
//       });
//       console.log(query.sql);
// });

// app.post('/form/quality', function (req, res) {
 
//     //let Region = req.body.Region;
//     var safety  = {Customer = '1', Name = '2', rejectedQty = '3', Shipped = '4', Scrap = '5', Compliants ='6'}; 
    
//     // if (!task) {
//     //     return res.status(400).send({ error:true, message: 'Please provide task' });
//     // }
 
//     var query = connection.execSql('INSERT INTO PLANT_KPI SET ?', safety, function (error, results, fields) {
//         if (error) throw error;
//         // Neat!
//       });
//       console.log(query.sql);
// });

// app.post('/form/productivity', function (req, res) {
 
//     //let Region = req.body.Region;
//     var delivery = {product = '1', sub = '2', customer = '3', qty = '4'};
//     var freightIn = {product = '1', supplier = '2', freightIn = '3'};
//     var freightOut = {product = '1', customer = '2', freightOut = '3'};
//     // if (!task) {
//     //     return res.status(400).send({ error:true, message: 'Please provide task' });
//     // }
 
//     var query = connection.execSql('INSERT INTO PLANT_KPI SET ?', safety, function (error, results, fields) {
//         if (error) throw error;
//         // Neat!
//       });
//       console.log(query.sql);
// });

// app.get('/review', function (req, res) {

//     var cache = [];
//     var request = new Request(
//         "SELECT Create_DATE, Plant_Name, Region FROM Plant",
//         function (err, rowCount, rows) {
//             if (rowCount == 0) {
//                 console.log("empty");
//             }
//             console.log(rowCount + ' row(s) returned');
//             //console.log(rows);
//         }
//     );

//     request.on('row', function (columns) {
//         columns.forEach(function (column) {
//             console.log("%s\t%s", column.metadata.colName, column.value);
//             //res.send(request);
//         });
//     });
//     connection.execSql(request);
//     res.send("Server Root");
    
// });

// app.get('/review/customers', function (req, res) {

//     var cache = [];
//     var request = new Request(
//         "SELECT CUST_NAME from Customer;",
//         function (err, rowCount, rows) {
//             if (rowCount == 0) {
//                 console.log("empty");
//             }
//             console.log(rowCount + ' row(s) returned');
//         }
//     );

//     request.on('row', function (columns) {
//         columns.forEach(function (column) {
//             console.log("%s\t%s", column.metadata.colName, column.value);
//             //res.send(column.metadata.colName, column.value);
//         });
//     });
//     connection.execSql(request);
//     res.send("Server Root");
    
// });

// // app.get('/review/suppliers', function (req, res) {

// //     var cache = [];
// //     var request = new Request(
// //         "SELECT SUPPLIER_NAME from SUPPLIER;",
// //         function (err, rowCount, rows) {
// //             if (rowCount == 0) {
// //                 console.log("empty");
// //             }
// //             console.log(rowCount + ' row(s) returned');
// //         }
// //     );

// //     //console.log(request);
// //     request.on('row', function (columns) {
// //         //console.log(column);
// //         columns.forEach(function (column) {
// //             console.log("%s\t%s", column.metadata.colName, column.value);
            
// //         });
// //     });
// //     connection.execSql(request);
// //     res.send("Server Root");
    
// // });

// app.get('/review/prod', function (req, res) {

//     var cache = [];
//     var request = new Request(
//         "SELECT PROD_TYPE, SUB_PROD from PRODUCT;",
//         function (err, rowCount, rows) {
//             if (rowCount == 0) {
//                 console.log("empty");
//             }
//             console.log(rowCount + ' row(s) returned');
//         }
//     );

//     request.on('row', function (columns) {
//         columns.forEach(function (column) {
//             console.log("%s\t%s", column.metadata.colName, column.value);
//             //res.send(column.metadata.colName, column.value);
//         });
//     });
//     connection.execSql(request);
//     res.send("Server Root");
    
// });

// app.get('/review/safety', function (req, res) {

//    // var cache = [];
//     var request = new Request(
//         "SELECT LOST_TIME_INCIDENT, TOT_LOST_TIME_DAYS_MON, TOT_EMP_FIRST_DAY_MON, TOT_EMP_LAST_DAY_MON FROM PLANT_KPI;",
//         function (err, rowCount, rows) {
//             if (rowCount == 0) {
//                 console.log("empty");
//             }
//             console.log(rowCount + ' row(s) returned');
            
//         }
//     );

//     request.on('row', function (columns) {
//         columns.forEach(function (column) {
//             console.log("%s\t%s", column.metadata.colName, column.value);
//             //res.send(column.metadata.colName, column.value);
//         });
//     });
//     connection.execSql(request);
//     res.send("Server Root");
    
// });

// app.get('/review/revenue', function (req, res) {

//     var cache = [];
//     var request = new Request(
//         "select REVENUE_MON from Product_KPI",
//         function (err, rowCount, rows) {
//             if (rowCount == 0) {
//                 console.log("empty");
//             }
//             console.log(rowCount + ' row(s) returned');
//         }
//     );

//     connection.execSql(request);

//     request.on('row', function (columns) {
//         columns.forEach(function (column) {
//             console.log("%s\t%s", column.metadata.colName, column.value);
//             //res.send(column.metadata.colName, column.value);
//         });
//     });

//     res.send("Server Root");

    
// });