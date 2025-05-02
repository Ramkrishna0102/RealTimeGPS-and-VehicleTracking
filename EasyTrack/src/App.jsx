import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./component/Dashboard/Dashboard";
import Header from "./component/Header/Header";
import Sidebar from "./component/Sidebar/Sidebar";
import Signup from "./component/Log_sig/signup";
import Login from "./component/Log_sig/login";
import AddVehicle from "./component/Vechile/AddVehicle";
import VehicleInfo from "./component/Vechile/VehicleInfo";
import VehicleGroup from "./component/Vechile/VehicleGroup";
import Fuel from "./component/Fuel/Fuel";
import LiveLoc from "./component/Tracking/LiveLoc";
import TrackDevices from "./component/Tracking/TrackDevices";
import ReminderInfo from "./component/Reminder/ReminderInfo";
import AddReminder from "./component/Reminder/AddReminder";
import GeofenceInfo from "./component/Geofence/GeofenceInfo";
import GeofenceEvents from "./component/Geofence/GeofenceEvents";
import UserList from "./component/User/UserList";
import AddUser from "./component/User/AddUser";
import AddBooking from "./component/Booking/AddBooking";
import BookingInfo from "./component/Booking/BookingInfo";
import BookingEdit from "./component/Booking/BookingEdit";
import AddDriver from "./component/Drivers/AddDriver";
import DriverInfo from "./component/Drivers/DriverInfo";

import "./App.css";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [vehicles, setVehicles] = useState([]);
  const [bookings, setBookings] = useState([]);

  const fetchVehicles = async () => {
    try {
      const response = await fetch("http://localhost:3001/vehicles");
      if (response.ok) {
        const data = await response.json();
        setVehicles(data);
      } else {
        console.error("Failed to fetch vehicles");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const fetchBookings = async () => {
    try {
      const response = await fetch("http://localhost:3001/bookings");
      if (response.ok) {
        const data = await response.json();
        setBookings(data);
      } else {
        console.error("Failed to fetch bookings");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchVehicles();
    fetchBookings();
  }, []);

  const handleVehicleAdded = (newVehicle) => {
    setVehicles((prev) => [...prev, newVehicle]);
  };

  const handleBookingAdded = (newBooking) => {
    setBookings((prev) => [...prev, newBooking]);
  };

  const handleDeleteBooking = (id) => {
    setBookings((prev) => prev.filter((booking) => booking.id !== id));
  };

  const handleUpdateBooking = (id, newStatus) => {
    const updated = bookings.map((booking) =>
      booking.id === id ? { ...booking, status: newStatus } : booking
    );
    setBookings(updated);
  };

  return (
    <Router>
      <div className="app">
        <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <div className="main-container">
          <Sidebar isSidebarOpen={isSidebarOpen} />
          <main className={isSidebarOpen ? "content sidebar-open" : "content"}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/add-vehicle" element={<AddVehicle onVehicleAdded={handleVehicleAdded} />} />
              <Route path="/vehicle-info" element={<VehicleInfo vehicles={vehicles} />} />
              <Route path="/vehicle-group" element={<VehicleGroup />} />
              <Route path="/fuel-info" element={<Fuel />} />
              <Route path="/live-location" element={<LiveLoc />} />
              <Route path="/track-devices" element={<TrackDevices />} />
              <Route path="/reminder-info" element={<ReminderInfo />} />
              <Route path="/add-reminder" element={<AddReminder />} />
              <Route path="/geofence-info" element={<GeofenceInfo />} />
              <Route path="/geofence-events" element={<GeofenceEvents />} />
              <Route path="/users-list" element={<UserList />} />
              <Route path="/add-user" element={<AddUser />} />
              <Route path="/add-booking" element={<AddBooking onBookingAdded={handleBookingAdded} />} />
              <Route path="/bookings-info" element={<BookingInfo bookings={bookings} />} />
              <Route path="/add-driver" element={<AddDriver />} />
              <Route path="/driver-info" element={<DriverInfo />} />
              <Route
                path="/bookings-edit"
                element={
                  <BookingEdit
                    bookings={bookings}
                    onDeleteBooking={handleDeleteBooking}
                    onUpdateBooking={handleUpdateBooking}
                  />
                }
              />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App
