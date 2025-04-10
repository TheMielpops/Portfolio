import { motion } from "framer-motion";
import { ArrowLeft, Download } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-[calc(100vh-5rem)] py-16">
      <div className="container px-4 mx-auto">
        {/* Back button */}
        <Link
          to="/"
          className="inline-flex items-center mb-8 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour à l'Accueil
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main content */}
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {/* Left column with image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl -z-10" />
              {/* TODO: Remplacez l'URL ci-dessous par l'URL de votre photo de profil */}
              <img
                src="../dist/assets/photo.jpg"
                alt="Profile"
                className="w-full h-auto shadow-xl rounded-2xl"
              />
              <div className="absolute top-4 left-4">
                <h2 className="mb-1 text-sm font-medium">
                  Recheche de stage en
                </h2>
                <h3 className="text-lg font-bold text-primary">
                  cybersécurité & réseau
                </h3>
              </div>
            </div>

            {/* Right column with text content */}
            <div className="space-y-6">
              <h1 className="mb-6 text-4xl font-bold">À Propos de Moi</h1>
              <p className="text-lg text-muted-foreground">
                Je m'appelle Noah Dauge, étudiant à l'IPSSI Nice, passionné par
                le réseau et la cybersécurité. Mon parcours m'a permis
                d'acquérir des compétences solides en architecture réseau,
                administration système, et développement. Je suis toujours à la
                recherche de nouveaux défis et d'opportunités pour apprendre et
                grandir dans le domaine de la cybersécurité.
              </p>
            </div>
          </div>

          {/* CV Section */}
          <div className="p-8 mt-16 bg-card rounded-2xl">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  Dernière mise à jour : 02/04/2025
                </p>
                <h3 className="text-xl font-semibold">
                  Mon CV est disponible au téléchargement
                </h3>
              </div>
              <button className="inline-flex items-center px-6 py-3 font-medium transition-colors rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Download className="w-4 h-4 mr-2" />
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
