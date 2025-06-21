
import { ArrowLeft, Phone, Mail, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Isai Beltran",
      roles: ["PM", "Diseñador (UX UI)"],
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      gradient: "from-blue-500 to-cyan-500",
      description: "Líder visionario que guía el proyecto con experiencia en gestión y diseño de experiencias excepcionales.",
      contact: {
        phone: "+1 (555) 123-4567",
        email: "isai.beltran@company.com",
        github: "https://github.com/isaibeltran"
      }
    },
    {
      name: "Carlos Marte",
      roles: ["Desarrollador Front", "Desarrollador Back", "Diseñador (UX UI)", "Team Leader"],
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      gradient: "from-orange-500 to-red-500",
      description: "Desarrollador full-stack excepcional y líder técnico que impulsa la innovación en cada línea de código.",
      contact: {
        phone: "+1 (555) 234-5678",
        email: "carlos.marte@company.com",
        github: "https://github.com/carlosmarte"
      }
    },
    {
      name: "Herdel Herrera",
      roles: ["Desarrollador BackEnd", "Administrador de Bases de datos"],
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
      gradient: "from-cyan-500 to-blue-600",
      description: "Arquitecto de datos y especialista backend que construye la infraestructura sólida de nuestras aplicaciones.",
      contact: {
        phone: "+1 (555) 345-6789",
        email: "herdel.herrera@company.com",
        github: "https://github.com/herdelherrera"
      }
    },
    {
      name: "Jin Ming",
      roles: ["Tester", "Desarrollador Front"],
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
      gradient: "from-red-400 to-orange-500",
      description: "Especialista en calidad y desarrollo frontend que asegura la excelencia en cada detalle del producto.",
      contact: {
        phone: "+1 (555) 456-7890",
        email: "jin.ming@company.com",
        github: "https://github.com/jinming"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-orange-50">
      {/* Header with Navigation */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-orange-500 opacity-90"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
        
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
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <Dialog key={member.name}>
                <DialogTrigger asChild>
                  <Card className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer">
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
                      <h3 className="text-2xl font-bold text-gray-800 text-center mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-orange-500 group-hover:bg-clip-text transition-all duration-500">
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
                      <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-orange-400/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                      <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                    </div>
                  </Card>
                </DialogTrigger>
                
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-center text-2xl font-bold">
                      Contacta a {member.name}
                    </DialogTitle>
                  </DialogHeader>
                  
                  <div className="flex flex-col space-y-4 pt-4">
                    <div className="flex items-center space-x-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                      <Phone className="h-5 w-5 text-blue-600" />
                      <div>
                        <p className="font-medium">Teléfono</p>
                        <p className="text-gray-600">{member.contact.phone}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                      <Mail className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="font-medium">Correo</p>
                        <p className="text-gray-600">{member.contact.email}</p>
                      </div>
                    </div>
                    
                    <a 
                      href={member.contact.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <Github className="h-5 w-5 text-gray-800" />
                      <div>
                        <p className="font-medium">GitHub</p>
                        <p className="text-gray-600">Ver perfil</p>
                      </div>
                    </a>
                  </div>
                </DialogContent>
              </Dialog>
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
            soluciones digitales que superan las expectaciones y transforman ideas en realidad.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
