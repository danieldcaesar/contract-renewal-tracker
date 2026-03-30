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

function ContractCard({ contract, onEditContract, onDeleteContract }) {
  const { daysRemaining, status } = getContractStatus(contract.endDate);
  const formattedEndDate = new Date(contract.endDate).toLocaleDateString();

  const statusClass = status.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="contract-card">
      <h3>{contract.name}</h3>
      <p>Department: {contract.department}</p>
      <p>Position: {contract.position}</p>
      <p>Start Date: {new Date(contract.startDate).toLocaleDateString()}</p>
      <p>End Date: {formattedEndDate}</p>
      <p>Notes: {contract.notes || "None"}</p>

      <p>
        Status: <span className={`status-badge ${statusClass}`}>{status}</span>
      </p>

      <p>
        {daysRemaining < 0
          ? `Expired ${Math.abs(daysRemaining)} day(s) ago`
          : `${daysRemaining} day(s) remaining`}
      </p>

      <div className="card-actions">
        <button type="button" onClick={() => onEditContract(contract)}>
          Edit
        </button>

        <button type="button" onClick={() => onDeleteContract(contract)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default ContractCard;