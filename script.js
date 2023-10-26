function submitForm(event) {
    event.preventDefault();

    // You can use JavaScript to send the form data to the server here.
    // For this example, let's just display a thank you message.
    const name = document.getElementById("name").value;
    const partySize = document.getElementById("party-size").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    alert(`Thank you, ${name}! Your reservation for ${partySize} guests on ${date} at ${time} has been received.`);
}
