import './App.css';
import Sidebar from './components/Sidebar';
import WorkArea from './components/WorkArea';
function App() {
  return (
    <div className="container">
      <Sidebar />
      <WorkArea />
    </div>
  );
}

export default App;
