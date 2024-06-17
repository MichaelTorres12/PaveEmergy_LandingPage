
import { scrollToSection } from '../utils/scrollToSection';

function Menu() {
  return (
    <nav>
      <ul className="flex space-x-10 text-xl">
        <li><a href="" onClick={(e) => scrollToSection(e, 'inicio')} className="text-gray-600">Inicio</a></li>
        <li><a href="" onClick={(e) => scrollToSection(e, 'soluciones')} className="text-gray-600">Soluciones</a></li>
        <li><a href="" onClick={(e) => scrollToSection(e, 'about')} className="text-gray-600">Nosotros</a></li>
        <li><a href="" onClick={(e) => scrollToSection(e, 'tecnologia')} className="text-gray-600">Tecnología</a></li>
        <li><a href="" onClick={(e) => scrollToSection(e, 'clientes')} className="text-gray-600">Clientes</a></li>
        <li><a href="" onClick={(e) => scrollToSection(e, 'contacto')} className="text-gray-600">Contáctanos</a></li>
      </ul>
    </nav>
  );
}

export default Menu;
