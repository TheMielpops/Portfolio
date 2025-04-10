import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  Code,
  Gamepad,
  Network,
  Server,
  Shield,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      title: "Infrastructure Virtualisée Proxmox",
      icon: Server,
      category: "Infrastructure & Cloud",
      description:
        "Infrastructure complète virtualisée répondant aux besoins d'une entreprise moderne, avec une attention particulière à la redondance, la sécurité et la performance.",
      technologies: [
        "Proxmox VE comme hyperviseur principal",
        "pfSense pour le routage et la sécurité",
        "Windows Server 2022 pour les services Active Directory",
        "Linux (Debian/Ubuntu) pour les services web",
        "AWS pour des backups et serveur de secours",
      ],
      details: [
        "Configuration de clusters virtualisés",
        "Mise en place de solutions de haute disponibilité",
        "Gestion des backups et de la redondance",
        "Intégration avec les services cloud AWS",
      ],
    },
    {
      title: "Hardening Linux et Sécurité",
      icon: Shield,
      category: "Cybersécurité & Réseau",
      description:
        "Mise en place d'une infrastructure sécurisée avec des serveurs Linux renforcés, intégrant plusieurs couches de sécurité et de monitoring.",
      technologies: [
        "Web Application Firewall (WAF)",
        "OpenVPN et WireGuard",
        "Systèmes de détection d'intrusion",
        "Solutions anti-DDoS",
      ],
      details: [
        "Configuration de WAF pour la protection des applications web",
        "Mise en place de VPN pour accès sécurisé",
        "Protection contre les attaques DDoS",
        "Audit de sécurité et correction des vulnérabilités",
      ],
    },
    {
      title: "Infrastructure Web avec Nginx",
      icon: Network,
      category: "Cybersécurité & Réseau",
      description:
        "Déploiement d'une infrastructure web hautement disponible et sécurisée utilisant Nginx comme reverse proxy et load balancer.",
      technologies: ["Nginx", "SSL/TLS", "Load Balancing", "High Availability"],
      details: [
        "Configuration de Nginx comme reverse proxy",
        "Mise en place du load balancing",
        "Sécurisation des communications avec SSL/TLS",
        "Optimisation des performances",
      ],
    },
    {
      title: "Jeu Vidéo C#",
      icon: Gamepad,
      category: "Développement de Jeux",
      description:
        "Développement d'un jeu avec des mécaniques interactives avancées en C#.",
      technologies: [
        "C#",
        "Unity Engine",
        "Système de Physique",
        "Gestion des Collisions",
      ],
      details: [
        "Implémentation des mouvements du personnage avec système de gravité",
        "Système de combat avec tir d'armes",
        "Génération procédurale des vagues d'ennemis",
        "Interface utilisateur complète (menu principal, HUD, écran de fin)",
      ],
    },
    {
      title: "Site Web BDE IPSSI",
      icon: Code,
      category: "Développement Web",
      description:
        "Site web sécurisé pour le BDE de l'IPSSI Nice, intégrant des fonctionnalités avancées et une sécurité renforcée.",
      technologies: [
        "PHP",
        "MySQL",
        "Web Application Firewall",
        "Système de Hachage Sécurisé",
      ],
      details: [
        "Implémentation d'un système de salage des mots de passe",
        "Configuration d'un WAF pour la protection contre les attaques",
        "Gestion sécurisée des sessions utilisateurs",
        "Interface d'administration protégée",
      ],
    },
    {
      title: "API Films et Séries",
      icon: Code,
      category: "Développement Web",
      description:
        "Plateforme web avec API RESTful pour la gestion de films et séries, incluant un système de notation et de recherche avancé.",
      technologies: ["Node.js", "Express.js", "MySQL", "API RESTful"],
      details: [
        "Développement d'une API RESTful complète",
        "Implémentation des opérations CRUD pour les utilisateurs",
        "Système de recherche avancé par nom ou email",
        "Base de données relationnelle optimisée",
      ],
    },
    {
      title: "Serveur Web Sécurisé",
      icon: Shield,
      category: "Cybersécurité & Réseau",
      description:
        "Configuration d'un serveur web hautement sécurisé avec reverse proxy et système de détection d'intrusion.",
      technologies: ["Nginx", "Fail2Ban", "ModSecurity", "SSL/TLS"],
      details: [
        "Configuration du reverse proxy et proxy",
        "Mise en place de Fail2Ban pour la détection d'intrusion",
        "Configuration sécurisée des ports web",
        "Monitoring et logging avancé",
      ],
    },
  ];

  const categories = [...new Set(projects.map((project) => project.category))];
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProjects = selectedCategory
    ? projects.filter((project) => project.category === selectedCategory)
    : projects;

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
          className="max-w-6xl mx-auto"
        >
          <div className="flex flex-col justify-between gap-4 mb-12 md:flex-row md:items-center">
            <h1 className="text-4xl font-bold">Projets</h1>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === null
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                Tous
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory || "all"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-16"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-8 bg-card rounded-2xl"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <project.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <span className="block mb-1 text-sm text-primary">
                        {project.category}
                      </span>
                      <h2 className="text-2xl font-semibold">
                        {project.title}
                      </h2>
                    </div>
                  </div>

                  <p className="mb-8 text-muted-foreground">
                    {project.description}
                  </p>

                  {project.title === "Infrastructure Virtualisée Proxmox" && (
                    <div className="mb-8">
                      <img
                        src="/dist/infra.png"
                        alt="Infrastructure Diagram"
                        className="w-full h-auto border rounded-lg border-border"
                      />
                      <p className="mt-2 text-sm text-center text-muted-foreground">
                        Schéma de l'infrastructure
                      </p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div>
                      <h3 className="mb-4 text-lg font-semibold">
                        Technologies Utilisées
                      </h3>
                      <ul className="space-y-2 text-muted-foreground">
                        {project.technologies.map((tech, i) => (
                          <li key={i} className="flex items-center">
                            <span className="w-2 h-2 mr-3 rounded-full bg-primary" />
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="mb-4 text-lg font-semibold">
                        Détails du Projet
                      </h3>
                      <ul className="space-y-2 text-muted-foreground">
                        {project.details.map((detail, i) => (
                          <li key={i} className="flex items-center">
                            <span className="w-2 h-2 mr-3 rounded-full bg-primary" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
