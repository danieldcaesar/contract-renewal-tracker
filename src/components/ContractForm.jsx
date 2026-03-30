import { useState, useEffect } from 'react';

function ContractForm({ onAddContract, onUpdateContract, editingContract, onCancelEdit }) {
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [position, setPosition] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [notes, setNotes] = useState('');
  const [error, setError] = useState('');
  

  useEffect(() => {
    if (editingContract) {
      setName(editingContract.name);
      setDepartment(editingContract.department);
      setPosition(editingContract.position);
      setStartDate(editingContract.startDate);
      setEndDate(editingContract.endDate);
      setNotes(editingContract.notes);
    }
  }, [editingContract]);

  function clearForm() {
    setName('');
    setDepartment('');
    setPosition('');
    setStartDate('');
    setEndDate('');
    setNotes('');
    setError('');
  }

  function handleCancel() {
  clearForm();
  onCancelEdit();
}

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !name.trim() ||
      !department.trim() ||
      !position.trim() ||
      !startDate ||
      !endDate
    ) {
    setError('Please fill in all required fields.');
      return;
    }

    if (new Date(endDate) <= new Date(startDate)) {
      setError('End date cannot be earlier than start date.');
      return;
    }

    setError('');

    const contractData = {
      id: editingContract ? editingContract.id : Date.now(),
      name,
      department,
      position,
      startDate,
      endDate,
      notes,
    };

    if (editingContract) {
      onUpdateContract(contractData);
    } else {
      onAddContract(contractData);
    }

    clearForm();
    
  }



  return (
    <section>
      <h2>{editingContract ? 'Edit Contract' : 'Add Contract'}</h2>

      {error && <p className="form-error">{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Employee Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          required
        />

        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />

        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          required
        />

        <textarea
          placeholder="Notes (optional)"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        ></textarea>

        <div className="form-actions">
          <button type="submit">
            {editingContract ? 'Update Contract' : 'Add Contract'}
          </button>

          {editingContract && (
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
          )}
        </div>
      </form>
    </section>
  );
}

export default ContractForm;