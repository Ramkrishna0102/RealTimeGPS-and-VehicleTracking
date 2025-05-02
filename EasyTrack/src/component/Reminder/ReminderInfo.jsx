import { useState } from "react";
import "./Reminder.css";

const remindersData = [
  {
    title: "Service Due",
    description: "Your vehicle's next service is due on 10th May 2025.",
    completed: false
  },
  {
    title: "Repair Reminder",
    description: "Engine oil leakage needs to be repaired before 5th May 2025.",
    completed: false
  },
  {
    title: "Insurance Renewal",
    description: "Vehicle insurance expires on 20th May 2025. Renew it soon.",
    completed: false
  },
  {
    title: "Pollution Check",
    description: "Pollution certificate expires on 15th May 2025.",
    completed: false
  }
];

const ReminderInfo = () => {
  const [reminders, setReminders] = useState(remindersData);

  const markCompleted = (index) => {
    const updatedReminders = [...reminders];
    updatedReminders[index].completed = !updatedReminders[index].completed;
    setReminders(updatedReminders);
  };

  return (
    <div className="reminders-page">
      <h1>Vehicle Reminders</h1>
      <div className="reminder-list">
        {reminders.map((reminder, index) => (
          <div 
            key={index} 
            className={`reminder-card ${reminder.completed ? 'completed' : ''}`}
            onClick={() => markCompleted(index)}
          >
            <h2>{reminder.title}</h2>
            <p>{reminder.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReminderInfo;
