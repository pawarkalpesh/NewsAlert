const Navbar = ({ setCategory }) => {
  const categories = [
    "general",
    "world",
    "nation",
    "business",
    "technology",
    "entertainment",
    "sports",
    "science",
    "health"
  ];

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <div className="navbar-brand">
          <span className="badge bg-light text-dark fs-4">NewsAlert</span>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {categories.map((topic) => (
              <li className="nav-item" key={topic}>
                <div
                  className="nav-link"
                  style={{ cursor: "pointer" }}
                  onClick={() => setCategory(topic)}
                >
                  {topic.charAt(0).toUpperCase() + topic.slice(1)}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
