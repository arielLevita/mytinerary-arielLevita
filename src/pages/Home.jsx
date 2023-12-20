import Header from '../components/Header/Header';
import Destinations from '../components/Destinations/Destinations';

const Home = () => {
    
    return (
        <div>
            <Header />
            <main className='bg-blue-100'>
                <Destinations />
            </main>
        </div>
    )
}

export default Home