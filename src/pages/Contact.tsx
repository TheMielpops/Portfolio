import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Linkedin, Github, Mail, Phone, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const contactMethods = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Noah Dauge',
      link: 'https://www.linkedin.com/in/noah-dauge-969039236',
      color: 'hover:text-blue-500'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'TheMielpops',
      link: 'https://github.com/TheMielpops',
      color: 'hover:text-gray-400'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'noah05dauge@gmail.com',
      link: 'mailto:noah05dauge@gmail.com',
      color: 'hover:text-red-500'
    },
    {
      icon: Phone,
      label: 'Téléphone',
      value: '06 38 56 34 49',
      link: 'tel:+33638563449',
      color: 'hover:text-green-500'
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
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8">Contact</h1>

          <div className="bg-card rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.label}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex items-center p-6 bg-secondary rounded-xl group transition-colors ${method.color}`}
                >
                  <div className="mr-6">
                    <method.icon className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">
                      {method.label}
                    </h3>
                    <p className="text-lg font-semibold group-hover:text-current">
                      {method.value}
                    </p>
                  </div>
                  <ExternalLink className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 text-center text-muted-foreground"
            >
              <p>N'hésitez pas à me contacter pour toute opportunité ou collaboration.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;