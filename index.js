/* Your Code Here */
function createEmployeeRecord(array) {
    let employeeRecord = {
        firstName : array[0],
        familyName : array[1],
        title : array[2],
        payPerHour : array[3],
        timeInEvents : [],
        timeOutEvents : []
    }
    return employeeRecord
}

function createEmployeeRecords(arrayedArrays) {
    let employeeRecords = arrayedArrays.map(createEmployeeRecord)
    return employeeRecords
}

function createTimeInEvent(dateStamp) {
   let [YMD, time] = dateStamp.split(" ")
   this.timeInEvents.push({
    type : "TimeIn",
    hour : parseInt(time, 10),
    date : YMD
   })
   return this;
}

function createTimeOutEvent(dateStamp) {
   let [YMD, time] = dateStamp.split(" ")
   this.timeOutEvents.push({
    type : "TimeOut",
    hour : parseInt(time, 10),
    date : YMD
   })
   return this
}

function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(event => event.date === date);
    const timeOut = this.timeOutEvents.find(event => event.date === date);
    return (timeOut.hour - timeIn.hour) / 100;
}

// Calculates wages earned on a given date
function wagesEarnedOnDate(date) {
    const hoursWorked = hoursWorkedOnDate.call(this, date);
    return hoursWorked * this.payPerHour;
}

// Find an employee by first name from an array of records
function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(record => record.firstName === firstName);
}

// Calculate payroll for an array of employee records
function calculatePayroll(employeeRecordsArray) {
    return employeeRecordsArray.reduce((total, record) => total + allWagesFor.call(record), 0);
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!npm test

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

