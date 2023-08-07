import Main from './layouts/Main'
import Header from './components/Header/Header'
import Destinations from './components/Destinations/Destinations'

import './App.css'

function App() {
  return (
    <>
      <Main>
        <Header />
        <main className='bg-purple-50'>
          <Destinations />
        </main>
      </Main>
    </>
  )
}

export default App