import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Code } from 'lucide-react'

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: 'briefcase' | 'graduation' | 'code';
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "2014 - 2016",
    title: "CAP Boulangerie",
    description: "J’ai obtenu mon CAP Boulanger, une formation qui m’a permis de maîtriser les techniques essentielles de la boulangerie, notamment la préparation des pâtes, la fermentation et la cuisson. Cette formation m’a également enseigné la rigueur et l’organisation nécessaires pour répondre aux exigences de qualité et de rapidité du métier de boulanger.",
    icon: 'graduation'
  },
  {
    year: "2016 - 2018",
    title: "BP Boulangerie",
    description: "Mon BP Boulanger a approfondi mes compétences en boulangerie, en m’enseignant des techniques avancées de production et de création de produits boulangers. J'ai développé des compétences en gestion de production, en contrôle qualité, et en innovation de recettes, ce qui m’a permis de perfectionner mon savoir-faire artisanal et de mieux comprendre les aspects techniques et économiques du métier.",
    icon: 'graduation'
  },
  {
    year: "2018 - 2022",
    title: "Manager en Boulangerie",
    description: "En tant que manager en boulangerie, j’ai supervisé et coordonné les équipes de production, assurant le respect des standards de qualité et d’hygiène. Ce poste m’a permis de développer des compétences en gestion de personnel, en organisation du travail et en optimisation de la production pour garantir l'efficacité et la satisfaction client. Mon rôle impliquait également de motiver et former l’équipe pour maintenir une dynamique positive et productive au sein de l'atelier.",
    icon: 'briefcase'
  },
  {
    year: "2022 - 2024",
    title: "Web@cadémie by Epitech",
    description: "Mes deux années à la Web@cadémie ont marqué le début de mon parcours en développement web. J'y ai appris les bases du codage, des langages et des outils essentiels pour le développement web, tout en me familiarisant avec la résolution de problèmes complexes. Cette formation intensive m’a permis de gagner en autonomie et en compétences techniques, me conduisant aujourd'hui à travailler en alternance en tant que développeur web média et à évoluer vers des responsabilités en gestion de projets.",
    icon: 'code'
  },
  {
    year: "2024 - Aujourd'hui",
    title: "Nexa Digital School",
    description: "Depuis décembre, j’ai intégré Nexa Digital School pour une durée d’un an dans le but d’obtenir ma licence en développement web (Bac +3). Cette année de spécialisation me permet d’approfondir mes compétences en développement back-end, avec un accent particulier sur le langage Java. Au sein de cette formation, je travaille régulièrement sur des projets concrets en Java, allant de la programmation orientée objet à l’intégration d’outils professionnels tels que Spring Boot ou Hibernate. Mon objectif est d’élargir mon expertise technique tout en consolidant mes bases pour devenir un développeur complet, capable de répondre aux exigences du monde professionnel.",
    icon: 'code'
  },
]

const iconComponents = {
  briefcase: Briefcase,
  graduation: GraduationCap,
  code: Code
}

export default function CareerTimeline() {
  return (
    <section id="parcours" className="py-20 bg-gray-100" style={{ backgroundColor: '#0d1225' }}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">Mon Parcours</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full hidden md:block" style={{ backgroundColor: '#fad62b' }}></div>
          {timelineEvents.map((event, index) => {
            const IconComponent = iconComponents[event.icon]
            const isLeft = index % 2 === 0
            return (
              <motion.div
                key={event.year}
                className={`flex flex-col md:flex-row items-center mb-12 ${isLeft ? 'md:justify-start' : 'md:justify-end'}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {isLeft ? (
                  <>
                    <div className="w-full md:w-5/12 md:pr-8 mb-4 md:mb-0">
                      <div className="rounded-lg shadow-lg p-6 text-left md:text-right" style={{ backgroundColor: '#9a9a9b' }}>
                        <div className="flex items-center justify-center w-12 h-12 rounded-full mb-4 mx-auto md:mx-0 md:ml-auto" style={{ backgroundColor: '#fad62b' }}>
                          <IconComponent className="text-white" size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{event.year}</h3>
                        <h4 className="text-xl font-semibold mb-2" style={{ color: '#fad62b' }}>{event.title}</h4>
                        <p className="text-white">{event.description}</p>
                      </div>
                    </div>
                    <div className="w-2/12 hidden md:flex justify-center">
                      <div className="w-4 h-4 rounded-full border-4 border-white" style={{ backgroundColor: '#000000' }}></div>
                    </div>
                    <div className="w-5/12 hidden md:block"></div>
                  </>
                ) : (
                  <>
                    <div className="w-5/12 hidden md:block"></div>
                    <div className="w-2/12 hidden md:flex justify-center">
                      <div className="w-4 h-4 rounded-full border-4 border-white" style={{ backgroundColor: '#000000' }}></div>
                    </div>
                    <div className="w-full md:w-5/12 md:pl-8">
                      <div className="rounded-lg shadow-lg p-6 text-left" style={{ backgroundColor: '#9a9a9b' }}>
                        <div className="flex items-center justify-center w-12 h-12 rounded-full mb-4 mx-auto md:mx-0 md:mr-auto" style={{ backgroundColor: '#fad62b' }}>

                          <IconComponent className="text-white" size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{event.year}</h3>
                        <h4 className="text-xl font-semibold mb-2" style={{ color: '#fad62b' }}>{event.title}</h4>
                        <p className="text-white">{event.description}</p>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}