const DashboardInput = ({ ...props }) => {
  return (
    <>
      <div className="field">
        <label className="label">{props.label}</label>
        <div className="control">
          <input className="input" {...props} />
        </div>
      </div>
    </>
  );
};

export default DashboardInput;
