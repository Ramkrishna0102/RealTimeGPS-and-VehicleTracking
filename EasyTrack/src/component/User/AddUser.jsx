import { useState } from 'react';
import './User.css';

const AddUser = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.role) {
      setUsers([...users, formData]);
      setFormData({ name: '', email: '', role: '' });  // Reset form
    } else {
      alert('Please fill all fields.');
    }
  };

  return (
    <div className="user-container">
      <h1>Add New User</h1>
      <div className="user-card">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter user name"
            />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter user email"
            />
          </div>

          <div className="form-group">
            <label>Role:</label>
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              placeholder="Enter user role"
            />
          </div>

          <button type="submit" className="submit-btn">Add User</button>
        </form>
      </div>

      <h2>Registered Users</h2>
      <div className="users-list">
        {users.map((user, index) => (
          <div key={index} className="user-card added-user">
            <h3>{user.name}</h3>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Role:</strong> {user.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddUser;
