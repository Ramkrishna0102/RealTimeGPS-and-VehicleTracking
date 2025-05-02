import  { useState } from 'react';
import AddReminder from './AddReminder';
import ReminderInfo from './ReminderInfo';

const ReminderApp = () => {
  const [reminders, setReminders] = useState([]);

  const addReminder = (reminder) => {
    setReminders([...reminders, reminder]);
  };

  return (
    <div>
      <AddReminder addReminder={addReminder} />
      <ReminderInfo reminders={reminders} />
    </div>
  );
};

export default ReminderApp;
