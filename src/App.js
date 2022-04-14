import List from './component/List'
import Slot from './component/Slot'
import Details from './component/Details'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<List/>}/>
        <Route path="/slot" element={<Slot/>}/>
        <Route path="/details" element={<Details/>}/>
    
      </Routes>
      
    </div>
  );
}

export default App;
