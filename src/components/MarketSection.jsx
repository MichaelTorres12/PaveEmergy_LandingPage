
import CommercialImg from '../assets/comercial.jpg';  // Imagen de un centro comercial
import IndustrialImg from '../assets/industrial.jpg';  // Imagen de una área industrial
import ResidentialImg from '../assets/residencial.jpg';  // Imagen de una área residencial

function MarketSection() {
  return (
    <section id="market" className="bg-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Nuestros clientes potenciales</h2>
        <p className="mb-12 text-lg text-gray-700">Nos enfocamos en ofrecer soluciones innovadoras de energía renovable para diversos sectores del mercado. Aquí hay algunos ejemplos de nuestros clientes potenciales:</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Centro comercial */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center">
            <img src={CommercialImg} alt="Centro comercial" className="h-48 w-full object-cover mb-4 rounded-md" />
            <h3 className="text-2xl font-bold mb-4">Centros comerciales</h3>
            <p>Soluciones energéticas sostenibles para áreas de alto tráfico y consumo energético.</p>
          </div>
          {/* Área industrial */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center">
            <img src={IndustrialImg} alt="Área industrial" className="h-48 w-full object-cover mb-4 rounded-md" />
            <h3 className="text-2xl font-bold mb-4">Áreas industriales</h3>
            <p>Energía renovable para reducir costos y mejorar la eficiencia energética en industrias.</p>
          </div>
          {/* Área residencial */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center">
            <img src={ResidentialImg} alt="Área residencial" className="h-48 w-full object-cover mb-4 rounded-md" />
            <h3 className="text-2xl font-bold mb-4">Áreas residenciales</h3>
            <p>Soluciones limpias y sostenibles para hogares y comunidades.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MarketSection;
