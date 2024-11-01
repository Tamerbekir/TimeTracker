import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Components/Navbar';
import App from './App';


const Root = () => (
  <BrowserRouter>
    <Navbar />
    <App />
  </BrowserRouter>
)

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<Root />)



