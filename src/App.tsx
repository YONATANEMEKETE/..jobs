import { Button } from './components/ui/button';

function App() {
  return (
    <div>
      <h1 className="text-3xl font-extrabold font-body underline text-mytext">
        Hello world!
      </h1>
      <Button variant="outline" size="lg" className="">
        Hello
      </Button>
    </div>
  );
}

export default App;
