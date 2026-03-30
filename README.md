# Contract Renewal Tracker App

A simple React app to track employee contract expiry dates, highlight upcoming renewals, and manage contract information efficiently. Built with React + local state + localStorage for persistence.

---

### Features
- Add/Edit/Delete Contracts – manage employee contracts easily.
- Automatic Contract Status – status updates automatically based on end date:
1. Active – more than 6 months remaining
2. Expiring Soon – 3–6 months remaining
3. Renewal Process Due – less than 3 months remaining
4. Expired – end date has passed
- Filter Contracts – filter by status (All, Active, Expiring Soon, Renewal Process Due, Expired).
- Search Contracts – search by employee name or department.
- Summary Cards – view total contracts and breakdown by status.
- Persistent Storage – all contracts are saved to localStorage and persist across browser sessions.
- Sample Contracts – preloaded sample data to get started immediately.

---

### Installation
Clone the repository:

```git clone https://github.com/danieldcaesar/contract-renewal-tracker.git```

```cd contract-renewal-app```


Install dependencies:
```npm install```
Start the app:
```npm run dev```

The app should now be running at http://localhost:5173 (Vite default).

---

### File Structure
```
src/
  components/
    ContractCard.jsx
    ContractForm.jsx
    ContractList.jsx
    FilterBar.jsx
    SearchBar.jsx
    SummaryCards.jsx
  data/
    sampleContracts.js
  App.jsx
  main.jsx
  index.css
```

---

### Usage
1. Add a Contract – fill in employee details and contract dates.
2. Edit a Contract – click “Edit” on a contract card.
3. Delete a Contract – click “Delete” on a contract card, with confirmation.
4. Filter & Search – combine search and filter to quickly find contracts.
5. View Summary Cards – see an overview of contract statuses at a glance.

--- 
### Future Enhancements
- Highlight search matches inside contract cards.
- Color-coded badges for each status.
- Export contracts to CSV or PDF.
- Notifications or alerts for contracts nearing renewal.
- Backend integration for multi-user support.

---

### Technologies Used
**React** – front-end framework
**Vite** – development environment and bundler
**CSS** – basic styling
**localStorage** – persistent client-side storage
---

### License

MIT License – feel free to use and modify for your own purposes.