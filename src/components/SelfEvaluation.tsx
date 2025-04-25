'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

interface Skill {
  name: string;
  level: number;
  description: string;
}

interface PersonalTrait {
  name: string;
  description: string;
  isStrength: boolean;
}

const tools: Skill[] = [
  { name: "Git", level: 85, description: "Gestion de version et collaboration avec GitHub" },
  { name: "Docker", level: 70, description: "Conteneurisation d'applications et gestion des environnements" },
  { name: "Monday", level: 70, description: "Outil de gestion de projets et collaboration d'équipe" },
  { name: "WordPress", level: 80, description: "Gestion de contenu et développement de sites web" }
]

const languages: Skill[] = [
  { name: "JavaScript", level: 80, description: "Langage principal, ES6+" },
  { name: "TypeScript", level: 70, description: "Typage statique pour JavaScript" },
  { name: "PHP", level: 80, description: "Langage backend pour des applications web robustes" },
  { name: "HTML/CSS", level: 90, description: "Bases solides pour le développement frontend" },
  { name: "Java", level: 40, description: "Langage backend orienté objet, fiable et polyvalent" }
]

const frameworks: Skill[] = [
  { name: "React", level: 80, description: "Bibliothèque UI principale" },
  { name: "React Native", level: 70, description: "Développement d'applications mobiles multiplateformes" },
  { name: "Next.js", level: 80, description: "Framework React pour le SSR et les applications web" },
  { name: "Laravel", level: 70, description: "Framework PHP pour le backend" },
  { name: "Symfony", level: 60, description: "Framework PHP pour les applications robustes" },
  { name: "Nest.js", level: 65, description: "Framework backend Node.js orienté API REST" }
]

const software: Skill[] = [
  { name: "VS Code", level: 90, description: "Éditeur de code principal" }, 
  { name: "IntelliJ IDEA", level: 50, description: "IDE pour développer en Java avec confort et productivité" },


]

const personalTraits: PersonalTrait[] = [
  { name: "Curiosité", description: "Toujours désireux d'apprendre de nouvelles technologies", isStrength: true },
  { name: "Résilience", description: "Ma résilience est ma plus grande force : malgré les épreuves, je garde la tête haute et avance avec détermination.", isStrength: true },
  { name: "Travail d'équipe", description: "Collabore efficacement dans des équipes multidisciplinaires", isStrength: true },
  { name: "Gestion du temps", description: "Parfois des difficultés à prioriser les tâches", isStrength: false },
  { name: "Communication", description: "Capable de vulgariser des concepts techniques", isStrength: true },
  { name: "Perfectionnisme", description: "Peut parfois ralentir la livraison de projets", isStrength: false }
]


function SkillCard({ skill }: { skill: Skill }) {
  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-white">{skill.name}</CardTitle>
        <CardDescription className="text-gray-400">{skill.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Progress value={skill.level} className="w-full" />
        <p className="text-right mt-2 text-[#fad62b]">{skill.level}%</p>
      </CardContent>
    </Card>
  )
}

function PersonalTraitCard({ trait }: { trait: PersonalTrait }) {
  return (
    <Card className={`bg-gray-800 border-gray-700 ${trait.isStrength ? "border-l-4 border-l-green-500" : "border-l-4 border-l-yellow-500"}`}>
      <CardHeader>
        <CardTitle className="flex justify-between items-center text-white">
          {trait.name}
          <span className={`text-sm ${trait.isStrength ? "text-green-500" : "text-yellow-500"}`}>
            {trait.isStrength ? "Force" : "À améliorer"}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-400">{trait.description}</p>
      </CardContent>
    </Card>
  )
}

export default function SelfEvaluation() {
  const [activeTab, setActiveTab] = useState("tools")

  return (
    <section id="auto-eval" className="py-20 text-white" style={{ backgroundColor: '#0d1225' }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Auto-évaluation</h2>
        <p className="text-xl mb-12 max-w-2xl mx-auto text-center">
          Après deux ans d'expérience, voici une évaluation honnête de mes compétences et traits personnels,
          mettant en lumière mes points forts et les domaines où je continue à m'améliorer.
        </p>
        <Tabs defaultValue="tools" className="w-full" onValueChange={setActiveTab}>
          <ScrollArea className="w-full whitespace-nowrap">
            <TabsList className="inline-flex w-full justify-start bg-gray-800 p-1">
              {[
                { id: "tools", label: "Outils" },
                { id: "languages", label: "Langages" },
                { id: "frameworks", label: "Frameworks" },
                { id: "software", label: "Logiciels" },
                { id: "personal", label: "Personnel" }
              ].map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className={`flex-1 whitespace-nowrap px-6 py-2 text-sm font-medium transition-colors duration-200 ${
                    activeTab === tab.id
                      ? "bg-black text-[#fad62b]"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>

          {["tools", "languages", "frameworks", "software"].map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {eval(category).map((item: Skill) => (
                  <SkillCard key={item.name} skill={item} />
                ))}
              </div>
            </TabsContent>
          ))}
          <TabsContent value="personal">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {personalTraits.map((trait) => (
                <PersonalTraitCard key={trait.name} trait={trait} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}