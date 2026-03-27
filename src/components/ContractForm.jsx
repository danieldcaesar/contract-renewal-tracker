import { useState } from 'react';

function ContractForm({ onAddContract }) {
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [position, setPosition] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [notes, setNotes] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const newContract = {
      id: Date.now(),
      name,
      department,
      position,
      startDate,
      endDate,
      notes,
    };

    onAddContract(newContract);

    setName('');
    setDepartment('');
    setPosition('');
    setStartDate('');
    setEndDate('');
    setNotes('');
  }

  return (
    <section>
      <h2>Add Contract</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Employee Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />

        <input
          type="text"
          placeholder="Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />

        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />

        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />

        <textarea
          placeholder="Notes (optional)"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        ></textarea>

        <button type="submit">Add Contract</button>
      </form>
    </section>
  );
}

export default ContractForm;