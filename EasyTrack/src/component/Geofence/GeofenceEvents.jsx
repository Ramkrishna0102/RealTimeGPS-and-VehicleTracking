import "./Geo.css";
const GeofenceEvents = () => {
  return (
    <div className="geofence-events-page">
      <h1>Geofence Events & Alerts</h1>
      <p>
        Track all vehicle activities related to geofences in real-time. Get notified instantly and maintain logs for analysis.
      </p>

      <h2>Event Types:</h2>
      <ul>
        <li>Entry Events: Vehicle entering the geofence</li>
        <li>Exit Events: Vehicle leaving the geofence</li>
        <li>Dwell Time Alerts: Vehicle staying inside for too long</li>
        <li>Unauthorized Movement: Moving into restricted zones</li>
        <li>Violation Logs: History of breaches and rule violations</li>
      </ul>

      <h2>Additional Features:</h2>
      <ul>
        <li>Instant push/email/SMS alerts on violation</li>
        <li>Visual history tracking on maps</li>
        <li>Generate analytics reports based on geofence events</li>
        <li>Integration with driver behavior monitoring</li>
      </ul>
    </div>
  );
};

export default GeofenceEvents;
