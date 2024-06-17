
import UFGASU from '../assets/UFG+ASU.png';

function Apoyados() {
  return (
    <section id="apoyados" className="bg-white pt-12">
        <div className='flex flex-col items-center justify-center'>
            <h3 className='text-2xl font-bold'>Proyecto respaldado por:</h3>
            <img src={UFGASU} alt="UFG + ASU logo" width={550} />
        </div>
    </section>

  )
}

export default Apoyados;