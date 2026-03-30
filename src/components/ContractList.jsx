import ContractCard from './ContractCard';

function ContractList({ contracts, onEditContract, onDeleteContract }) {
  return (
    <section>
      <h2>Contract List</h2>

      {contracts.length === 0 ? (
        <p>No contracts added yet.</p>
      ) : (
        contracts.map((contract) => (
          <ContractCard
            key={contract.id}
            contract={contract}
            onEditContract={onEditContract}
            onDeleteContract={onDeleteContract}
          />
        ))
      )}
    </section>
  );
}

export default ContractList;