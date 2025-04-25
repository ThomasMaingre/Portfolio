// export default function About() {
//     return (
//         <section id="profil" className="py-20 padding-100">
//             <div className="container mx-auto px-4">
//                 <h2 className="text-3xl font-bold mb-8 text-center">À propos de moi</h2>
//                 <div className="flex flex-col md:flex-row items-center gap-8">
//                     <div className="md:w-1/2">
//                         <p className="mb-4">
//                             parcours, compétences, passion
//                         </p>
//                         <p>
//                             parcours, compétences, passion
//                         </p>
//                     </div>
//                     <div className="md:w-1/2">
//                         <img src="/image/pictures/profil.jpg" alt="photo" className="rounded-lg shadow-lg" />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

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

                        <br></br>

                        <p>
                            Ancien boulanger de métier, j'ai dû entreprendre une reconversion professionnelle suite à une maladie liée à mon travail. Cette transition m'a permis de découvrir ma passion pour le développement web. Actuellement en fin de formation BAC+2 à la Web@cademie d'Epitech, je me spécialise dans le développement et l'intégration web.
                            <br></br>
                            <br></br>
                            Mon parcours atypique m'a doté d'une rigueur et d'une créativité que j'applique désormais dans le monde du web. Je suis déterminé à concevoir des solutions numériques innovantes et à continuer d'apprendre et de me perfectionner dans ce domaine en constante évolution.
                        </p>
                    </div>
                    <div className="md:w-1/2">
                        <img src="/image/pictures/profil.jpg" alt="photo" className="rounded-lg shadow-lg" />
                    </div>
                </div>
            </div>
        </section>
    )
}
