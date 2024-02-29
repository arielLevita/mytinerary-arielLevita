import Header from '../components/Header/Header';
import Destinations from '../components/Destinations/Destinations';
import FeaturesList from '../components/FeaturesList/FeaturesList';
import CallToSignUp from '../components/CallToSignUp/CallToSignUp';

const Home = () => {
    return (
        <div className='bg-gradient-to-br from-blue-100 via-cyan-50 to-green-50'>
            <div className='mb-16'>
                <Header />
            </div>
            <main>
                <Destinations />
                <FeaturesList />
                <CallToSignUp />
            </main>
        </div>
    )
}

export default Home