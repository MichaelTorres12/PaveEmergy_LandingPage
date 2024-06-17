import { scrollToSection } from '../utils/scrollToSection';
import EngineerImg from '../assets/engineer.png';  // Asegúrate de que esta ruta es correcta
import ModularImg from '../assets/modular.png';
import ElectricalImg from '../assets/electrical.png';
import AppMonitorImg from '../assets/app_monitor.png';

function Soluciones() {
  return (
    <section id="soluciones" className="bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-16">
        <div className="md:w-2/5 w-full relative">
          <img src={EngineerImg} alt="Ingeniero" className="w-full h-auto object-cover" />
        </div>
        <div className="md:w-3/5 w-full text-left p-6 pl-16">
          <h2 className="text-5xl font-bold mb-10">Nuestra Solución</h2>
          <p className="mb-16 text-xl">
            En PaveEnergy, hemos desarrollado un innovador Sistema de Captura de Energía Vehicular (S-CEV) que transforma el flujo vehicular en electricidad limpia utilizando tecnología piezoeléctrica. Nuestro sistema se integra directamente en la infraestructura vial existente, capturando la energía mecánica generada por el paso de los vehículos y convirtiéndola en electricidad utilizable.
          </p>

          <a href="" onClick={(e) => scrollToSection(e, 'soluciones')} className="bg-blue-500 text-white px-4 py-2 text-xl rounded inline-flex items-center">
            Solución
          </a>
        </div>
      </div>
    </section>
  );
}

export default Soluciones;
