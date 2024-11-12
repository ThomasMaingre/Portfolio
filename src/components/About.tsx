import Image from 'next/image';

export default function About() {
    return (
        <section id="profil" className="py-20 padding-100" style={{ backgroundColor: '#0d1225' }}>
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center text-white">À propos de moi</h2>
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/2 text-white">
                        <p className="mb-4 text-xl font-bold">
                            Thomas, 26 ans – <span style={{ color: '#fad62b ' }}>Développeur et Intégrateur Web</span>
                        </p>

                        <br />

                        <p>
                            Ancien boulanger de métier, j&apos;ai dû entreprendre une reconversion professionnelle suite à une maladie liée à mon travail. Cette transition m&apos;a permis de découvrir ma passion pour le développement web. Actuellement en fin de formation BAC+2 à la Web@cademie d&apos;Epitech, je me spécialise dans le développement et l&apos;intégration web.
                            <br />
                            <br />
                            Mon parcours atypique m&apos;a doté d&apos;une rigueur et d&apos;une créativité que j&apos;applique désormais dans le monde du web. Je suis déterminé à concevoir des solutions numériques innovantes et à continuer d&apos;apprendre et de me perfectionner dans ce domaine en constante évolution.
                        </p>
                    </div>
                    <div className="md:w-1/2">
                        <Image src="/image/pictures/profil.jpg" alt="photo" className="rounded-lg shadow-lg" width={500} height={500} />
                    </div>
                </div>
            </div>
        </section>
    )
}
