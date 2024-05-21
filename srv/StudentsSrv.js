const cds = require('@sap/cds');

// Implementation of SQL Queries in SAP CAP Node.js to select,add,delete,update data in HANA DB Table 
//This example is implemented with some static data which needed to be changed every time just for the syntax purpose 

module.exports = async srv =>{


    //SQL Query SELECT in Node.js CAP
    const readData = await SELECT.from('STUDENTS_DETAILS_STUDENTS');
    //filtering the Data using column "GRADE" from "STUDENTS_DETAILS_STUDENTS" HANA DB Table
    const filterData = readData.filter(col => col.GRADE === "A");
    console.log(filterData);


    //Static Data Object structure to insert data into HANA DB
    const insertObj = {
        "StuId" : "00R",
        "StudentName" : "Chum",
        "Address" : "uk",
        "Grade" : "A"
    }


    //INSERT QUERY implementation in SAP CAP Node.js to insert data into HANA DB Table
    const insertQuery = await INSERT.into('STUDENTS_DETAILS_STUDENTS').entries(insertObj);
    console.log(insertQuery);

    //UPDATE QUERY implementation in SAP CAP Node.js to manipulate data based on Conditions in HANA DB Table
    const updateQuery = await UPDATE('STUDENTS_DETAILS_STUDENTS').with({Grade : "A"}).where({StuId:"00D"});
    console.log(updateQuery);
    
    // DELETE QUERY implementation in SAP CAP Node.js to delete particular row in HANA DB table
    const delQuery = await DELETE.from('STUDENTS_DETAILS_STUDENTS').where({Grade:"F"});
    console.log(delQuery);
}

