
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-orange-50 to-red-50">
      <div className="text-center max-w-2xl mx-auto px-6">
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-orange-500 to-red-500 bg-clip-text text-transparent">
          Bienvenido a Nuestra App
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Descubre quiénes somos y conoce al increíble equipo detrás de esta experiencia digital
        </p>
        
        <div className="space-y-4">
          <Link to="/about">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Conocer Nuestro Equipo
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
