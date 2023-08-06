import './Header.css';

const Header = () => {
    return (
        <div className="wrapper h-screen overflow-y-auto overflow-x-hidden">
            <header className='relative flex justify-center items-center h-full'>
                <img src="https://i.postimg.cc/vmC38v7p/sky.png" className="sky absolute h-full w-full object-cover"/>
                <img src="https://i.postimg.cc/D0LD3Mtj/mountain.png" className="mountains absolute h-full w-full object-cover"/>
                <img src="https://i.postimg.cc/P5jHJmyv/trees.png" className="trees absolute h-full w-full object-cover"/>
                <h1 className="title text-7xl text-gray-50 font-semibold">Welcome!</h1>
            </header>
        </div>
    )
}

export default Header