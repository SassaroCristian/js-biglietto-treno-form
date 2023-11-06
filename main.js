// Funzione per creare un biglietto del treno
function createTicket() {
    // Estrai i valori dai campi del modulo HTML
    const fullNameValue = document.getElementById('fullName').value;
    const distanceValue = parseInt(document.getElementById('distance').value);
    const age = document.getElementById('age').value;

    // Calcola il costo del biglietto basato sulla distanza e il costo per chilometro
    const priceOneKilometer = 0.21;
    let priceKilometer = distanceValue * priceOneKilometer;
    const under18sale = priceKilometer * 0.20;
    const over65sale = priceKilometer * 0.40;

    // Applica eventuali sconti in base all'età
    if (age == 'noSale') {
        // Nessuno sconto, il prezzo rimane invariato
        priceKilometer;
    } else if (age == 'under18') {
        // Sconto del 20% per chi è sotto i 18 anni
        priceKilometer -= under18sale;
    } else if (age == 'over65') {
        // Sconto del 40% per chi è sopra i 65 anni
        priceKilometer -= over65sale;
    }

    // Creazione del testo del biglietto
    const ticket = `Nome e cognome: ${fullNameValue}, Costo biglietto: ${priceKilometer.toFixed(2)}`;

    // Mostra il biglietto nella pagina HTML
    const ticketOutput = document.getElementById('ticketOutput');
    ticketOutput.textContent = ticket;
}

// Funzione per cancellare il biglietto e ricaricare la pagina
function deleteTicket() {
    location.reload();
}
