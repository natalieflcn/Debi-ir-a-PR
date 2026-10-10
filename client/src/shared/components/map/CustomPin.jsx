import diapr from "../../../assets/images/brand/diapr.svg";

function CustomPin() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        transform: "translateY(-50%)", // Shift anchor point if needed
      }}
    >
      <img src={diapr} alt="thumb" style={{ width: 65, height: 65 }} />
    </div>
  );
}

export default CustomPin;
