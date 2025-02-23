import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <div className='flex border space-x-8 items-center pl-2 py-2'>
        <img className='w-[60px]' src='src/movielogo.webp' alt='Nothing to show' />

        <Link to='/' className='text-blue-400 text-xl font-medium'>Home</Link>
        <Link to='/watchlist' className='text-blue-400 text-xl font-medium' >Watch List</Link>
      </div>
    </>
  );
}
