
import './App.css'
import Loader from './components/d2-progress-loader/Loader'
import ExComponent from './components/d1-expanding-card/ExComponent'

function App() {
  return (
    <div className='container grid grid-cols-1 gap-y-1'>
      {/* <ExComponent /> */}
      <Loader/>
    </div>
  )
}

export default App
