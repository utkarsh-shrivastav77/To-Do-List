
module.exports.getDate = getdate
function getdate()
{
    let today = new Date()
    let dayWeek = today.getDay()
    // const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    // var day = weekday[dayWeek]
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let day = today.toLocaleDateString("en-US",options)

    return day
}

module.exports.getday = getday

function getday()
{
    let today = new Date()
    let dayWeek = today.getDay()
    // const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    // var day = weekday[dayWeek]
    let options = {
        weekday: "long",
    };

    let day = today.toLocaleDateString("en-US",options)

    return day
}

console.log(module.exports)