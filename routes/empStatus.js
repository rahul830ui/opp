var express = require('express');
var router = express.Router();
var sql = require("mssql");

// config for your database
var config = {
    user: 'sa',
    password: 'aP99adr%%M',
    server: 'QRIITSQLDBW01\\QRIITSQLDB',
    database: 'QRIREPORTING',
    options: {
        encrypt : false
    }
};



router.get('/opdb/getEmployeeStatus', function (req, res) {

    console.log("the config of empstatus is",config);
    // connect to your database
    sql.close();
    sql.connect(config, function (err) {

        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();

        //console.log("the resquestr is ", request)

        // query to the database and get the data
        request.query(" select * from Accounting.vw_EmployeeStatus", function (err, recordset) {

            if (err) console.log(err)
            // console.log("the recordset is", recordset);
            // send data as a response
            res.send(recordset.recordsets[0]);
        });

    });



});

module.exports = router;


