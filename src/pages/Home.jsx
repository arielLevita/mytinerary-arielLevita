import Header from '../components/Header/Header';
import Destinations from '../components/Destinations/Destinations';

const Home = () => {
    return (
        <div>
            <Header />
            <main className='bg-purple-50'>
                <Destinations />
            </main>
        </div>
    )
}

export default Home