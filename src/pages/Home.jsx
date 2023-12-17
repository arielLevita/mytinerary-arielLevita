import Header from '../components/Header/Header';
import Destinations from '../components/Destinations/Destinations';
import { useSelector } from 'react-redux';

const Home = () => {
    
    let user = useSelector(store => store.userReducer.user);
    console.log(user);
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