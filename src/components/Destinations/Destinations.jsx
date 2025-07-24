import Carousel from '../Carousel/Carousel';

const Destinations = () => {
    return (
        <section className='mb-8 md:mb-16 lg:mb-24' id='destinations'>
            <div className="wrapper overflow-x-hidden">
                <div className='px-4'>
                    <Carousel />
                </div>
            </div>
        </section>
    )
}

export default Destinations