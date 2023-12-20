import { Link as Anchor } from 'react-router-dom';

const Header = () => {
    return (
        <header className='hero-background relative w-full h-screen'>
            <div className='absolute h-full w-full bg-black opacity-20'></div>
            <div className='text-shadow absolute w-full h-full flex flex-col justify-center items-center md:items-start p-8 text-white md:p-20'>
                <p className='text-2xl md:text-3xl lg:text-4xl'>Welcome to</p>
                <h1 className='font-bold text-5xl md:text-7xl lg:text-8xl mb-2'>Itinerary<span className='text-purple-400'>Hub</span></h1>
                <p className='text-center md:text-start md:text-xl max-w-[70%] my-4'>Discover your perfect trip: Crafted by insiders, loved by explorers.</p>
                <Anchor to='/cities' className="bg-purple-700 shadow-sm font-semibold text-base md:text-xl text-white rounded-full hover:shadow-2xl hover:bg-purple-900 border-2 border-opacity-50 border-white pt-1.5 pb-2 px-3 my-4">Come check it!</Anchor>
            </div>
        </header>
    )
}

export default Header