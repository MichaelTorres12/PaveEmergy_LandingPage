
import { scrollToSection } from '../utils/scrollToSection';
import HeroSectionImg from '../assets/HeroSectionImg2.png';
import AhorroImg from '../assets/ahorro.png';
import SostenibilidadImg from '../assets/sostenibilidad.png';
import InnovacionImg from '../assets/innovacion.png';
import RayoEnergia from '../assets/rayo.png';

function Hero() {
  return (
    <section id="inicio" className="bg-white pb-5">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 w-full">
          <img src={HeroSectionImg} alt="Innovación en energía renovable" className="w-full h-auto object-cover" />
        </div>
        <div className="md:w-1/2 w-full text-center p-6">
          <h2 className="text-7xl font-bold mb-6">Innovación en <span className="text-green-500">energía renovable</span></h2>
          <p className="text-xl font-regular mb-1 p-3">En PaveEnergy, estamos revolucionando la forma en que generamos y utilizamos la energía. Nuestra misión es aprovechar el constante flujo vehicular para producir electricidad sostenible mediante sistemas piezoeléctricos integrados en la infraestructura vial.</p>

        <div className='flex mb-8 items-center justify-center'>
            <img src={RayoEnergia} alt="rayo" />
            <img src={RayoEnergia} alt="rayo" />
            <img src={RayoEnergia} alt="rayo" />
            <img src={RayoEnergia} alt="rayo" />
            <img src={RayoEnergia} alt="rayo" />
        </div>

          <a href="" onClick={(e) => scrollToSection(e, 'soluciones')} className="bg-blue-500 text-white px-4 py-2 text-2xl rounded inline-flex items-center">
            Solución
          </a>

          
          <div className="flex justify-around mt-6 gap-10">
            <div className='flex items-center'>
                <div className="flex items-center bg-[#ebebeb] rounded-full w-16 h-16 justify-center">
                    <img src={AhorroImg} alt="Ahorro" className="h-10 w-10" />
                </div>
                <span className="ml-2 text-2xl font-medium">Ahorro</span>
            </div>
            <div className='flex items-center'>
                <div className="flex items-center bg-[#ebebeb] rounded-full w-16 h-16 justify-center">
                    <img src={SostenibilidadImg} alt="Ahorro" className="h-10 w-10" />
                </div>
                <span className="ml-2 text-2xl font-medium">Sostenibilidad</span>
            </div>
            <div className='flex items-center'>
                <div className="flex items-center bg-[#ebebeb] rounded-full w-16 h-16 justify-center">
                    <img src={InnovacionImg} alt="Ahorro" className="h-10 w-10" />
                </div>
                <span className="ml-2 text-2xl font-medium">Innovación</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
