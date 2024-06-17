
import PiezoelectricImg from '../assets/piezoelectric.png'; 
import VehicleImg from '../assets/vehicle.png'; 
import BatteryImg from '../assets/battery.png'; 
import TrafficLightImg from '../assets/traffic_light.png'; 
import SignalLightImg from '../assets/signal_light.png';  

function TechnologySection() {
  return (
    <section id="technology" className="bg-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">¿Cómo funciona nuestra tecnología?</h2>
        <div className="flex flex-col space-y-12">

          {/* Sección 1 */}
          <div className="flex flex-col md:flex-row items-center md:space-x-6 bg-blue-100 rounded-lg">
            <img src={PiezoelectricImg} alt="Tecnología piezoeléctrica" className="md:w-1/3 w-full rounded-lg" />
            <p className="md:w-2/3 w-full text-left text-2xl px-16">
              Los productos de PaveEnergy Technologies aprovechan la tecnología piezoeléctrica de una manera totalmente innovadora en el mercado para transformar la energía mecánica de los vehículos en movimiento en energía eléctrica.
            </p>
          </div>

          {/* Sección 2 */}
          <div className="flex flex-col md:flex-row items-center md:space-x-6 bg-yellow-100 rounded-lg">
            <p className="md:w-2/3 w-full text-left text-2xl px-16">
              Imagina que un vehículo pasa sobre una de nuestras placas piezoeléctricas modulares, túmulos, o dispositivos reductores de velocidad (cepillitos) instalados en la carretera, vía pública, centros comerciales y demás lugares que componen nuestra alta gama de clientes. <br /> <br /> La presión ejercida por el peso del vehículo provoca una deformación en el material piezoeléctrico incrustado en estas estructuras, y esta deformación de los materiales genera una carga eléctrica.
            </p>
            <img src={VehicleImg} alt="Vehículo" className="md:w-2/5 w-full rounded-lg" />
          </div>

          {/* Sección 3 */}
          <div className="flex flex-col md:flex-row items-center md:space-x-6 bg-green-100 rounded-lg">
            <img src={BatteryImg} alt="Batería" className="md:w-1/3 w-full rounded-lg" />
            <p className="md:w-2/3 w-full text-left text-2xl px-16">
              Dicha energía generada es convertida, tratada y corregida de una manera altamente eficaz. Una vez generada, esta energía eléctrica se dirige hacia nuestras baterías de alta capacidad donde se almacena para su posterior uso. Ahora bien, esta energía almacenada está lista para ser distribuida y utilizada según las necesidades.
            </p>
          </div>
          
          {/* Sección 4 */}
          <div className="h-[300px] flex flex-col md:flex-row items-center md:space-x-6 bg-blue-100 rounded-lg justify-center ">
             <img src={TrafficLightImg} alt="Semáforo" className="w-[150px] rounded-lg" />
            <p className="md:w-2/3 w-full text-left text-4xl font-semibold px-16 flex">
            <strong className="bg-yellow-300 text-center"> Por ejemplo, puede alimentar semáforos, iluminación vial, plumas comerciales, parques o cualquier otra infraestructura cercana que requiera energía eléctrica. </strong>
            </p>
              <img src={SignalLightImg} alt="Luz de señal" className="w-[100px] rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechnologySection;
