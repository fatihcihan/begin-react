import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <div className="card-group">
        <Card cardTitle="card title 1" />
        <Card cardTitle="card title 2" />
        <Card cardTitle="card title 3" />
      </div>
    </div >
  );
}

export default App;
