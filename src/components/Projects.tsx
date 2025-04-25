import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Github } from 'lucide-react'
import ProjectModal from './ProjectModal'
import SkillsModal from './SkillsModal'

interface Skill {
  name: string;
  rating: number;
  description: string;
}


interface Project {
  id: number;
  title: string;
  description: string;
  presentation: string;
  objectif: string;
  conclusion: string;
  tech: string;
  image: string;
  githubUrl: string;
  skills: Skill[];
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [selectedSkills, setSelectedSkills] = useState<Skill[] | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: "OhPets",
      description: "Application mobile",
      presentation: "OhPets est une application mobile développée avec Symfony pour le back-end et React pour le front-end, dédiée aux propriétaires d'animaux de compagnie qui souhaitent retrouver leur animal en cas de perte. En tant que chef de projet, j'ai dirigé l'équipe de développement et supervisé l’intégration des différentes fonctionnalités.",
      objectif: "L'application vise à aider les propriétaires d'animaux à retrouver leurs compagnons en cas de perte. En fournissant une carte interactive où les lieux de disparition sont signalés et en intégrant une bibliothèque d'animaux détaillée via une API, OhPets facilite la localisation rapide des animaux égarés et améliore ainsi les chances de les retrouver.",
      conclusion: "OhPets représente une solution innovante pour aider les propriétaires à retrouver leurs animaux rapidement et efficacement. Grâce à sa carte interactive et aux informations détaillées fournies par la bibliothèque d'animaux, l'application renforce la solidarité entre propriétaires et crée une communauté axée sur l'entraide. L'expérience de chef de projet m’a permis d'acquérir des compétences en gestion d'équipe et coordination de développement.",
      tech: "Symfony, React, API",
      image: "/image/projet/ohpets.png",
      githubUrl: "https://github.com/ThomasMaingre/OhPets",
      skills: [
        {
          name: "Symfony",
          description: "Bonnes bases et maîtrise des fonctionnalités principales, permettant de créer des fonctionnalités fiables pour le back-end.",
          rating: 3
        },
        {
          name: "React",
          description: "Connaissance solide des concepts essentiels, assurant une interface utilisateur fluide et réactive.",
          rating: 4
        },
        {
          name: "Intégration API",
          description: "Très à l'aise avec l'intégration d'API, capable de gérer et manipuler les données efficacement dans l’application.",
          rating: 5
        },
        {
          name: "Chef de projet",
          description: "Bonne organisation et coordination des tâches, permettant d’atteindre les objectifs du projet avec succès.",
          rating: 4
        },
      ]
    },
    {
      id: 2,
      title: "Cahier des charges OhPets",
      description: "Document",
      presentation: "Le cahier des charges OhPets est un document officiel rédigé pour organiser et structurer le développement de l'application OhPets. Ce document couvre tous les aspects clés du projet, y compris la structure, les fonctionnalités, le budget, le business plan, les maquettes, et la base de données.",
      objectif: "Élaborer un cadre clair pour le projet OhPets, en définissant les attentes, les besoins techniques et administratifs, ainsi que les spécifications fonctionnelles, afin de guider l'équipe dans la réalisation de l’application.",
      conclusion: "La rédaction de ce cahier des charges a permis d’établir une base solide pour le développement d'OhPets. Elle m’a offert une première expérience en gestion de projet, en m'initiant à la planification et à la préparation administrative d'un projet digital.",
      tech: "Word",
      image: "/image/projet/ohpets.png",
      githubUrl: "https://github.com/ThomasMaingre/Cahier-des-charges-OhPets",
      skills: [
        {
          name: "Gestion de projet",
          description: "Expérience approfondie en préparation de projet, incluant la rédaction, l’organisation, et l’administration des aspects essentiels.",
          rating: 4
        },
        {
          name: "Structuration de base de données",
          description: "Bonne compréhension de la modélisation de base de données pour anticiper les besoins de l’application.",
          rating: 3
        },
        {
          name: "Maquettage",
          description: "Maîtrise des bases de la création de maquettes, permettant de concevoir une première version visuelle du produit.",
          rating: 3
        },
      ]
    },
    {
      id: 3,
      title: "Portfolio",
      description: "Site Vitrine",
      presentation: "Mon portfolio, développé avec Next.js, est une vitrine professionnelle qui présente mon profil, mon parcours, mes compétences, et mes projets. Il inclut des sections interactives et un design personnalisé, avec quelques fonctionnalités.",
      objectif: "Créer une plateforme pour mettre en avant mon profil professionnel et mes compétences en développement, avec un design engageant et des fonctionnalités de navigation intuitive pour les visiteurs potentiels.",
      conclusion: "La réalisation de ce portfolio m’a permis de renforcer mes compétences en Next.js et en design tout en me dotant d'un outil de présentation professionnelle personnalisé. C’est un espace dynamique qui évoluera avec mon parcours.",
      tech: "Next.js",
      image: "/image/backgrounds/hero.png",
      githubUrl: "https://github.com/ThomasMaingre/Portfolio",
      skills: [
        {
          name: "Next.js",
          description: "Bonne maîtrise de Next.js, capable de créer une structure efficace et d’utiliser ses fonctionnalités pour une navigation fluide.",
          rating: 4
        },
        {
          name: "Design UI/UX",
          description: "Conception créative et engagement dans le design, permettant de réaliser une interface utilisateur attractive et intuitive.",
          rating: 3
        },
        {
          name: "Gestion de contenu",
          description: "Organisation claire et bien structurée des sections du portfolio pour faciliter l’accès aux informations importantes.",
          rating: 4
        },
      ]
    },
    {
      id: 4,
      title: "E-Commerce",
      description: "Site e-commerce",
      presentation: "Le projet E-commerce est une plateforme de vente en ligne spécialisée dans les composants informatiques compatibles. Développée en Symfony pour le back-end et React pour le front-end, elle offre des fonctionnalités complètes pour les utilisateurs et les administrateurs, notamment la gestion des comptes, des produits, des commandes, et des livraisons.",
      objectif: "Créer un site marchand fonctionnel permettant aux utilisateurs d'acheter des composants informatiques en ligne et aux administrateurs de gérer efficacement le catalogue de produits, les commandes, et les utilisateurs.",
      conclusion: "Ce projet E-commerce m’a permis de renforcer mes compétences en développement et en gestion de fonctionnalités spécifiques au commerce en ligne, notamment les systèmes de panier et de suivi de commande.",
      tech: "Symfony, React, SQL",
      image: "/image/projet/e-commerce.png",
      githubUrl: "https://github.com/ThomasMaingre/E-Commerce",
      skills: [
        {
          name: "Symfony",
          description: "Bonnes bases de Symfony pour implémenter des fonctionnalités avancées du site e-commerce, telles que la gestion des commandes et des utilisateurs.",
          rating: 3
        },
        {
          name: "React",
          description: "Bonne maîtrise de React pour le développement de l'interface utilisateur, permettant une navigation fluide et interactive.",
          rating: 4
        },
        {
          name: "Gestion de base de données",
          description: "Bonne structuration et gestion de la base de données, essentielle pour un suivi efficace des produits, commandes, et utilisateurs.",
          rating: 4
        },
      ]
    },
    {
      id: 5,
      title: "My_Snapchat",
      description: "Application mobile",
      presentation: "J’ai récemment participé à un projet de groupe, dans lequel j’ai contribué à la création d’une application Snapchat utilisant la technologie React Native. Cette expérience m’a permis de mettre en pratique mes compétences en développement front-end et de participer à toutes les étapes de la création d’une application mobile.",
      objectif: "Le projet avait pour objectif de créer une application similaire à Snapchat, qui permet aux utilisateurs de se créer un compte ou se connecter afin d’envoyer et de recevoir des photos éphémères prise avec notre propre smartphone ou depuis la galerie. En utilisant React Native, j’ai pu développer une interface utilisateur réactive et fluide via une API qui nous était fournie, compatible avec les systèmes d’exploitation iOS et Android.",
      conclusion: "Ce projet m’a apporté une expérience précieuse dans le développement d’applications mobiles et a renforcé ma passion pour le développement web. Je suis impatient de continuer à acquérir de nouvelles compétences et de participer à des projets innovants dans le domaine du développement d’applications mobiles.",
      tech: "React Native, API",
      image: "/image/projet/snapchat.png",
      githubUrl: "https://github.com/ThomasMaingre/My_Snapchat",
      skills: [
        {
          name: "Dévelopement Mobile",
          description: "L'objectif était de recréer les fonctionnalités de base de Snapchat pour comprendre le développement d'applications mobiles.",
          rating: 4
        },
        {
          name: "Design UI/UX",
          description: "Conception d'interfaces utilisateur intuitives et expérience utilisateur optimisée pour les applications mobiles.",
          rating: 3
        },
        {
          name: "Intégration API",
          description: "Intégration d'APIs externes et développement d'APIs RESTful pour la communication client-serveur.",
          rating: 4
        },
        {
          name: "React Native",
          description: "Bonnes compétences dans l'utilisation de React Native pour concevoir une interface mobile interactive et conviviale.",
          rating: 3
        },
      ]
    },
    {
      id: 6,
      title: "My_Spotify",
      description: "Lecteur Multimédia",
      presentation: "Ce projet consistait à développer une application de streaming musical en ligne inspirée de Spotify, utilisant React pour le front-end. En intégrant une API de streaming, j'ai développé les fonctionnalités clés telles que la lecture de musique et la recherche d’artistes, d’albums et de chansons.",
      objectif: "L’objectif principal de ce projet était de créer une application de streaming musical en ligne via une API qui nous était fournie, inspirée de Spotify, en utilisant React. J’ai travaillé sur le développement des fonctionnalités essentielles telles que la lecture de musique et la recherche des musiques, des artistes ou encore des albums. J’ai veillé à ce que l’application soit réactive, performante et offre une expérience utilisateur fluide et agréable tout en mettant l’accent sur une interface utilisateur conviviale.",
      conclusion: "Participer à ce projet pour créer une application Spotify a été une expérience passionnante. J’ai pu découvrir pour la première fois le framework React. J’ai donc découvert la pratique des concepts tels que les composants, le routage et la gestion de l’état. J’ai également développé mes compétences en matière d’intégration d’API et de manipulation des données en temps réel. Le résultat final était une application Spotify fonctionnelle, offrant une expérience de streaming musical fluide et riche en fonctionnalités.",
      tech: "React, API",
      image: "/image/projet/spotify.png",
      githubUrl: "https://github.com/ThomasMaingre/My_Spotify",
      skills: [
        {
          name: "React",
          description: "Bonne maîtrise de React pour concevoir une interface performante et interactive pour le streaming musical.",
          rating: 4
        },
        {
          name: "Intégration API",
          description: "Solide compétence en intégration d’API, avec une capacité à gérer les appels et la manipulation des données pour une expérience utilisateur fluide.",
          rating: 4
        },
        {
          name: "Optimisation de l'expérience utilisateur",
          description: "Aptitude à optimiser la réactivité et la fluidité de l'application, assurant une navigation agréable et intuitive.",
          rating: 3
        },
      ]
    },
    {
      id: 7,
      title: "Puissance 4",
      description: "Jeu",
      presentation: "Ce projet consiste en la création d'une version interactive et jouable du célèbre jeu Puissance 4. J'ai implémenté les règles du jeu, conçu une interface utilisateur réactive, et ajouté des fonctionnalités comme la détection des victoires, des égalités, un système de score, ainsi qu’un bouton de reset pour relancer des parties à volonté.",
      objectif: "L’objectif principal était de créer une version jouable et divertissante du jeu Puissance 4. J’ai mis en œuvre les règles du jeu, développé une interface utilisateur réactive et intuitivement jouable, et ajouté des fonctionnalités telles que la détection des victoires et des égalités. Il fallait également créer un système de score entre les joueurs, ainsi qu’un reset pour pouvoir changer de joueur autant de fois qu’on le désire.",
      conclusion: "Participer à ce projet a été une expérience gratifiante. J’ai pu exploiter les fonctionnalités puissantes de JavaScript pour construire une application ludique et interactive. J’ai acquis une meilleure compréhension des principes de la programmation orientée objet, de la manipulation du DOM et des événements en JavaScript. De plus, j’ai renforcé mes compétences en matière de résolution de problèmes et d’optimisation du code. Le résultat final était un jeu Puissance 4 fonctionnel, attrayant et amusant, prêt à être joué par les utilisateurs.",
      tech: "Javascript, Jquery",
      image: "/image/projet/puissance4.png",
      githubUrl: "https://github.com/ThomasMaingre/Puissance4",
      skills: [
        {
          name: "Développement Front-end",
          description: "Maîtrise de la création d'interfaces interactives pour un gameplay fluide et attractif.",
          rating: 4
        },
        {
          name: "Logique de jeu",
          description: "Solide compréhension des règles et de la logique de jeu, avec des fonctionnalités robustes pour la détection de victoires et d'égalité.",
          rating: 4
        },
        {
          name: "Expérience utilisateur",
          description: "Interface intuitive et agréable, rendant le jeu accessible et divertissant pour tous les utilisateurs.",
          rating: 3
        },
      ]
    },
    {
      id: 8,
      title: "Hackathon site web MLPA",
      description: "Site Vitrine",
      presentation: "Ce projet met en avant ma participation à un hackathon, où j’ai contribué à la création d’un site vitrine pour la Mission Locale du Pays d’Aix, ainsi qu’à la mise en place d’une section e-sport en utilisant le framework Laravel. Ce projet alliait la promotion des services de la Mission Locale à la passion pour le jeu vidéo.",
      objectif: "L’objectif principal de ce projet était de développer un site vitrine pour la Mission Locale du Pays d’Aix afin de promouvoir leurs services et de faciliter l’accès à l’information pour les jeunes en recherche d’emploi. En plus de cela, nous avons intégré une section e-sport pour attirer les jeunes amateurs de jeux vidéo et créer une communauté dynamique. Nous avons travaillé sur la conception d’une interface attrayante, la création de contenus informatifs et engageants, ainsi que sur la mise en place de fonctionnalités liées à l’e-sport et leur plateforme de live sur Twitch.",
      conclusion: "Ma participation à ce hackathon a été une expérience enrichissante et je dirai même victorieuse puisque nous avons gagné. Travailler sur ce hackathon m’a permis d’apporter mes compétences en développement web pour soutenir une organisation importante telle que la Mission Locale, tout en créant une expérience interactive et immersive pour les jeunes utilisateurs intéressés par l’e-sport. Nous avons réussi à créer un site vitrine attractif, fournissant des informations utiles sur les services de la Mission Locale, tout en offrant une plateforme e-sport conviviale pour rassembler les joueurs et promouvoir la compétition. Ce hackathon m’a offert une occasion de mettre en pratique mes compétences techniques, de travailler en équipe et de contribuer à une initiative positive.",
      tech: "Laravel, SQL",
      image: "/image/projet/hackathon.jpeg",
      githubUrl: "https://github.com/ThomasMaingre/Hackathon-MissionLocale",
      skills: [
        {
          name: "Laravel",
          description: "Bonne maîtrise de Laravel pour la création d'un site vitrine fonctionnel avec des sections spécifiques.",
          rating: 3
        },
        {
          name: "Travail en équipe",
          description: "Forte capacité à collaborer et à s'adapter dans un contexte de hackathon pour réaliser un projet en temps limité.",
          rating: 4
        },
        {
          name: "Adaptabilité",
          description: "Aptitude à répondre aux besoins variés du projet, alliant promotion sociale et divertissement e-sport.",
          rating: 3
        },
      ]
    },
    {
      id: 9,
      title: "My_Quizz",
      description: "Site internet de Quizz",
      presentation: "Ce projet est un site de quizz interactif en utilisant Symfony, avec la particularité d'exclure l'utilisation de JavaScript. Nous avons été chargé de concevoir et de développer un système de quizz complet, comprenant différentes catégories, un ensemble varié de questions et un mécanisme de score.",
      objectif: "L'objectif principal de ce projet était de créer un site de quizz interactif. Nous avons travaillé sur la mise en place d'une structure de base solide, permettant la création de catégories de quizz personnalisées. Enfin, nous avons mis en place un mécanisme de score pour évaluer les performances des utilisateurs et leur fournir un retour sur leurs réponses.",
      conclusion: "Ce projet sans l'utilisation de JavaScript a été une expérience réussie. J'ai pu exploiter les fonctionnalités puissantes offertes par Symfony (malgré de grande difficulté) pour créer une plateforme interactive et attrayante pour les utilisateurs. Nous avons également développé nos compétences en matière de manipulation des données et de création de structures complexes. Le résultat final est un site de quizz fonctionnel, offrant une expérience utilisateur agréable avec différentes catégories de quizz, des questions variées et un système de score.",
      tech: "Symfony, SQL",
      image: "/image/projet/quizz.png",
      githubUrl: "https://github.com/ThomasMaingre/My_Quizz",
      skills: [
        {
          name: "Symfony",
          description: "Premier projet en Symfony, donc legère maîtrise de Symfony, avec une capacité à gérer l’interactivité et la logique complexe sans JavaScript.",
          rating: 3
        },
        {
          name: "Logique de jeu et de score",
          description: "Bonnes compétences dans la mise en place de la logique de score et des catégories pour un système de quizz.",
          rating: 4
        },
        {
          name: "Développement sans Javascript",
          description: "Legère aptitude à contourner les limites en utilisant uniquement des technologies back-end pour offrir une expérience interactive.",
          rating: 3
        },
      ]
    },

  ]

  return (
    <section id="projets" className="py-20 bg-muted" style={{ backgroundColor: '#0d1225' }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Mes Projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} style={{ backgroundColor: '#9a9a9b' }}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription style={{ color: '#fad62b' }}>{project.description}</CardDescription>              </CardHeader>
              <CardContent>
                <img src={project.image} alt={`Aperçu de ${project.title}`} className="w-full h-48 object-cover mb-4" />
                <p className="mb-4">
                  Technologies utilisées : <span style={{ color: '#fad62b' }}>{project.tech}</span>
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <Button className="mr-2" onClick={() => setSelectedProject(project)}>En savoir plus</Button>
                    <Button variant="outline" onClick={() => setSelectedSkills(project.skills)}>Compétences</Button>
                  </div>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-[#fad62b] hover:text-[#fad62b] transition-colors duration-200"><Github size={24} />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
      <SkillsModal
        skills={selectedSkills}
        isOpen={!!selectedSkills}
        onClose={() => setSelectedSkills(null)}
      />
    </section>
  )
}