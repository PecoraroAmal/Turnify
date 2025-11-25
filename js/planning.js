//abbiamo:

// ---------- Ruoli ----------

// Ruoli disponibili

// Ruoli mostrati con colore, livello e requisiti min/max.

// 4 ruoli

// Store Delivery Mattina
// Livello 1 · Min 1 · Max 2

// Store Delivery Pomeriggio
// Livello 1 · Min 1 · Max 2

// Sniper
// Livello 2 · Min 1 · Max 1

// Carrista
// Livello 3 · Min 1 · Max 2

// ---------- Ruoli ----------


// ---------- Dipendenti ----------

// Dipendenti registrati

// Elenco con ruoli, ore settimanali, esperienza e indisponibilità.

// 10 dipendenti


// Alessio Moretti
// Esperienza 1 · 40h/settimana · 8h/giorno
// Ruoli: Store Delivery Mattina Store Delivery Pomeriggio Sniper Carrista

// Beatrice Villa
// Esperienza 2 · 40h/settimana · 8h/giorno
// Ruoli: Store Delivery Mattina Store Delivery Pomeriggio Sniper Carrista

// Carlo Gentile
// Esperienza 3 · 40h/settimana · 8h/giorno
// Ruoli: Store Delivery Mattina Store Delivery Pomeriggio Sniper Carrista

// Davide Conti
// Esperienza 4 · 40h/settimana · 8h/giorno
// Ruoli: Store Delivery Mattina Store Delivery Pomeriggio Sniper Carrista

// Elena Fabbri
// Esperienza 5 · 40h/settimana · 8h/giorno
// Ruoli: Store Delivery Mattina Store Delivery Pomeriggio Sniper

// Fabio Leone
// Esperienza 1 · 40h/settimana · 8h/giorno
// Ruoli: Store Delivery Mattina Store Delivery Pomeriggio Sniper

// Giulia Serra
// Esperienza 2 · 40h/settimana · 8h/giorno
// Ruoli: Store Delivery Mattina Store Delivery Pomeriggio

// Hamed Saidi
// Esperienza 3 · 40h/settimana · 8h/giorno
// Ruoli: Store Delivery Mattina Store Delivery Pomeriggio

// Irene Bellini
// Esperienza 4 · 40h/settimana · 8h/giorno
// Ruoli: Store Delivery Mattina Store Delivery Pomeriggio

// Jacopo Ferri
// Esperienza 5 · 40h/settimana · 8h/giorno
// Ruoli: Store Delivery Mattina Store Delivery Pomeriggio

// ---------- Dipendenti ----------


// ---------- Turni ----------

// Turni configurati

// Lista con orari, durata e ruoli richiesti per ogni turno.

// 2 turni

// Mattina
// 06:00 - 14:30
// Ruoli: Sniper, Store Delivery Mattina, Carrista

// Pomeriggio
// 13:30 - 22:00
// Ruoli: Sniper, Store Delivery Pomeriggio, Carrista

// ---------- Turni ----------

// ---------- Vincoli ----------

// Vincoli globali

// Si applicano a tutti i dipendenti salvo override specifici.

// Riposo minimo (ore)
// 11
// Ore max giornaliere (default)
// 8
// Ore dopo cui fare pausa
// 6
// Durata pausa (minuti)
// 30

// ---------- Vincoli ----------

// da questo dobbiamo creare il planning, lo faremo seguendo un algoritmo, quello qui sotto descritto:

// 1) Vediamo quali turni ci sono e che ruoli servono?
// 	- ogni giorno qui abbiamo due turni: mattina e pomeriggio
// 	- mattina ha Sniper, Store Delivery Mattina, Carrista
// 	- pomeriggio ha Sniper, Store Delivery Pomeriggio, Carrista

// 2) Quante persone servono per ruolo ogni turno?
// 	- vediamo qui che abbiamo 4 ruoli tutti hanno come minimo 1 persona, e massimo 2 persone per Store Delivery Mattina, Store Delivery Pomeriggio e per Carrista

// 3) Analisi dati
// 	- andiamo a vedere i dipendenti che abbiamo -> notiamo che 4 persone (Alessio Moretti, Beatrice Villa, Carlo Gentile, Davide Conti) sanno fare tutto mentre 2 persone ( Elena Fabbri, Fabio Leone) sanno fare Store Delivery Mattina, Store Delivery Pomeriggio e Sniper; le 4 persone rimanenti: Giulia Serra, Hamed Saidi, Irene Bellini e Jacopo Ferri sanno fare Store Delivery Mattina e Store Delivery Pomeriggio
// 	- vediamo quante ore fanno -> tutti fanno 40h/settimana 8h/giorno quindi sono 5 giorni a settimana
// 	- esperienza -> più è alta più ha esperienza, quindi uno che ha esperienza pari a 1 non sa fare benissimo le cose ha bisogno di uno che ha esperienza 2 che lo aiuti
// 	- leggiamo i vincoli
// 4) Distribuzione delle persone
// 	- prima cosa mettiamo le persone che sono le uniche a saper fare un determinato lavoro e con esperienza più alta per primi:
// 		- partiamo da Alessio Moretti, Beatrice Villa, Carlo Gentile, Davide Conti che sanno fare tutto, li mettiamo nell'unico ruolo che solo loro sanno fare: Carrista
// 			- tutti fanno 5 giorni, partiamo quindi da domenica turno mattina, estraiamo 2 a caso dei 4 e li mettiamo alternati un giorno uno e un giorno l'altro alla mattina e ci salviamo che fanno la mattina. gli altri due faranno un giorno si e un giorno no il pomeriggio alternandosi, salviamo quindi che fanno il pomeriggio. In questo modo abbiamo già il numero minimo di persone per coprire il ruolo tutti i giorni della settimana
// 	- escludiamo i quattro di prima abbiamo Elena Fabbri, Fabio Leone per sniper, mettiamo uno alla mattina e uno al pomeriggio, però possono fare solo 5 giorni, estraiamo i giorni a caso e li mettiamo, i giorni estratti non possono essere riestratti per queste due persone, non è detto che lavorino lo stesso giorno, abbiamo dei turni scoperti! per fortuna abbiamo Alessio Moretti, Beatrice Villa, Carlo Gentile, Davide Conti che devono fare ancora delle ore per arrivare al numero di ore settimanali, estraiamo quindi a caso nei turni le persone che possono lavorare quel giorno (quindi mattina 2 persone e pomeriggio 2 persone tra cui scegliere) e le mettiamo li le altre aspettano
// 	- ora ci rimangono solo Giulia Serra, Hamed Saidi, Irene Bellini e Jacopo Ferri, estraiamo quindi 2 persone per la mattina e due per il pomeriggio, avremo quindi 2 persone che lavorano 5 giorni per coprire il turno della mattina, e due persone che lavorano 5 giorni per coprire il turno del pomeriggio, e le alterniamo, in questo caso dato che non possono fare altre cose capiteranno giorni in cui lavoreranno assieme
// 	- se mancano ore da fare per esempio ad alcuni dei carristi verranno assegnati nel ruolo con maggiore numero di persone max, in caso di pareggio si estrae, deve essere dello stesso turno della persona

// Implementazione del codice

const DAYS = ['Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì'];

const SHIFTS = {
  Mattina: { start: '06:00', end: '14:30', roles: ['Sniper', 'Store Delivery Mattina', 'Carrista'] },
  Pomeriggio: { start: '13:30', end: '22:00', roles: ['Sniper', 'Store Delivery Pomeriggio', 'Carrista'] }
};

const ROLES = {
  'Store Delivery Mattina': { level: 1, min: 1, max: 1 },
  'Store Delivery Pomeriggio': { level: 1, min: 1, max: 1 },
  'Sniper': { level: 2, min: 1, max: 1 },
  'Carrista': { level: 3, min: 1, max: 1 }
};

const EMPLOYEES_DATA = [
  { name: 'Alessio Moretti', experience: 1, hoursWeek: 40, hoursDay: 8, roles: ['Store Delivery Mattina', 'Store Delivery Pomeriggio', 'Sniper', 'Carrista'] },
  { name: 'Beatrice Villa', experience: 2, hoursWeek: 40, hoursDay: 8, roles: ['Store Delivery Mattina', 'Store Delivery Pomeriggio', 'Sniper', 'Carrista'] },
  { name: 'Carlo Gentile', experience: 3, hoursWeek: 40, hoursDay: 8, roles: ['Store Delivery Mattina', 'Store Delivery Pomeriggio', 'Sniper', 'Carrista'] },
  { name: 'Davide Conti', experience: 4, hoursWeek: 40, hoursDay: 8, roles: ['Store Delivery Mattina', 'Store Delivery Pomeriggio', 'Sniper', 'Carrista'] },
  { name: 'Elena Fabbri', experience: 5, hoursWeek: 40, hoursDay: 8, roles: ['Store Delivery Mattina', 'Store Delivery Pomeriggio', 'Sniper'] },
  { name: 'Fabio Leone', experience: 1, hoursWeek: 40, hoursDay: 8, roles: ['Store Delivery Mattina', 'Store Delivery Pomeriggio', 'Sniper'] },
  { name: 'Giulia Serra', experience: 2, hoursWeek: 40, hoursDay: 8, roles: ['Store Delivery Mattina', 'Store Delivery Pomeriggio'] },
  { name: 'Hamed Saidi', experience: 3, hoursWeek: 40, hoursDay: 8, roles: ['Store Delivery Mattina', 'Store Delivery Pomeriggio'] },
  { name: 'Irene Bellini', experience: 4, hoursWeek: 40, hoursDay: 8, roles: ['Store Delivery Mattina', 'Store Delivery Pomeriggio'] },
  { name: 'Jacopo Ferri', experience: 5, hoursWeek: 40, hoursDay: 8, roles: ['Store Delivery Mattina', 'Store Delivery Pomeriggio'] }
];

const CONSTRAINTS = {
  minRest: 11,
  maxDaily: 8,
  pauseAfter: 6,
  pauseDuration: 30
};

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function generatePlanning() {
  const employees = EMPLOYEES_DATA.map(e => ({ ...e, schedule: [], hoursUsed: 0 }));

  const planning = {};
  DAYS.forEach(day => {
    planning[day] = {
      Mattina: { Sniper: [], 'Store Delivery Mattina': [], Carrista: [] },
      Pomeriggio: { Sniper: [], 'Store Delivery Pomeriggio': [], Carrista: [] }
    };
  });

  function assign(employee, day, shift, role) {
    if (employee.hoursUsed + 8 > employee.hoursWeek) return false;
    if (employee.schedule.some(s => s.day === day)) return false; // already working that day
    employee.schedule.push({ day, shift, role });
    employee.hoursUsed += 8;
    planning[day][shift][role].push(employee.name);
    return true;
  }

  // Group employees
  const allRounders = employees.slice(0, 4);
  const sniperHelpers = employees.slice(4, 6);
  const deliveryOnly = employees.slice(6, 10);

  // Carrista assignment
  const shuffledAll = shuffle(allRounders.slice());
  const morningCarristi = shuffledAll.slice(0, 2);
  const afternoonCarristi = shuffledAll.slice(2, 4);

  // Morning Carristi: assign to all days
  DAYS.forEach(day => {
    morningCarristi.forEach(emp => assign(emp, day, 'Mattina', 'Carrista'));
  });

  // Afternoon Carristi: assign to all days
  DAYS.forEach(day => {
    afternoonCarristi.forEach(emp => assign(emp, day, 'Pomeriggio', 'Carrista'));
  });

  // Sniper assignment
  const elena = sniperHelpers[0];
  const fabio = sniperHelpers[1];
  DAYS.forEach(day => {
    assign(elena, day, 'Mattina', 'Sniper');
    assign(fabio, day, 'Pomeriggio', 'Sniper');
  });

  // Delivery only
  const shuffledDelivery = shuffle(deliveryOnly.slice());
  const morningDelivery = shuffledDelivery.slice(0, 2);
  const afternoonDelivery = shuffledDelivery.slice(2, 4);

  DAYS.forEach(day => {
    morningDelivery.forEach(emp => assign(emp, day, 'Mattina', 'Store Delivery Mattina'));
    afternoonDelivery.forEach(emp => assign(emp, day, 'Pomeriggio', 'Store Delivery Pomeriggio'));
  });

  return { planning, employees };
}

const { planning, employees } = generatePlanning();

// Pass to index.js
window.planning = planning;
window.employees = employees;
window.constraints = CONSTRAINTS;

