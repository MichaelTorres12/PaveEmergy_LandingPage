
import Menu from './Menu';
import LogoPNG from '../assets/logopng.png';

function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className='flex items-center gap-2'>
            <img src={LogoPNG} alt="PaveEnergy logo" width={60} height={60}/>
        <h1 className="text-2xl font-bold text-[#200D54]">PaveEnergy</h1>
        </div>
        <Menu />
      </div>
    </header>
  );
}

export default Header;
