import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";
import PropTypes from "prop-types";

// Importing icons
import { FaTachometerAlt, FaTruck, FaBell, FaUsers, FaRoute, FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineAddCircleOutline, MdOutlineGroup } from "react-icons/md";
import { BiMapPin } from "react-icons/bi";
import { AiOutlineTool, AiOutlineCalendar } from "react-icons/ai";

const menuItems = [
  { title: "Dashboard", path: "/", icon: <FaTachometerAlt /> },
  {
    title: "Vehicles",
    icon: <FaTruck />,
    subItems: [
      { title: "Add Vehicle", path: "/add-vehicle", icon: <MdOutlineAddCircleOutline /> },
      { title: "Vehicle Info", path: "/vehicle-info", icon: <FaTruck /> },
      { title: "Vehicle Group", path: "/vehicle-group", icon: <MdOutlineGroup /> },
      // { title: "Assignment New Vehicle", path: "/assignment-new-vehicle", icon: <FaTruck /> },
      // { title: "Assignment History", path: "/assignment-history", icon: <BiHistory /> },
    ],
  },
  {
    title: "Drivers",
    icon: <FaUsers />,
    subItems: [
      { title: "Driver Info", path: "/driver-info", icon: <FaUsers /> },
      { title: "Add Driver", path: "/add-driver", icon: <MdOutlineAddCircleOutline /> },
    ],
  },
  {
    title: "Bookings",
    icon: <AiOutlineCalendar />,
    subItems: [
      { title: "Bookings Info", path: "/bookings-info", icon: <AiOutlineCalendar /> },
      { title: "Bookings Edit", path: "/bookings-edit", icon: <AiOutlineTool /> },
      { title: "Add Booking", path: "/add-booking", icon: <MdOutlineAddCircleOutline /> },
    ],
  },
  {
    title: "Fuels",
    icon: <AiOutlineTool />,
    subItems: [
      { title: "Fuel Info", path: "/fuel-info", icon: <FaMapMarkerAlt /> },
      // { title: "Add Fuel Entry", path: "/add-fuel-entry", icon: <MdOutlineAddCircleOutline /> },
      // { title: "Fuel Entries", path: "/fuel-entries", icon: <AiOutlineTool /> },
    ],
  },
  {
    title: "Reminders",
    icon: <FaBell />,
    subItems: [
      { title: "Set Reminder", path: "/add-reminder", icon: <MdOutlineAddCircleOutline /> },
      // { title: "Service Reminders", path: "/service-reminders", icon: <FaBell /> },
      // { title: "Renewal Reminders", path: "/renewal-reminders", icon: <FaBell /> },
    ],
  },
  {
    title: "Tracking",
    icon: <FaRoute />,
    subItems: [
      { title: "Track Devices", path: "/trackdevices", icon: <BiMapPin /> },
      { title: "Live Location", path: "/live-location", icon: <FaRoute /> },
    ],
  },
  {
    title: "Geofence",
    icon: <FaMapMarkerAlt />,
    subItems: [
      { title: "Geofence Info", path: "/geofence-info", icon: <FaMapMarkerAlt /> },
      { title: "Geofence Events", path: "/geofence-events", icon: <BiMapPin /> },
    ],
  },
  {
    title: "Users",
    icon: <FaUsers />,
    subItems: [
      { title: "User’s List", path: "/users-list", icon: <FaUsers /> },
      { title: "Add User", path: "/add-user", icon: <MdOutlineAddCircleOutline /> },
    ],
  },
  { title: "Logout", path: "/logout", icon: <FaTachometerAlt /> },
];

const Sidebar = ({ isSidebarOpen }) => {
  const [openSubmenus, setOpenSubmenus] = useState({});
  const navigate = useNavigate();

  const handleMenuClick = (item) => {
    if (item.path) {
      navigate(item.path);
    } else if (item.subItems) {
      setOpenSubmenus((prevState) => ({
        ...prevState,
        [item.title]: !prevState[item.title],
      }));
    }
  };

  return (
    <aside className={isSidebarOpen ? "sidebar open" : "sidebar"}>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            <div className="menu-item" onClick={() => handleMenuClick(item)}>
              <span className="menu-icon">{item.icon}</span>
              {item.title}
            </div>
            {item.subItems && openSubmenus[item.title] && (
              <ul className="submenu">
                {item.subItems.map((subItem, subIndex) => (
                  <li
                    key={subIndex}
                    className="submenu-item"
                    onClick={() => navigate(subItem.path)}
                  >
                    <span className="submenu-icon">{subItem.icon}</span>
                    {subItem.title}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

Sidebar.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
};

export default Sidebar