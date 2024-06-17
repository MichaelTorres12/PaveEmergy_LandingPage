
import VisionIcon from '../assets/vision_icon.png';  // Icono de visión
import TeamIcon from '../assets/team_icon.png';  // Icono del equipo
import ValuesIcon from '../assets/values_icon.png';  // Icono de valores
import CapitalIcon from '../assets/capital_icon.png';  // Icono de capital
import ProjectImg1 from '../assets/project1.png';  // Imagen del proyecto 1
import ProjectImg2 from '../assets/project2.png';  // Imagen del proyecto 2
import TeamWorkImg from '../assets/team_work.png';  // Imagen del equipo trabajando

function AboutUs() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Sobre nosotros</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Visión */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center h-full">
            <h3 className="text-4xl font-bold mb-4">Visión</h3>
            <img src={VisionIcon} alt="Visión" className="h-12 w-12 mb-4" />
            <p className='text-xl'>Convertirnos en líderes en innovación de energía renovable, ofreciendo soluciones sostenibles que transformen la infraestructura vial y beneficien al medio ambiente.</p>
          </div>
          {/* El Equipo */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center h-full justify-center">
            <h3 className="text-4xl font-bold mb-4">El Equipo</h3>
            <img src={TeamIcon} alt="El Equipo" className="h-12 w-12 mb-4" />
            <p className='text-xl'>Somos estudiantes de Ingeniería en Desarrollo de Software en la Universidad Francisco Gavidia de El Salvador.</p>
          </div>
          {/* Proyecto 1 */}
          <div className="bg-gray-100  rounded-3xl shadow-md flex items-center justify-center h-full">
            <img src={TeamWorkImg} alt="Proyecto 1" className="w-full h-auto rounded-lg" />
          </div>
          {/* Proyecto 2 */}
          <div className="bg-gray-100 rounded-3xl shadow-md flex items-center justify-center h-full">
            <img src={ProjectImg1} alt="Proyecto 2" className="w-full h-auto rounded-lg" />
          </div>
          {/* Valores */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center h-full justify-center items-center">
            <h3 className="text-4xl font-bold mb-4">Valores</h3>
            <img src={ValuesIcon} alt="Valores" className="h-12 w-12 mb-4" />
            <p className='text-2xl gap-5'>Innovación<br/>Sostenibilidad<br/>Calidad</p>
          </div>
          {/* Capital Actual */}
          <div className="bg-black text-white p-6 rounded-lg shadow-md flex flex-col items-center h-full justify-center">
            <h3 className="text-4xl font-bold mb-4">Capital actual</h3>
            <p className="text-4xl font-bold">$2,000</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
