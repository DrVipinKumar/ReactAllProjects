const Navbar = (props) => {
  return (
    <div className="navbar navbar-expand-lg bg-light">
      <span className="navbar-brand m-2">
        <h2>
          Total Counter
          <span className="btn btn-warning m-2">{props.totalCounter}</span>
        </h2>
      </span>
    </div>
  );
};

export default Navbar;
