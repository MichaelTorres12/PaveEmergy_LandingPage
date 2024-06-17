
import BackgroundImage from '../assets/background_contact.jpg'; // Imagen de fondo para la sección de contacto

function ContactForm() {
  return (
    <section id="contact" className="bg-blue-600 py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 w-full relative mb-8 md:mb-0">
          <img src={BackgroundImage} alt="Background" className="object-cover w-full h-full rounded-lg" />
        </div>
        <div className="md:w-1/2 w-full bg-blue-600 text-white p-8 ">
          <h2 className="text-3xl font-bold mb-6">Contáctanos</h2>
          <form>
            <div className="mb-4">
              <label className="block text-white mb-2" htmlFor="name">Nombre completo:</label>
              <input className="w-full p-3 rounded bg-white text-gray-900" type="text" id="name" name="name" placeholder="Tu nombre completo" />
            </div>
            <div className="mb-4">
              <label className="block text-white mb-2" htmlFor="email">Correo electrónico:</label>
              <input className="w-full p-3 rounded bg-white text-gray-900" type="email" id="email" name="email" placeholder="Tu correo electrónico" />
            </div>
            <div className="mb-4 flex space-x-4">
              <div className="w-1/2">
                <label className="block text-white mb-2" htmlFor="phone">Número telefónico:</label>
                <input className="w-full p-3 rounded bg-white text-gray-900" type="tel" id="phone" name="phone" placeholder="Tu número telefónico" />
              </div>
              <div className="w-1/2">
                <label className="block text-white mb-2" htmlFor="reason">Motivo:</label>
                <select className="w-full p-3 rounded bg-white text-gray-900" id="reason" name="reason">
                  <option value="">Selecciona un motivo</option>
                  <option value="consultation">Consulta</option>
                  <option value="quotation">Cotización</option>
                  <option value="support">Soporte</option>
                </select>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-white mb-2" htmlFor="message">Mensaje:</label>
              <textarea className="w-full p-3 rounded bg-white text-gray-900" id="message" name="message" rows="4" placeholder="Escribe tu mensaje"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-yellow-400 text-gray-900 font-bold py-3 px-6 rounded text-2xl">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
