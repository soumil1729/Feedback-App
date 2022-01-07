import Header from './components/Header';

function App() {
  return (
    // Wrapping it in fragment beacuse in return jsx we can only use one parent element
    <>
      <Header />
      <div className="container">
        <h1>My App</h1>
      </div>
    </>
  );
}

export default App;
