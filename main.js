function createTicket() {

    const fullNameValue = document.getElementById('fullName').value;
    const distanceValue = parseInt(document.getElementById('distance').value);
    const age = document.getElementById('fasciaEta').value;
    const priceOneKilometer = 0.21;
    let priceKilometer = distanceValue * priceOneKilometer;
    const under18sale = priceKilometer * 0.20; 
    const over65sale = priceKilometer * 0.40; 
    if (age == 'noSale') {
        priceKilometer;
    } else if (age == 'under18'){
        priceKilometer -= under18sale;
    } else if (age == 'over65') {
        priceKilometer -=over65sale;
    }
    const ticket = `Nome e cognome: ${fullNameValue}, Costo biglietto: ${priceKilometer.toFixed(2)}`;
    const ticketOutput = document.getElementById('ticketOutput');
    ticketOutput.textContent = ticket;
}

function deleteTicket() {
    location.reload();
}