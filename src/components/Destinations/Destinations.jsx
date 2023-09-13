import Carousel from '../Carousel/Carousel';

const Destinations = () => {
    return (
        <section className='p-3' id='destinations'>
            <h2 className='mt-5 text-center text-2xl md:text-4xl font-semibold'>Popular Mytineraries</h2>
            <p className='text-center font-semibold text-indigo-700 mb-6'>Find you perfect destination</p>
            <Carousel />
        </section>
    )
}

export default Destinations