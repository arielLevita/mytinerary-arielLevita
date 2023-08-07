import NavbarLinks from '../NavbarLinks/NavbarLinks';

const Navbar = () => {

  const links = [
    {key: 1, title: 'Home', to: '/home'},
    {key: 2, title: 'Cities', to: '/cities'},
    {key: 3, title: 'Stays', to: '/stays'},
    {key: 4, title: 'Car rentals', to: '/car-rentals'}
  ]

  return (
    <nav className="flex justify-between items-center bg-gradient-to-r from-blue-400 bg-cyan-700 p-2 w-full">
      <div>
        <img className='h-8 mx-4 aspect-square inline-block' src="https://i.postimg.cc/QMYfcPkT/mytinerary-logo.png" alt="logo" />
        <span className='text-white font-semibold'>MyTinerary</span>
      </div>
      <div>
        <div className='text-white inline-flex'>
          {links.map((link) => (<NavbarLinks key={link.key} title={link.title} to={link.to}/>))}
        </div>
        <div className="inline-flex justify-between items-center">
          <button className=" bg-gradient-to-r from-purple-500 bg-purple-400 mx-2 px-3 py-1 text-sm shadow-sm font-medium tracking-wider  text-white rounded-full hover:shadow-2xl hover:bg-purple-700 hover:from-purple-700">Login</button>
          <img className='h-8 mx-2 aspect-square' src="https://i.postimg.cc/9MLsQhpR/blank-avatar.png" alt="blank avatar" />
        </div>
      </div>
    </nav>
  )
}
export default Navbar