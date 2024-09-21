import Carousel from '../Carousel/Carousel';

const Destinations = () => {
    return (
        <section className='pb-24' id='destinations'>
            <div className="wrapper">
                <div className='px-4'>
                    <div className=''>
                        <h2 className='pt-5 text-2xl md:text-4xl font-semibold mb-2'>Popular itineraries</h2>
                        <p className='font-semibold text-indigo-700 mb-4'>Find you perfect destination</p>
                    </div>
                    <Carousel />
                </div>
            </div>
        </section>
    )
}

export default Destinations