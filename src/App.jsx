import { useState } from "react";
import ContractForm from "./components/ContractForm";
import ContractList from "./components/ContractList";
import FilterBar from "./components/FilterBar";
import SearchBar from "./components/SearchBar";
import SummaryCards from "./components/SummaryCards";

function App() {
  const [contracts, setContracts] = useState([]);

  function addContract(newContract) {
    setContracts([...contracts, newContract]);
  }

  return (
    <div className="app">
      <header className="header">
        <h1>Contract Renewal Reminder</h1>
        <p>Track employee contract expiry dates and upcoming renewals.</p>
      </header>

      <SummaryCards />
      <SearchBar />
      <FilterBar />
      <ContractForm onAddContract={addContract} />
      <ContractList contracts={contracts} />



    </div>
  );
}

export default App;