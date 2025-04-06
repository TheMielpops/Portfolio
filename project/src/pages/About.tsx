import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-[calc(100vh-5rem)] py-16">
      <div className="container mx-auto px-4">
        {/* Back button */}
        <Link 
          to="/" 
          className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour à l'Accueil
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left column with image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl -z-10" />
              <img
                src="/public/ND.jpg"
                alt="Profile"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
              <div className="absolute top-4 left-4">
                <h2 className="text-sm font-medium mb-1">Recheche de stage en</h2>
                <h3 className="text-lg font-bold text-primary">cybersécurité & réseau</h3>
              </div>
            </div>

            {/* Right column with text content */}
            <div className="space-y-6">
              <h1 className="text-4xl font-bold mb-6">À Propos de Moi</h1>
              <p className="text-lg text-muted-foreground">
                Je m'appelle Noah Dauge, étudiant à l'IPSSI Nice, passionné par le réseau et la
                cybersécurité. Mon parcours m'a permis d'acquérir des compétences solides en
                architecture réseau, administration système, et développement. Je suis toujours à la
                recherche de nouveaux défis et d'opportunités pour apprendre et grandir
                dans le domaine de la cybersécurité.
              </p>
            </div>
          </div>

          {/* CV Section */}
          <div className="mt-16 p-8 bg-card rounded-2xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2">
                <p className="text-muted-foreground">Dernière mise à jour : 02/04/2025</p>
                <h3 className="text-xl font-semibold">Mon CV est disponible au téléchargement</h3>
              </div>
              <button className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors">
                <Download className="h-4 w-4 mr-2" />
                Télécharger mon CV
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;