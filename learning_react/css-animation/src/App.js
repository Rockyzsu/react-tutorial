import InfoPanel from "./InfoPanel";
function App() {
  const title = "Welcome to the App!";
  return (
    
      <InfoPanel title={title} >
      <p>
          This is a component that uses CSS animation to expand and
          contract this detail panel
        </p>
      </InfoPanel>

  );
}

export default App;
