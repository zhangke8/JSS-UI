var express = require('express');
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

// getting data from DB
app.get('/login', function (req, res) {
    //   logger.info("Server Root");
    var request = new Request(
        "SELECT User_NAME FROM \"User\"WHERE USER_NAME = 'Ishmeet' AND Password = 'ish1234'",
        function (err, rowCount, rows) {
            if (rowCount == 0) {
                console.log("empty");
            }
            console.log(rowCount + ' row(s) returned');
        }
    );

    request.on('row', function (columns) {
        columns.forEach(function (column) {
            console.log("%s\t%s", column.metadata.colName, column.value);
            // res.send(column.metadata.colName, column.value);
        });
    });
    connection.execSql(request);
    res.send("Server Root");
});

app.post('/login', function (req, res) {
    console.log("body " + req.body.username + " AND Password = " + req.body.password);
    var request = new Request(
        "SELECT USER_NAME FROM \"User\" WHERE USER_NAME = '" + req.body.username + "' AND Password = '" + req.body.password + "'",//USER_NAME == req.body.username AND Password == req.body.password',
        function (err, rowCount, rows) {
            if (err) {
                res.send(err);
            }
            else {
                console.log("post " + rowCount + ' row(s) returned');
                console.log(rowCount);
                res.status(200).send("hi")
            }

        }
    );
    request.on('row', function (columns) {
        columns.forEach(function (column) {
            console.log("%s\t%s", column.metadata.colName, column.value);
        });
    });
    connection.execSql(request);
})

app.post('/form/plant', function (req, res) {
 
    //let Region = req.body.Region;
    var plants  = {Plant_Name: 'ABC', Region: 'Michigan'}; 
    
    // if (!task) {
    //     return res.status(400).send({ error:true, message: 'Please provide task' });
    // }
 
    var query = connection.execSql('INSERT INTO Plant SET ?', plants, function (error, results, fields) {
        if (error) throw error;
        // Neat!
      });
      console.log(query.sql);
});

app.post('/form/safety', function (req, res) {
 
    //let Region = req.body.Region;
    var safety  = {LOST_TIME_INCIDENT: '1', TOT_LOST_TIME_DAYS_MON: '2',TOT_EMP_FIRST_DAY_MON: '3' , TOT_EMP_LAST_DAY_MON: '4', EMP_LEFT_MON: '5', Cogs: '6', Mon_End_Inv_Local_Curr: '7', Pre_Mon_End_Inv_Local_Curr: '8'}; 
     
    
    // if (!task) {
    //     return res.status(400).send({ error:true, message: 'Please provide task' });
    // }
 
    var query = connection.execSql('INSERT INTO PLANT_KPI SET ?', safety, function (error, results, fields) {
        if (error) throw error;
        // Neat!
      });
      console.log(query.sql);
});


app.get('/review', function (req, res) {

    var cache = [];
    var request = new Request(
        "SELECT Create_DATE, Plant_Name, Region FROM Plant",
        function (err, rowCount, rows) {
            if (rowCount == 0) {
                console.log("empty");
            }
            console.log(rowCount + ' row(s) returned');
            //console.log(rows);
        }
    );

    request.on('row', function (columns) {
        columns.forEach(function (column) {
            console.log("%s\t%s", column.metadata.colName, column.value);
            //res.send(request);
        });
    });
    connection.execSql(request);
    res.send("Server Root");
    
});

app.get('/review/customers', function (req, res) {

    var cache = [];
    var request = new Request(
        "SELECT CUST_NAME from Customer;",
        function (err, rowCount, rows) {
            if (rowCount == 0) {
                console.log("empty");
            }
            console.log(rowCount + ' row(s) returned');
        }
    );

    request.on('row', function (columns) {
        columns.forEach(function (column) {
            console.log("%s\t%s", column.metadata.colName, column.value);
            //res.send(column.metadata.colName, column.value);
        });
    });
    connection.execSql(request);
    res.send("Server Root");
    
});

app.get('/review/suppliers', function (req, res) {

    var cache = [];
    var request = new Request(
        "SELECT SUPPLIER_NAME from SUPPLIER;",
        function (err, rowCount, rows) {
            if (rowCount == 0) {
                console.log("empty");
            }
            console.log(rowCount + ' row(s) returned');
        }
    );

    //console.log(request);
    request.on('row', function (columns) {
        //console.log(column);
        columns.forEach(function (column) {
            console.log("%s\t%s", column.metadata.colName, column.value);
            
        });
    });
    connection.execSql(request);
    res.send("Server Root");
    
});

app.get('/review/prod', function (req, res) {

    var cache = [];
    var request = new Request(
        "SELECT PROD_TYPE, SUB_PROD from PRODUCT;",
        function (err, rowCount, rows) {
            if (rowCount == 0) {
                console.log("empty");
            }
            console.log(rowCount + ' row(s) returned');
        }
    );

    request.on('row', function (columns) {
        columns.forEach(function (column) {
            console.log("%s\t%s", column.metadata.colName, column.value);
            //res.send(column.metadata.colName, column.value);
        });
    });
    connection.execSql(request);
    res.send("Server Root");
    
});

app.get('/review/safety', function (req, res) {

   // var cache = [];
    var request = new Request(
        "SELECT LOST_TIME_INCIDENT, TOT_LOST_TIME_DAYS_MON, TOT_EMP_FIRST_DAY_MON, TOT_EMP_LAST_DAY_MON, EMP_LEFT_MON, Cogs, Mon_End_Inv_Local_Curr, Pre_Mon_End_Inv_Local_Curr FROM PLANT_KPI;",
        function (err, rowCount, rows) {
            if (rowCount == 0) {
                console.log("empty");
            }
            console.log(rowCount + ' row(s) returned');
            
        }
    );

    request.on('row', function (columns) {
        columns.forEach(function (column) {
            console.log("%s\t%s", column.metadata.colName, column.value);
            //res.send(column.metadata.colName, column.value);
        });
    });
    connection.execSql(request);
    res.send("Server Root");
    
});

app.get('/review/revenue', function (req, res) {

    var cache = [];
    var request = new Request(
        "select REVENUE_MON, Tot_Amt_Paid from SUPPLIER_KPI",
        function (err, rowCount, rows) {
            if (rowCount == 0) {
                console.log("empty");
            }
            console.log(rowCount + ' row(s) returned');
        }
    );

   
    connection.execSql(request);

    request.on('row', function (columns) {
        columns.forEach(function (column) {
            console.log("%s\t%s", column.metadata.colName, column.value);
            //res.send(column.metadata.colName, column.value);
        });
    });

    res.send("Server Root");

    
});

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
        // return data
    });

    // request.end(){
    //     res.send(result);
    // }
    func()
    async function func(){
        connection.execSql(request);
        console.log("done quary");
        res.send(result);
    }

    connection.execSql(request);
    res.send("Server Root");
});