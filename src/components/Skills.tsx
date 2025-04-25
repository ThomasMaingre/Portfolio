import React from 'react';
import Image from 'next/image';

interface Skill {
  name: string;
  icon: string;
}

const skills: Skill[] = [
  { name: 'GitHub', icon: '/image/techno/github.png' },
  { name: 'Monday', icon: '/image/techno/monday.png' },
  { name: 'Docker', icon: '/image/techno/docker.png' },
  { name: 'HTML', icon: '/image/techno/html.png' },
  { name: 'CSS', icon: '/image/techno/css.png' },
  { name: 'PHP', icon: '/image/techno/php.png' },
  { name: 'Laravel', icon: '/image/techno/laravel.png' },
  { name: 'Symfony', icon: '/image/techno/symfony.png' },
  { name: 'JavaScript', icon: '/image/techno/js.png' },
  { name: 'TypeScript', icon: '/image/techno/typescript.png' },
  { name: 'React', icon: '/image/techno/react.png' },
  { name: 'Next.js', icon: '/image/techno/nextjs.png' },
  { name: 'Tailwind', icon: '/image/techno/tailwind.png' },
  { name: 'Bootstrap', icon: '/image/techno/bootstrap.png' },
  { name: 'Wordpress', icon: '/image/techno/wordpress.png' },
  { name: 'Node.js', icon: '/image/techno/nodejs.png' },
  { name: 'NestJS', icon: '/image/techno/nestjs.png' },
  { name: 'MySQL', icon: '/image/techno/mySql.png' },
  { name: 'MongoDB', icon: '/image/techno/mongo.png' },
];

export default function SkillsScroller() {
  return (
    <section id="competences" className="py-20 bg-gray-900 overflow-hidden" style={{ backgroundColor: '#0d1225' }}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">Mes Compétences</h2>

        <div className="relative overflow-hidden whitespace-nowrap">
          <div
            className="flex"
            style={{
              animation: 'scroll 20s linear infinite',
              animationPlayState: 'running',
            }}
          >
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-40 mx-4 transition-transform duration-300 ease-out hover:scale-110"
                onMouseEnter={(e) => {
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    parent.style.animationPlayState = 'paused';
                  }
                }}
                onMouseLeave={(e) => {
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    parent.style.animationPlayState = 'running';
                  }
                }}
              >
                <div className="bg-white rounded-lg p-4 flex flex-col items-center">
                  <div className="relative w-16 h-16 mb-2">
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                  <span className="text-sm font-semibold text-black">{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
