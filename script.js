function bookTicket() {
    let name = document.getElementById("name").value;
    let event = document.getElementById("event").value;
    let seats = document.getElementById("seats").value;

    if (name === "" || seats === "") {
        alert("Please fill all fields");
        return;
    }

    document.getElementById("result").innerHTML =
        `✅ ${name}, your booking for ${event} (${seats} seats) is confirmed!`;
}
