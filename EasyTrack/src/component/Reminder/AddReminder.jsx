import { useState } from "react";
import "./Reminder.css";
import PropTypes from "prop-types";

const AddReminder = ({ addReminder }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description || !date) {
      alert("Please fill all fields!");
      return;
    }

    // New reminder object
    const newReminder = {
      title,
      description,
      completed: false, // New reminders are initially not completed
    };

    // Add reminder to parent state
    addReminder(newReminder);

    setSuccessMessage("Reminder added successfully!");

    // Clear form
    setTitle("");
    setDescription("");
    setDate("");

    // Hide message after 3 seconds
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  return (
    <div className="add-reminder-container">
      <h2>Add New Reminder</h2>
      <form className="reminder-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Reminder Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Reminder Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit">Save Reminder</button>

        {successMessage && <p className="success-message">{successMessage}</p>}
      </form>
    </div>
  );
};

export default AddReminder;

AddReminder.propTypes = {
    addReminder: PropTypes.bool.isRequired,
};


