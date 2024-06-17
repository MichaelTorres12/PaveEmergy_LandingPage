
import HandWithAppImg from '../assets/hand_with_app.png';  // Asegúrate de que esta ruta es correcta
import MonitorImg from '../assets/monitor.png';
import AlertImg from '../assets/alert.png';
import AnalysisImg from '../assets/analysis.png';
import SupportImg from '../assets/support.png';
import PlayStoreImg from '../assets/playstore.png';

function AppSection() {
  return (
    <section id="app" className="bg-white pt-28">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-16">
        <div className="md:w-3/5 w-full text-left pl-28 mr-10">
          <h2 className="text-6xl font-bold mb-12 text-[#232184]">PaveEnergy APP <br /> te ayudará día a día</h2>
          <div className="mb-4">
            <div className="flex items-center mb-4">
              <div className="bg-[#7674DE] rounded-full p-2 mr-4">
                <img src={MonitorImg} alt="Monitoreo en Tiempo Real" className="h-8 w-10" />
              </div>
              <p className=' text-xl mb-4'><strong className="bg-yellow-300 p-1">Monitoreo en Tiempo Real:</strong> Mantente al tanto del rendimiento y energía generada en cualquier momento.</p>
            </div>
            <div className="flex items-center mb-4">
              <div className="bg-[#7674DE] rounded-full p-2 mr-4">
                <img src={AlertImg} alt="Alertas Proactivas" className="h-8 w-10" />
              </div>
              <p className=' text-xl mb-4' ><strong className="bg-yellow-300 p-1">Alertas Proactivas:</strong> Recibe notificaciones instantáneas sobre cualquier anomalía o mantenimiento requerido.</p>
            </div>
            <div className="flex items-center mb-4">
              <div className="bg-[#7674DE] rounded-full p-2 mr-4">
                <img src={AnalysisImg} alt="Análisis Estadístico" className="h-8 w-12" />
              </div>
              <p className=' text-xl mb-4' ><strong className="bg-yellow-300 p-1">Análisis Estadístico:</strong> Explora datos detallados y tendencias de rendimiento a lo largo del tiempo, facilitando la toma de decisiones.</p>
            </div>
            <div className="flex items-center mb-4">
              <div className="bg-[#7674DE] rounded-full p-2 mr-4">
                <img src={SupportImg} alt="Servicio al Cliente Integrado" className="h-8 w-12" />
              </div>
              <p className=' text-xl mb-4' ><strong className="bg-yellow-300 p-1">Servicio al Cliente Integrado:</strong> ¿Necesitas ayuda o tienes alguna pregunta? Nuestro equipo de soporte está a un clic de distancia.</p>
            </div>
          </div>
          <div className="mt-8">
            <p className="font-semibold text-xl mb-4">¡Descarga PaveEnergy APP totalmente gratis!</p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded inline-flex items-center">
                <img src={PlayStoreImg} alt="PlayStore" className="h-8 w-8 mr-2" />
                PlayStore
              </a>
              
            </div>
          </div>
        </div>
        <div className="md:w-2/5 w-full flex justify-center">
          <img src={HandWithAppImg} alt="PaveEnergy APP" className="w-full h-auto object-cover" />
        </div>
      </div>
    </section>
  );
}

export default AppSection;
