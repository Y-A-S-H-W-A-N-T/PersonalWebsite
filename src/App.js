import { BrowserRouter } from 'react-router-dom'
import Back from './pages/back'
import Routesanimation from './pages/routesanimation'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Back/>
        <Routesanimation/>
      </div>
    </BrowserRouter>
  );
}

export default App;
