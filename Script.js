const stations = {
  "Bangalore City": { fare: 250, time: "06:00, 10:30, 15:00, 20:00" },
  "Coimbatore": { fare: 220, time: "07:00, 12:00, 18:00, 23:00" },
  "Madurai": { fare: 300, time: "05:00, 11:00, 17:00, 22:00" },
  "Trivandrum": { fare: 420, time: "08:00, 14:00, 19:30, 23:45" },
  "Hyderabad": { fare: 350, time: "06:15, 13:00, 19:00, 23:30" },
  "Salem": { fare: 180, time: "05:30, 09:00, 14:00, 21:00" },
  "Erode": { fare: 200, time: "06:00, 11:00, 16:00, 22:30" },
  "Tirunelveli": { fare: 380, time: "04:45, 13:00, 19:30, 23:15" },
  "Tirupati": { fare: 150, time: "05:15, 10:30, 15:45, 20:15" },
  "Vijayawada": { fare: 320, time: "06:30, 12:00, 18:15, 23:40" },
  "Visakhapatnam": { fare: 480, time: "07:00, 13:15, 19:00, 23:50" },
  "Mysore": { fare: 270, time: "05:45, 11:00, 17:30, 22:00" },
  "Kannur": { fare: 400, time: "06:30, 13:00, 19:15, 23:10" },
  "Kochi": { fare: 350, time: "07:15, 12:45, 18:20, 23:30" },
  "Puducherry": { fare: 100, time: "06:45, 09:30, 14:00, 20:00" }
};

function generatePNR() {
  return Math.floor(1000000000 + Math.random() * 9000000000);
}
function generateTicketNo() {
  return "MAS" + Math.floor(10000 + Math.random() * 90000);
}

function issueTicket() {
  let fromStation = "MGR Chennai Central (MAS)";
  let toStation = document.getElementById("toStation").value;

  if (!toStation) {
    alert("Please select a destination station!");
    return;
  }

  let details = stations[toStation];
  let pnr = generatePNR();
  let ticketNo = generateTicketNo();

  let ticket = `
    <div class="title">INDIAN RAILWAYS</div>
    <hr>
    <p><b>Ticket No:</b> ${ticketNo}</p>
    <p><b>PNR:</b> ${pnr}</p>
    <p><b>From:</b> ${fromStation}</p>
    <p><b>To:</b> ${toStation}</p>
    <p><b>Class:</b> Second Sitting (2S)</p>
    <p><b>Fare:</b> ₹${details.fare}</p>
    <p><b>Next Trains:</b> ${details.time}</p>
    <p class="small">Issued at: ${new Date().toLocaleString()}</p>
    <hr>
    <div class="small" style="text-align:center;">Have a safe journey 🚆</div>
  `;
  document.getElementById("ticket").innerHTML = ticket;
}

// 🎫 Download as PDF (using browser print)
function downloadTicket() {
  let printContents = document.getElementById("ticket").innerHTML;
  let w = window.open("", "", "width=400,height=600");
  w.document.write("<html><head><title>Ticket</title></head><body>" + printContents + "</body></html>");
  w.document.close();
  w.print();
}

// 🚶 Passenger Queue (Random names)
const names = ["Ravi", "Priya", "Kumar", "Anitha", "Suresh", "Lakshmi", "Arun", "Deepa", "Vijay", "Meena"];
function randomPassenger() {
  return names[Math.floor(Math.random() * names.length)];
}
function generateQueue() {
  let queueList = document.getElementById("queue");
  queueList.innerHTML = "";
  for (let i = 0; i < 5; i++) {
    let li = document.createElement("li");
    li.textContent = randomPassenger() + " waiting for ticket";
    queueList.appendChild(li);
  }
}
setInterval(generateQueue, 5000);
generateQueue();

// Load stations into dropdown
window.onload = () => {
  let select = document.getElementById("toStation");
  Object.keys(stations).forEach(st => {
    let option = document.createElement("option");
    option.value = st;
    option.textContent = st;
    select.appendChild(option);
  });
};
