import Nav from './components/Nav';
import Form from './components/Form';
// import AnimatedCursor from "react-animated-cursor"
import CompleteModal from './components/CompleteModal';

function App() {
  return (
    <>
      <div className='container'>
        <Nav/>
        <Form/>
      </div>
      <CompleteModal/>
    </>
  );
}

export default App;
