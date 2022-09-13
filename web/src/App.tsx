import './App.css'
import Nav from "./components/Nav";
import CompleteModal from "./components/CompleteModal";
import Form from "./components/Form";

function App() {
  return (
    <>
      <div className='container'>
        <Nav/>
        <Form/>
      </div>
      <CompleteModal/>
    </>
  )
}

export default App
