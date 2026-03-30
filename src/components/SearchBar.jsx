function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <section className="search-bar">
      <input
        type="text"
        placeholder="Search by name or department..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </section>
  );
}

export default SearchBar;