import ContractCard from './ContractCard';

function ContractList({ contracts }) {
  return (
    <section>
      <h2>Contract List</h2>

      {contracts.length === 0 ? (
        <p>No contracts added yet.</p>
      ) : (
        contracts.map((contract) => (
          <ContractCard key={contract.id} contract={contract} />
        ))
      )}
    </section>
  );
}

export default ContractList;