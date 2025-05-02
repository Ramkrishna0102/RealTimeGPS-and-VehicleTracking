// import './App.css';
import "./Dashboard.css"

function Dashboard() {
  const tiles = [
    { icon: '⚙️', title: 'ISSUES', details: ['Open: 5', 'Overdue: 2'], color: 'blue' },
    { icon: '🔔', title: 'SERVICE REMINDERS', details: ['Overdue: 5', 'Due Soon: 2'], color: 'red' },
    { icon: '🚗', title: 'VEHICLES', details: ['Assigned: 3', 'Unassigned: 6'], color: 'orange' },
    { icon: '📋', title: 'RENEWAL REMINDERS', details: ['Overdue: 5', 'Due Soon: 2'], color: 'gray' },
    { icon: '🚚', title: 'VEHICLE STATUS', details: ['Active: 5', 'Inactive: 2'], color: 'green' },
    { icon: '👥', title: 'USER STATUS', details: ['Active: 5', 'Inactive: 2'], color: 'purple' },
  ];

  return (
    <div className="dashboard">
      {tiles.map((tile, index) => (
        <div key={index} className={`tile ${tile.color}`}>
          <div className="icon">{tile.icon}</div>
          <div className="title">{tile.title}</div>
          <div className="details">
            {tile.details.map((detail, idx) => (
              <div key={idx}>{detail}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;