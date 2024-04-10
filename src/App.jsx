import { BrowserRouter } from 'react-router-dom'
import Back from './components/back'
import Routesanimation from './components/routesanimation'

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
