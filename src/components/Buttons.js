import satData from "./satData.js"

const Buttons = (props) => {
  const { filterByType, setSat, displayStats } = props;
  
  return (
    <div>
      <button onClick={() => filterByType('')}> Filter xxx Sats</button>
      <button onClick={() => displayStats()}>Display Sats</button>
      
      {/* {displaySats.map((sat, id) => {
  return (
    <button onClick={() => filterByType(sat)} key={id}>
      {sat} Orbit
    </button>
  );
})} */}
//code continues
      <button>Placeholder Button</button>
      <button>All Orbits</button>
      </div>
  );
  <button onClick={() => setSat()}>Set Sat</button>
};

export default Buttons;