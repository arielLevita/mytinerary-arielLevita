import './App.css'
import  Main  from './layouts/Main'
import Header from './components/Header/Header'
import Carousel from './components/Carousel/Carousel';

function App() {

  return (
    <>
      <Main>
        <Header />
        <main>
            <Carousel />
        </main>
      </Main>
    </>
  )
}

export default App
