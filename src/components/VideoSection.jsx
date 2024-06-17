
import VideoSrc from '../assets/video.mp4';  // Ruta del video

function VideoSection() {
  return (
    <section id="video" className="bg-white pt-12 text-center">
      <h3 className="text-2xl font-medium mb-6">Mira nuestros Sistemas de Captura de Energía Vehicular en acción</h3>
      <div className="container mx-auto">
        <div className="relative flex justify-center">
          <video controls className="w-[700px] h-auto rounded-lg shadow-lg">
            <source src={VideoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
