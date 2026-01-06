const date = new Date(); // Full: 2025-01-12T14:30:45.123Z

// ===== DATE ONLY =====
// 1. YYYY-MM-DD format
const dateOnly = date.toISOString().split("T")[0];
console.log(dateOnly); // "2025-01-12"

// 2. Using date methods 
const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, "0");
const day = String(date.getDate()).padStart(2, "0");
const formatted = `${year}-${month}-${day}`;
console.log(formatted); // "2025-01-12"

// ===== TIME ONLY =====
// 1. HH:MM:SS format
const timeOnly = date.toISOString().split("T")[1].split(".")[0];
console.log(timeOnly); // "14:30:45"

const displayTime24 = date.toLocaleTimeString("en-US", { hour12: false }); // Just time
console.log(displayTime24); // "14:30:45"

const displayTime12 = date.toLocaleTimeString("en-US", { hour12: true }); // Just time
console.log(displayTime12); // "2:30:45 PM"

// 2. Using time methods
const hours = String(date.getHours()).padStart(2, "0");
const minutes = String(date.getMinutes()).padStart(2, "0");
const seconds = String(date.getSeconds()).padStart(2, "0");
const timeFormatted = `${hours}:${minutes}:${seconds}`;
console.log(timeFormatted); // "14:30:45"

// ===== DATE + TIME =====
const dateTime = date.toISOString().slice(0, 19).replace("T", " ");
console.log(dateTime); // "2025-01-12 14:30:45"

const date1 = new Date(); // 2025-01-12T14:30:45.123Z

// ===== toLocaleString() - FULL DATE + TIME =====
console.log(date.toLocaleString()); // "1/12/2025, 2:30:45 PM" (US)
console.log(date.toLocaleString("en-US")); // "1/12/2025, 2:30:45 PM"
console.log(date.toLocaleString("en-GB")); // "12/01/2025, 14:30:45" (DD-MM-YYYY, 24hr)

// ===== toLocaleDateString() - DATE ONLY =====
console.log(date.toLocaleDateString()); // "1/12/2025" (US)
console.log(date.toLocaleDateString("en-US")); // "1/12/2025" (MM-DD-YYYY)
console.log(date.toLocaleDateString("en-GB")); // "12/01/2025" (DD-MM-YYYY)

// With options
console.log(date.toLocaleDateString("en-US", { year: "numeric", month: "2-digit", day: "2-digit" }));
// "01/12/2025"

// ===== toLocaleTimeString() - TIME ONLY =====
console.log(date.toLocaleTimeString()); // "2:30:45 PM" (US, 12hr)
console.log(date.toLocaleTimeString("en-US")); // "2:30:45 PM" (12hr)
console.log(date.toLocaleTimeString("en-US", { hour12: false })); // "14:30:45" (24hr)
console.log(date.toLocaleTimeString("en-GB")); // "14:30:45" (24hr default)
console.log(date.toLocaleTimeString("en-GB", { hour12: true })); // "2:30:45 PM"

// ===== OPTIONS OBJECT =====
const options = {
  year: "numeric",      // "2025"
  month: "2-digit",     // "01" or "long" for "January"
  day: "2-digit",       // "12"
  hour: "2-digit",      // "14"
  minute: "2-digit",    // "30"
  second: "2-digit",    // "45"
  hour12: false         // 24hr format (true = 12hr)
};

console.log(date.toLocaleString("en-US", options));
// "01/12/2025, 14:30:45"

// en-US: MM-DD-YYYY, 12hr by default
// en-GB: DD-MM-YYYY, 24hr by default
// Use hour12: false for 24-hour format
// Use month: "long" for full month name