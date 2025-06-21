
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Isai Beltran",
      roles: ["PM", "Diseñador (UX UI)"],
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      gradient: "from-purple-500 to-pink-500",
      description: "Líder visionario que guía el proyecto con experiencia en gestión y diseño de experiencias excepcionales."
    },
    {
      name: "Carlos Marte",
      roles: ["Desarrollador Front", "Desarrollador Back", "Diseñador (UX UI)", "Team Leader"],
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      gradient: "from-blue-500 to-cyan-500",
      description: "Desarrollador full-stack excepcional y líder técnico que impulsa la innovación en cada línea de código."
    },
    {
      name: "Herdel Herrera",
      roles: ["Desarrollador BackEnd", "Administrador de Bases de datos"],
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
      gradient: "from-green-500 to-emerald-500",
      description: "Arquitecto de datos y especialista backend que construye la infraestructura sólida de nuestras aplicaciones."
    },
    {
      name: "Jin Ming",
      roles: ["Tester", "Desarrollador Front"],
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
      gradient: "from-orange-500 to-red-500",
      description: "Especialista en calidad y desarrollo frontend que asegura la excelencia en cada detalle del producto."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header with Navigation */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        
        <div className="relative px-6 py-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <Link to="/">
                <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Volver al Home
                </Button>
              </Link>
              
              {/* Logo placeholder */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">LOGO</span>
                </div>
              </div>
            </div>

            <div className="text-center text-white">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Sobre Nosotros
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Conoce al talentoso equipo que hace posible esta increíble experiencia digital
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Nuestro Equipo
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card 
                key={member.name} 
                className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative p-8">
                  {/* Avatar and Gradient Background */}
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
                    <div className="relative">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-24 h-24 rounded-2xl mx-auto object-cover border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Name */}
                  <h3 className="text-2xl font-bold text-gray-800 text-center mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-500">
                    {member.name}
                  </h3>

                  {/* Roles */}
                  <div className="flex flex-wrap gap-2 justify-center mb-6">
                    {member.roles.map((role, roleIndex) => (
                      <span
                        key={roleIndex}
                        className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${member.gradient} text-white shadow-lg hover:shadow-xl transition-shadow duration-300`}
                      >
                        {role}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-center leading-relaxed group-hover:text-gray-700 transition-colors duration-500">
                    {member.description}
                  </p>

                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h3 className="text-3xl font-bold text-white mb-4">
            Juntos Creamos Experiencias Extraordinarias
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            Nuestro equipo multidisciplinario combina creatividad, tecnología y pasión para desarrollar 
            soluciones digitales que superan las expectativas y transforman ideas en realidad.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
