import satData from "./satData.js"

const Buttons = ({ filterByType, setSat, displaySats }) => {
  
  
  return (
    <div>
      
      {displaySats.map((sat, id) => {
  return (
    <button onClick={() => filterByType(sat)} key={id}>
      {sat} Orbit
    </button>
  );
})}

      <button onClick={() => setSat(satData)}>All Orbits</button>
      </div>
  );
  
};


// const Buttons = (props) => {
//   const { filterByType, setSat, displaySats } = props;
  
//   return (
//     <div>
//       <button onClick={() => filterByType('')}> Filter xxx Sats</button>
//       <button onClick={() => displaySats()}>Display Sats</button>
      
//       {displaySats.map((sat, id) => {
//   return (
//     satData.map(sat => (
//       <div key = {sat.id}>{"rendering logic"}</div>
//     ))
//   );
//     <button onClick={() => filterByType(sat)} key={id}>
//       {sat} Orbit
//     </button>
//       }
//     )

//      }
//       <button>All Orbits</button>
//       </div>
//   );
//   <button onClick={() => setSat()}>Set Sat</button>
// };

export default Buttons;