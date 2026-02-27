import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div style={styles.sidebar}>
      <h3>My App</h3>

      <NavLink to="/" style={styles.link}>
        Home
      </NavLink>

      <NavLink to="/counter" style={styles.link}>
        Counter
      </NavLink>

      <NavLink to="/about" style={styles.link}>
        About
      </NavLink>
    </div>
  );
}

const styles = {
  sidebar: {
    width: "200px",
    height: "100vh",
    background: "#1e293b",
    color: "white",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
};

export default Sidebar;