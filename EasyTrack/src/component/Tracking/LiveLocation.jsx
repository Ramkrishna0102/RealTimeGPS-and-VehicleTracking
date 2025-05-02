import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const LiveLocation = () => {
  const [link, setLink] = useState("");
  const [position, setPosition] = useState(null);

  const extractCoordinates = (url) => {
    // updated regex to correctly find lat,lng from URL
    const regex = /@(-?\d+\.\d+),(-?\d+\.\d+)/;
    const regexAlt = /(-?\d+\.\d+),(-?\d+\.\d+)/;

    let match = url.match(regex);
    if (!match) {
      match = url.match(regexAlt);
    }

    if (match) {
      const lat = parseFloat(match[1]);
      const lng = parseFloat(match[2]);
      return { lat, lng };
    }
    return null;
  };

  const handleShowLocation = async () => {
    const coords = extractCoordinates(link);
    if (coords) {
      setPosition([coords.lat, coords.lng]);
    } else {
      alert("Invalid Link! Please paste a correct Google Maps link.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Live Vehicle Tracking</h1>
      <p>Tracking vehicle locations in real-time...</p>

      <div style={{ marginTop: "30px" }}>
        <input
          type="text"
          placeholder="Paste Google Maps link here..."
          value={link}
          onChange={(e) => setLink(e.target.value)}
          style={{
            width: "350px",
            padding: "10px",
            fontSize: "16px",
            marginRight: "10px",
          }}
        />
        <button
          onClick={handleShowLocation}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Show Location
        </button>
      </div>

      {position ? (
        <MapContainer center={position} zoom={15} style={{ height: "500px", marginTop: "20px" }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={position}>
            <Popup>Selected Location</Popup>
          </Marker>
        </MapContainer>
      ) : (
        <p style={{ color: "red", marginTop: "20px" }}>No location selected</p>
      )}
    </div>
  );
};

export default LiveLocation;
