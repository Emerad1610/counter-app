function Navbar() {
  return (
    <div style={styles.navbar}>
      <h2>Dashboard</h2>
      <div>User</div>
    </div>
  );
}

const styles = {
  navbar: {
    height: "60px",
    background: "#f1f5f9",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",
    borderBottom: "1px solid #ddd",
  },
};

export default Navbar;