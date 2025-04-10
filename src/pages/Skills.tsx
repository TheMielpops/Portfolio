import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Network, Server, Shield, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

const Skills = () => {
  const skillCategories = [
    {
      title: "Architecture Réseau",
      icon: Network,
      description: "Expertise en conception et gestion d'infrastructures réseau",
      skills: [
        {
          title: "Gestion d'Infrastructures Réseaux",
          description: "Configuration et maintenance d'infrastructures réseau complexes, mise en place de solutions de routage et de commutation avancées."
        },
        {
          title: "Architecture Réseaux Cisco",
          description: "Conception et implémentation de topologies réseau, configuration de VLANs, routage inter-VLAN, et protocoles de routage."
        },
        {
          title: "Virtualisation en Cluster",
          description: "Mise en place de solutions de haute disponibilité avec reverse proxy web et load balancer pour optimiser la distribution du trafic et assurer la continuité de service."
        }
      ]
    },
    {
      title: "Administration Système",
      icon: Server,
      description: "Maîtrise des environnements Linux et Windows Server",
      skills: [
        {
          title: "Administration Linux",
          description: "Gestion avancée de systèmes Linux, configuration de services, optimisation des performances et maintenance système."
        },
        {
          title: "Windows Server",
          description: "Administration d'Active Directory, création et gestion de GPOs, gestion des droits utilisateurs et des ressources partagées."
        },
        {
          title: "Virtualisation Proxmox",
          description: "Création et gestion d'environnements virtualisés, configuration de clusters, migration à chaud et backup de machines virtuelles."
        }
      ]
    },
    {
      title: "Cybersécurité",
      icon: Shield,
      description: "Expertise en sécurisation d'infrastructures et tests d'intrusion",
      skills: [
        {
          title: "Hardening Linux",
          description: "Mise en place de systèmes Linux sécurisés avec WAF, VPN, et pare-feu. Configuration de règles de sécurité strictes et monitoring des accès."
        },
        {
          title: "Sécurité Réseau",
          description: "Configuration de réseaux sécurisés, segmentation, mise en place de zones démilitarisées (DMZ) et politique de sécurité réseau."
        },
        {
          title: "Tests de Pénétration",
          description: "Réalisation d'audits de sécurité, identification des vulnérabilités, tests d'intrusion et recommandations de sécurité."
        }
      ]
    }
  ];

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
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8">Compétences</h1>
          
          <div className="space-y-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold">{category.title}</h2>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.1) }}
                      className="bg-card p-6 rounded-lg hover:bg-card/80 transition-colors"
                    >
                      <h3 className="text-lg font-semibold mb-3">{skill.title}</h3>
                      <p className="text-muted-foreground text-sm">{skill.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;