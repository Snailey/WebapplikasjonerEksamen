import { GlobalContext } from './contexts/GlobalStateContext';
import Routes from './routes/routes.jsx';

function App() {
  return (
    <GlobalContext>
      <Routes />
    </GlobalContext>
  );
}

export default App;
