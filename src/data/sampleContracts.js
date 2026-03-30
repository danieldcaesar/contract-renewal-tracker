// src/data/sampleContracts.js
function randomStartDate() {
  const start = new Date(2023, 0, 1); // Jan 1, 2023
  const end = new Date(2025, 11, 31); // Dec 31, 2025
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return date.toISOString().split('T')[0]; // format: YYYY-MM-DD
}

function addYears(dateStr, years) {
  const date = new Date(dateStr);
  date.setFullYear(date.getFullYear() + years);
  return date.toISOString().split('T')[0];
}

const sampleContracts = [
  { id: 1, name: "Alice Thompson", department: "HR", position: "HR Manager", notes: "" },
  { id: 2, name: "Brian Lewis", department: "Finance", position: "Accountant", notes: "" },
  { id: 3, name: "Carla Mendes", department: "IT", position: "Software Engineer", notes: "" },
  { id: 4, name: "David Chen", department: "Marketing", position: "Content Strategist", notes: "" },
  { id: 5, name: "Emily Parker", department: "Operations", position: "Operations Analyst", notes: "" },
  { id: 6, name: "Franklin Ortiz", department: "Sales", position: "Sales Executive", notes: "" },
  { id: 7, name: "Grace Williams", department: "HR", position: "Recruiter", notes: "" },
  { id: 8, name: "Henry Lee", department: "IT", position: "Network Administrator", notes: "" },
  { id: 9, name: "Isabella Garcia", department: "Finance", position: "Financial Analyst", notes: "" },
  { id: 10, name: "Jason Kim", department: "Marketing", position: "SEO Specialist", notes: "" },
  { id: 11, name: "Karen Singh", department: "Operations", position: "Logistics Coordinator", notes: "" },
  { id: 12, name: "Liam Murphy", department: "Sales", position: "Account Manager", notes: "" },
  { id: 13, name: "Maya Patel", department: "IT", position: "Frontend Developer", notes: "" },
  { id: 14, name: "Nathan Scott", department: "Marketing", position: "Social Media Manager", notes: "" },
  { id: 15, name: "Olivia Rivera", department: "HR", position: "HR Coordinator", notes: "" }
];

// Assign startDate and endDate for each contract
sampleContracts.forEach(contract => {
  const startDate = randomStartDate();
  const years = Math.random() < 0.5 ? 2 : 3; // 50% chance of 2 or 3 years
  const endDate = addYears(startDate, years);
  contract.startDate = startDate;
  contract.endDate = endDate;
});

export default sampleContracts;