import Bal from "./Bal.jsx";

function App() {

  const userName = 'Dhriti'
  //Evaluation expression -- injected in h1 tag
  return (
    <>
      <Bal />
      <h1>React with Vite & {userName}</h1>
      <p>Test paragraph</p>
    </>
  )
}

export default App
