import { Link as Anchor } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="wrapper">
                <div className='hero-background relative w-full h-screen'>
                    <div className='absolute h-full w-full bg-black opacity-20'></div>
                    <div className='drop-shadow-xl absolute w-full h-full flex flex-col justify-center items-center md:items-start p-8 text-white md:p-20'>
                        <p className='text-2xl md:text-3xl lg:text-4xl font-semibold'>Welcome to</p>
                        <h1 className='text-shadow font-bold text-5xl md:text-7xl lg:text-8xl mb-2'>Itinerary<span className='text-purple-500'>Hub</span></h1>
                        <p className='text-center md:text-start md:text-xl font-semibold max-w-[70%] my-4'>Discover your perfect trip: Crafted by insiders, loved by explorers.</p>
                        <Anchor to='/cities' className="bg-purple-700 bg-gradient-to-br from-purple-500 backdrop-blur bg-opacity-70 shadow-sm text-shadow font-semibold text-base md:text-xl text-white rounded-full hover:shadow-2xl hover:bg-purple-900 hover:bg-opacity-80 border-2 border-opacity-50 border-white pt-2.5 pb-3 px-4 my-4">Come check it!</Anchor>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header