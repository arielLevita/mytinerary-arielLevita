import './Header.css';

const Header = () => {
    return (
        <header className='img-cover relative w-full'>
            <div className='absolute h-full w-full bg-black opacity-40'></div>
            <div className='hero absolute flex flex-col items-start'>
                <p>Welcome to</p>
                <h1 className='font-bold'>My<span className='text-purple-300'>Tinerary</span></h1>
                <p>Find your perfect trip, designed by insiders who know and love their cities.</p>
                <button className="bg-purple-700 shadow-sm font-semibold text-white rounded-md hover:shadow-2xl hover:bg-purple-900 border-2 border-opacity-50 border-white">Come check it!</button>
            </div>
        </header>
    )
}

export default Header