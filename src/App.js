import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from './components/Card';
import Collapse from './components/Collapse';

function App() {
  return (
    <div className="App">
      <div className="card-group">
        <Collapse href="collapseExample1">
          <Card cardTitle="card title 1"
            cardText="Lorem ipsum text 1"
            updatedTime="Last updated 1 min ago..."
            image="https://picsum.photos/id/8/200/300" />
        </Collapse>
        <Collapse href="collapseExample2">
          <Card cardTitle="card title 2"
            cardText="Lorem ipsum text 2"
            updatedTime="Last updated 2 min ago..."
            image="https://picsum.photos/id/17/200/300" />
        </Collapse>
        <Collapse href="collapseExample3">
          <Card cardTitle="card title 3"
            cardText="Lorem ipsum text 3"
            updatedTime="Last updated 3 min ago..."
            image="https://picsum.photos/id/24/200/300" />
        </Collapse>
      </div>
    </div >
  );
}

export default App;
