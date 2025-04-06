import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight, Code, Server, Shield, Network, Linkedin, Github, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const backgroundOpacity = Math.max(0, 1 - scrollY / 500);

  const projects = [
    {
      title: "Site web BDE IPSSI",
      description: "Site web sécurisé pour le BDE de mon école IPSSI. Un projet complet intégrant sécurité et fonctionnalités avancées.",
      category: "Développement Web"
    },
    {
      title: "Site de films et séries",
      description: "Plateforme web avec base de données et système de notation.",
      category: "Développement Web"
    },
    {
      title: "Infrastructure bancaire sécurisée",
      description: "Mise en place d'un réseau sécurisé pour une banque fictive.",
      category: "Cybersécurité & Réseau"
    },
    {
      title: "Serveur web sécurisé",
      description: "Projet axé sur la cybersécurité avec reverse proxy.",
      category: "Cybersécurité & Réseau"
    },
    {
      title: "Jeu vidéo C#",
      description: "Développement d'un jeu avec des mécaniques interactives.",
      category: "Développement de Jeux"
    }
  ];

  const skills = [
    {
      title: "Développement",
      icon: Code,
      items: ["React.js", "HTML5 / PHP / SQL", "Node.js / Express", "Git / GitHub"]
    },
    {
      title: "Architecture Réseau",
      icon: Network,
      items: ["Architecture Réseau Cisco", "Conception réseaux d'entreprise", "Routage et Switching"]
    },
    {
      title: "Administration Système",
      icon: Server,
      items: ["Windows Server 2022", "Linux Server", "Scripting Bash", "Cloud AWS"]
    },
    {
      title: "Cybersécurité",
      icon: Shield,
      items: ["Tests de Pénétration", "Sécurité des Réseaux", "OWASP", "Analyse de Vulnérabilités"]
    }
  ];

  const contacts = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/noah-dauge-969039236",
      color: "hover:text-blue-500"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/TheMielpops",
      color: "hover:text-gray-400"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:noah05dauge@gmail.com",
      color: "hover:text-red-500"
    }
  ];

  return (
    <>
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{ 
          opacity: backgroundOpacity,
          background: 'radial-gradient(circle at 50% 50%, rgba(239, 68, 68, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
        }}
      />
      
      <div className="relative">
        {/* Hero Section */}
        <div className="min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="relative w-32 h-32 mx-auto mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-rose-700 rounded-full blur-lg opacity-50" />
              <img
                src="/public/ND.jpg"
                alt="Profile"
                className="relative w-full h-full rounded-full object-cover border-2 border-primary"
              />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold">
              <TypeAnimation
                sequence={[
                  'Admin Réseau',
                  2000,
                  'Cybersécurité',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="gradient-text"
              />
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Étudiant en informatique à l'IPSSI Nice, passioné par le
              réseau et cybersécurité.
            </p>

            <Link
              to="/about"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Découvrir
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        {/* Skills Section */}
        <section className="py-20 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-center mb-16">Compétences</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card p-6 rounded-lg hover:bg-card/80 transition-colors"
                >
                  <skill.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-4">{skill.title}</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    {skill.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section className="py-20 px-4 bg-card/30">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-center mb-16">Projets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card p-6 rounded-lg hover:bg-card/80 transition-colors"
                >
                  <div className="text-primary text-sm font-medium mb-2">{project.category}</div>
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-16">Contact</h2>
            <div className="flex justify-center items-center space-x-8">
              {contacts.map((contact, index) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex flex-col items-center space-y-2 text-muted-foreground ${contact.color} transition-colors`}
                >
                  <contact.icon className="h-8 w-8" />
                  <span className="text-sm font-medium">{contact.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default Home;