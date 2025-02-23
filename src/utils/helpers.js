

function formatDate(date) {
    let day = date.getDate(); // Get the day (1-31)
    let month = date.getMonth() + 1; // Get the month (0-11, so add 1)
    let year = date.getFullYear(); // Get the year

    // Add leading zero to day and month if needed
    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;

    // Return the formatted date string
    return `${day}.${month}.${year}`;
}


export function addDays(date, days) {
    days -= 1;
    let result = new Date(date); // Create a new Date object based on the original
    result.setDate(result.getDate() + days); // Add the number of days
    let formatedDate = formatDate(result);
    return formatedDate;
}


export function addMonths(date, months) {
    let result = new Date(date); // Create a new Date object based on the original
    result.setMonth(result.getMonth() + months); // Add the number of months
    let formatedDate = formatDate(result);
    return formatedDate;
}

export function addYears(date, years) {
    let result = new Date(date); // Create a new Date object based on the original
    result.setFullYear(result.getFullYear() + years); // Add the number of years
    
    // Find the last Saturday before this date
    while (result.getDay() !== 6) { // 6 represents Saturday
        result.setDate(result.getDate() - 1);
    }

    let formatedDate = formatDate(result);
    return formatedDate;
}
  
  
  