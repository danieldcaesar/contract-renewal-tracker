function getContractStatus(endDate) {
  const today = new Date();
  const contractEnd = new Date(endDate);

  today.setHours(0, 0, 0, 0);
  contractEnd.setHours(0, 0, 0, 0);

  const timeDifference = contractEnd - today;
  const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  if (daysRemaining < 0) return "Expired";
  if (daysRemaining <= 92) return "Renewal Process Due";
  if (daysRemaining <= 183) return "Expiring Soon";
  return "Active";
}

function SummaryCards({ contracts }) {
  const summary = {
    total: contracts.length,
    active: 0,
    expiringSoon: 0,
    renewalDue: 0,
    expired: 0,
  };

  contracts.forEach((contract) => {
    const status = getContractStatus(contract.endDate);

    if (status === "Active") summary.active++;
    if (status === "Expiring Soon") summary.expiringSoon++;
    if (status === "Renewal Process Due") summary.renewalDue++;
    if (status === "Expired") summary.expired++;
  });

  return (
    <section className="summary-cards">
      <div className="card">
        <h3>Total</h3>
        <p>{summary.total}</p>
      </div>

      <div className="card">
        <h3>Active</h3>
        <p>{summary.active}</p>
      </div>

      <div className="card">
        <h3>Expiring Soon</h3>
        <p>{summary.expiringSoon}</p>
      </div>

      <div className="card">
        <h3>Renewal Due</h3>
        <p>{summary.renewalDue}</p>
      </div>

      <div className="card">
        <h3>Expired</h3>
        <p>{summary.expired}</p>
      </div>
    </section>
  );
}

export default SummaryCards;