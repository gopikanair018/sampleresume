import "./App.css";
import myimg from '../src/images/my.jpg'
function App() {
  return (
    <div style={{display:"flex",flexdirection:"row"}}>
      <p>gopika</p>
      
      <img src={myimg} alt="my" width="50" />
    </div>
  );
}

export default App;
