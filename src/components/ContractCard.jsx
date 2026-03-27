function ContractCard({ contract }) {
  return (
    <div className="contract-card">
      <h3>{contract.name}</h3>
      <p><strong>Department:</strong> {contract.department}</p>
      <p><strong>Position:</strong> {contract.position}</p>
      <p><strong>Start Date:</strong> {contract.startDate}</p>
      <p><strong>End Date:</strong> {contract.endDate}</p>
      <p><strong>Notes:</strong> {contract.notes || 'None'}</p>
    </div>
  );
}

export default ContractCard;