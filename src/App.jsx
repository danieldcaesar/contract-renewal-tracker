import { useState, useEffect } from "react";
import ContractForm from "./components/ContractForm";
import ContractList from "./components/ContractList";
import FilterBar from "./components/FilterBar";
import SearchBar from "./components/SearchBar";
import SummaryCards from "./components/SummaryCards";
import sampleContracts from "./data/sampleContracts";

function getContractStatus(endDate) {
  const today = new Date();
  const contractEnd = new Date(endDate);

  today.setHours(0, 0, 0, 0);
  contractEnd.setHours(0, 0, 0, 0);

  const timeDifference = contractEnd - today;
  const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  let status = "";

  if (daysRemaining < 0) {
    status = "Expired";
  } else if (daysRemaining <= 92) {
    status = "Renewal Process Due";
  } else if (daysRemaining <= 183) {
    status = "Expiring Soon";
  } else {
    status = "Active";
  }

  return { daysRemaining, status };
}

function App() {
  const [contracts, setContracts] = useState(() => {
    const savedContracts = localStorage.getItem("contracts");
    return savedContracts ? JSON.parse(savedContracts) : sampleContracts;
  }); 
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [editingContract, setEditingContract] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    localStorage.setItem("contracts", JSON.stringify(contracts));
  }, [contracts]);

  function addContract(newContract) {
    setContracts([...contracts, newContract]);
  }

  const handleUpdateContract = (updatedContract) => {
  const updatedContracts = contracts.map((contract) =>
    contract.id === updatedContract.id ? updatedContract : contract
  );

  setContracts(updatedContracts);
  setEditingContract(null);
};

  const handleEditContract = (contract) => {
    setEditingContract(contract);
  };

  const handleCancelEdit = () => {
    setEditingContract(null);
  };

  const handleDeleteContract = (contractToDelete) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${contractToDelete.name}'s contract?`
    );

    if (!confirmDelete) return;

    const updatedContracts = contracts.filter(
      (contract) => contract.id !== contractToDelete.id
    );

    setContracts(updatedContracts);

    if (editingContract && editingContract.id === contractToDelete.id) {
      setEditingContract(null);
    }
  };

  const filteredContracts = contracts.filter((contract) => {
  const { status } = getContractStatus(contract.endDate);

  const matchesFilter = selectedFilter === "All" || status === selectedFilter;

  const lowerSearch = searchTerm.toLowerCase().trim();
  const nameMatch = contract.name?.toLowerCase().includes(lowerSearch);
  const deptMatch = contract.department?.toLowerCase().includes(lowerSearch);
  const matchesSearch = lowerSearch === "" || nameMatch || deptMatch;

  return matchesFilter && matchesSearch;
});


  return (
    <div className="app">
      <header className="header">
        <h1>Contract Renewal Reminder</h1>
        <p>Track employee contract expiry dates and upcoming renewals.</p>
      </header>

      <SummaryCards contracts={contracts} />
      <ContractForm
          onAddContract={addContract}
          editingContract={editingContract}          
          onUpdateContract={handleUpdateContract} 
          onCancelEdit={handleCancelEdit}  
      />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <FilterBar
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      
      <ContractList
        contracts={filteredContracts}
        onEditContract={handleEditContract}  
        onDeleteContract={handleDeleteContract} 
      />
      
    </div>
  );
}

export default App;