function FilterBar({ selectedFilter, setSelectedFilter }) {
  const filters = [
    "All",
    "Active",
    "Expiring Soon",
    "Renewal Process Due",
    "Expired",
  ];

  return (
    <section className="filter-bar">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setSelectedFilter(filter)}
          className={selectedFilter === filter ? "active-filter" : ""}
        >
          {filter}
        </button>
      ))}
    </section>
  );
}

export default FilterBar;