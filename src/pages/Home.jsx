import Header from '../components/Header/Header';
import Destinations from '../components/Destinations/Destinations';
import FeaturesList from '../components/FeaturesList/FeaturesList';
import CallToSignUp from '../components/CallToSignUp/CallToSignUp';

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <Destinations />
                <FeaturesList />
                <CallToSignUp />
            </main>
        </>
    )
}

export default Home