export const differentDay = (startDate : Date, endDate : Date) => {
    // Here are the two dates to compare
// var date1 = '2024-04-04';
// var date2 = '2024-04-05';

// First we split the values to arrays date1[0] is the year, [1] the month and [2] the day
const date1 = startDate.toLocaleDateString().split('/');
const date2 = endDate.toLocaleDateString().split('/');

// Now we convert the array to a Date object, which has several helpful methods
const converDate1 = new Date(Number(date1[2]), Number(date1[1]), Number(date1[0]));
const convertDate2 = new Date(Number(date2[2]), Number(date2[1]), Number(date2[0]));

// We use the getTime() method and get the unixtime (in milliseconds, but we want seconds, therefore we divide it through 1000)
const date1_unixtime = parseInt(String(converDate1.getTime() / 1000));
const date2_unixtime = parseInt(String(convertDate2.getTime() / 1000));

// This is the calculated difference in seconds
const timeDifference = date2_unixtime - date1_unixtime;

// in Hours
const timeDifferenceInHours = timeDifference / 60 / 60;


// and finaly, in days :)
const timeDifferenceInDays = timeDifferenceInHours  / 24;
return timeDifferenceInDays
}
