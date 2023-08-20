import './Header.css';

const Header = () => {
    return (
        <header className='img-cover relative w-full h-screen'>
            <div className='absolute h-full w-full bg-black opacity-40'></div>
            <div className='hero absolute w-full h-full flex flex-col justify-center items-center md:items-start p-8 text-white md:p-20'>
                <p className='text-2xl md:text-3xl lg:text-4xl'>Welcome to</p>
                <h1 className='font-bold text-5xl md:text-7xl lg:text-8xl mb-2'>My<span className='text-purple-300'>Tinerary</span></h1>
                <p className='text-center md:text-start md:text-xl max-w-[70%] my-4'>Find your perfect trip, designed by insiders who know and love their cities.</p>
                <button className="bg-purple-700 shadow-sm font-semibold text-base md:text-xl text-white rounded-md hover:shadow-2xl hover:bg-purple-900 border-2 border-opacity-50 border-white pt-1 pb-1.5 md:pb-2 px-3 my-4">Come check it!</button>
            </div>
        </header>
    )
}

export default Header