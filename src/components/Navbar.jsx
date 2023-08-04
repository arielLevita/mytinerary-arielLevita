import NavbarLinks from './NavbarLinks';

export const Navbar = () => {

  const links = [
    {title: 'Home', to: '/home'},
    {title: 'Cities', to: '/cities'},
    {title: 'Stays', to: '/stays'},
    {title: 'Car rentals', to: '/car-rentals'}
  ]

  return (
    <div className="inline-flex justify-between items-center bg-gradient-to-r from-blue-400 bg-cyan-700 p-2 w-full">
      <img className='h-8 mx-12 aspect-square' src="https://i.postimg.cc/QMYfcPkT/mytinerary-logo.png" alt="logo" />
      <div className='me-2 text-purple-50'>
        {links.map((link) => (<NavbarLinks key={link.key} title={link.title} to={link.to}/>))}
      </div>
      <div className="inline-flex justify-between items-center">
        <button className=" bg-gradient-to-r from-purple-500 bg-purple-400 mx-2 px-3 py-1 text-sm shadow-sm font-medium tracking-wider  text-purple-100 rounded-full hover:shadow-2xl hover:bg-purple-700 hover:from-purple-700">Login</button>
        <img className='h-8 mx-2 aspect-square' src="https://i.postimg.cc/9MLsQhpR/blank-avatar.png" alt="blank avatar" />
      </div>
    </div>
  )
}
export default Navbar