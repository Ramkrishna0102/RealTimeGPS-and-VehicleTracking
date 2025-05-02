import "./Geo.css";
const GeofenceInfo = () => {
  return (
    <div className="geofence-info-page">
      <h1>Geofence Info & Management</h1>
      <p>
        A Geofence is a virtual boundary created around a specific geographical area. In vehicle tracking,
        it is used to monitor entry, exit, and movement inside designated zones.
      </p>

      <h2>Main Features:</h2>
      <ul>
        <li>Create and Edit Geofences (circular, polygonal, custom shapes)</li>
        <li>Assign geofences to vehicles or groups</li>
        <li>View active and inactive geofences</li>
        <li>Set security zones (restricted areas, high-risk areas)</li>
        <li>Schedule maintenance based on geofence location</li>
        <li>Mobile app notifications when a vehicle crosses a boundary</li>
      </ul>
    </div>
  );
};

export default GeofenceInfo;
