import { GetData } from './components/GetData';
import { GetError } from './components/GetError';
import { Loading } from './components/Loading';
import './App.css'



function App() {
  
  return (
    <>
      <GetData/>
      <GetError/>
      <Loading/>
    </>
  )
}

export default App
