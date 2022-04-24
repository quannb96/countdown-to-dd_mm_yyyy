const countdown = document.getElementById("countdown");

countdown.addEventListener("click", () => {
    let eventInput = document.getElementById("event");
    let eventValue = eventInput.value;
    let dtInput = document.getElementById("date");
    let dtValue = dtInput.value;
    let message = document.getElementById("message").firstChild;

    if (eventValue.length == 0 || dtValue.length == 0) {
        message.nodeValue = "Please enter both a name and a day.";
        return;
    }
    if (dtValue.indexOf("/") == -1) {
        message.nodeValue = "Please enter the date in MM/DD/YYYY format!";
        return;
    }
    let year = dtValue.substring(dtValue.length - 4);
    if (isNaN(year)) {
        message.nodeValue = "Please enter the date in MM/DD/YYYY format.";
        return;
    }

    let date = new Date(dtValue);
    if (date == "Invalid Date") {
        message.nodeValue = "Please enter the date in MM/DD/YYYY format!";
        return;
    }
// calculation days
    let today = new Date();
    let oneDay = 24*60*60*1000;
    let days = (date.getTime() - today.getTime()) / oneDay;
    days = Math.ceil(days);

    if (days == 0) {
        // message.nodeValue = "Hooray! Today is ".concat(eventValue.toLowerCase(), "!\n(", date.toDateString(), ")");
        message.nodeValue = "Hooray! Today is " + eventValue + "!" + date.toDateString();
    }
    if (days < 0) {
        eventValue = eventValue.substring(0,1).toUpperCase() + eventValue.substring(1);
        //  message.nodeValue = eventValue.concat(" happened ", Math.abs(days)," day(s) ago. \n(", date.toDateString(), ")");
         message.nodeValue = eventValue + " day(s) ago. " + date.toDateString();
    }
    if (days > 0) {
        // message.nodeValue = days.toString().concat(" day(s) until ", eventValue.toLowerCase(),"!\n(", date.toDateString(), ")");
         message.nodeValue = days.toString() + " until " + eventValue + "! " + date.toDateString();
    }
});