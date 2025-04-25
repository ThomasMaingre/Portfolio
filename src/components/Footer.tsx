'use client'

import { useState } from 'react'
import { Github, Linkedin } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const [isSiteMapOpen, setIsSiteMapOpen] = useState(false)
  const [isLegalNoticeOpen, setIsLegalNoticeOpen] = useState(false)
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false)

  return (
    <footer className="bg-background text-foreground py-8" style={{ backgroundColor: '#0d1225' }}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-white">
        <p className="mb-4 md:mb-0">© 2025 MAINGRE Thomas. Tous droits réservés.</p>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <Button variant="link" className="text-white hover:text-yellow-300" onClick={() => setIsLegalNoticeOpen(true)}>Mentions légales</Button>
          <Button variant="link" className="text-white hover:text-yellow-300" onClick={() => setIsPrivacyPolicyOpen(true)}>Politique de confidentialité</Button>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://github.com/ThomasMaingre" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            <Github className="w-9 h-12 hover:text-yellow-300 transition duration-300 ease-in-out" />
          </a>
          <a href="https://www.linkedin.com/in/thomas-maingre/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-9 h-12 hover:text-blue-300 transition duration-300 ease-in-out" />
          </a>
        </div>
      </div>

      <Dialog open={isLegalNoticeOpen} onOpenChange={setIsLegalNoticeOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-[#0d1225] text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl mb-4" style={{ color: '#fad62b' }}>Mentions légales</DialogTitle>
            <DialogDescription className="text-lg space-y-4 text-white">
              <h3 className="text-xl font-semibold" style={{ color: '#fad62b' }}>Présentation du site internet</h3>
              <p>
                En vertu de l'article 6 de la loi n°2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site internet <a href="https://thomasmaingre.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fad62b', textDecoration: 'none' }}>thomasmaingre.com</a> l'identité
                des différents intervenants dans le cadre de sa réalisation et de son suivi :
              </p>
              <li><strong>Propriétaire :</strong> Thomas MAINGRE</li>
              <li><strong>Contact :</strong> thomas.maingre@gmail.com</li>
              <li><strong>Hébergeur :</strong> VPS - Ionos </li>
              <li><strong>Délégué à la protection des données :</strong> Thomas Maingre - thomas.maingre@gmail.com</li>

              <h3 className="text-xl font-semibold mt-6" style={{ color: '#fad62b' }}>Conditions générales d'utilisation du site et des services proposés</h3>
              <p>
                En accédant au site <a href="https://thomasmaingre.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fad62b', textDecoration: 'none' }}>thomasmaingre.com</a>
                , vous acceptez pleinement les présentes conditions générales d'utilisation. Ces conditions peuvent être modifiées à tout moment, sans préavis. Il vous appartient de consulter régulièrement la version en vigueur. L'accès et l'utilisation du site sont réservés à un usage strictement personnel.
              </p>

              <h3 className="text-xl font-semibold mt-6" style={{ color: '#fad62b' }}>Description des services fournis</h3>
              <p>
                Le site <a href="https://thomasmaingre.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fad62b', textDecoration: 'none' }}>thomasmaingre.com</a> a
                pour objet de présenter les compétences et les projets de Thomas Maingre dans le cadre de son portfolio professionnel. Les informations fournies sur le site sont aussi précises que possible, mais ne sont pas exhaustives. Elles sont susceptibles d’évoluer.
              </p>

              <h3 className="text-xl font-semibold mt-6" style={{ color: '#fad62b' }}>Limitations contractuelles sur les données techniques</h3>
              <p>
                Le site utilise les technologies récentes pour garantir un accès optimal aux informations. Cependant, le site ne pourra être tenu responsable des dommages matériels liés à l'utilisation du site, notamment en raison de l'incompatibilité de l'équipement de l'utilisateur avec le site. De plus, l’utilisateur s’engage à accéder au site en utilisant un matériel récent et dépourvu de virus.
              </p>

              <h3 className="text-xl font-semibold mt-6" style={{ color: '#fad62b' }}>Propriété intellectuelle et contrefaçons</h3>
              <p>
                Le contenu du site (textes, images, graphismes, logos, etc.) est protégé par les lois en vigueur sur la propriété intellectuelle et est la propriété exclusive de Thomas Maingre. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Thomas Maingre. Toute exploitation non autorisée du site ou de l'un des éléments qu'il contient sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de la propriété intellectuelle.
              </p>

              <h3 className="text-xl font-semibold mt-6" style={{ color: '#fad62b' }}>Limitations de responsabilité</h3>
              <p>
                Thomas Maingre ne pourra être tenu responsable des dommages directs ou indirects causés au matériel de l’utilisateur, lors de l’accès au site <a href="https://thomasmaingre.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fad62b', textDecoration: 'none' }}>thomasmaingre.com</a>
                , résultant soit de l'utilisation d'un matériel ne répondant pas aux spécifications indiquées au point 4, soit de l’apparition d’un bug ou d’une incompatibilité. Thomas Maingre ne pourra également être tenu responsable des dommages indirects consécutifs à l’utilisation du site.
              </p>

              <h3 className="text-xl font-semibold mt-6" style={{ color: '#fad62b' }}>Gestion des données personnelles</h3>
              <p>
                Les informations personnelles éventuellement collectées sur le site sont traitées conformément à notre politique de confidentialité, disponible sur le site. Conformément à la loi “Informatique et Libertés” et au RGPD, vous disposez de droits d’accès, de rectification, de suppression et d’opposition aux données personnelles vous concernant. Pour exercer ces droits, veuillez nous contacter à l’adresse suivante : thomas.maingre@gmail.com.
              </p>

              <h3 className="text-xl font-semibold mt-6" style={{ color: '#fad62b' }}>Liens hypertextes et cookies</h3>
              <p>
                Le site <a href="https://thomasmaingre.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fad62b', textDecoration: 'none' }}>thomasmaingre.com</a> contient
                des liens hypertextes vers d’autres sites. Cependant, Thomas Maingre n’a pas la possibilité de vérifier le contenu des sites ainsi visités et n’assumera en conséquence aucune responsabilité.
                Ce site n’utilise pas de cookies pour collecter des informations personnelles ou suivre le comportement des visiteurs.
              </p>

              <h3 className="text-xl font-semibold mt-6" style={{ color: '#fad62b' }}>Droit applicable et attribution de juridiction</h3>
              <p>
                Tout litige en relation avec l’utilisation du site <a href="https://thomasmaingre.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fad62b', textDecoration: 'none' }}>thomasmaingre.com</a> est soumis au droit français. En cas de litige, compétence exclusive est attribuée aux tribunaux compétents de la ville des Arcs-sur-Argens dans le Var.
              </p>

            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <Dialog open={isPrivacyPolicyOpen} onOpenChange={setIsPrivacyPolicyOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-[#0d1225] text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl mb-4" style={{ color: '#fad62b' }}>Politique de confidentialité</DialogTitle>
            <DialogDescription className="text-lg space-y-4 text-white">
              <h3 className="text-xl font-semibold" style={{ color: '#fad62b' }}>Introduction</h3>
              <p>
                Je m'appelle Thomas Maingre et je suis en formation BAC+3 à Nexa Digital School. Ce site <a href="https://thomasmaingre.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fad62b', textDecoration: 'none' }}>thomasmaingre.com</a> est mon portfolio personnel utilisé pour présenter mes compétences et projets dans le cadre de mes études. Je n'ai pas d'entreprise personnelle et ne gagne aucune rémunération avec ce portfolio.
              </p>

              <h3 className="text-xl font-semibold mt-6" style={{ color: '#fad62b' }}>Identité du responsable de traitement</h3>
              <p>
                Le responsable de traitement des données collectées sur ce site est:
                <br></br>
                Thomas Maingre
                <br></br>
                Email: thomas.maingre@gmail.com
              </p>
              <h3 className="text-xl font-semibold mt-6" style={{ color: '#fad62b' }}>
                Portée et acceptation de la présente politique
              </h3>
              <p>
                En utilisant ce site, vous acceptez les termes de cette politique de confidentialité. Si vous refusez les termes de cette politique, veuillez ne pas utiliser ce site ou ne pas transmettre d'informations à caractère personnel.
              </p>

              <h3 className="text-xl font-semibold mt-6" style={{ color: '#fad62b' }}>
                Données collectées sur mon site
              </h3>
              <p>
                Nous collectons certaines informations personnelles lorsque vous les fournissez volontairement via notre formulaire de contact. Ces informations peuvent inclure votre nom et votre adresse e-mail. Ces données sont nécessaires pour établir un contact et répondre à vos demandes. Aucune donnée sensible n’est collectée sur ce site.
              </p>

              <h3 className="text-xl font-semibold mt-6" style={{ color: '#fad62b' }}>
                Finalités de la collecte des données personnelles
              </h3>
              <p>
                Les données collectées sont utilisées uniquement dans les objectifs suivants :
              </p>
              <li>Répondre à vos demandes de contact.</li>
              <li>Maintenir une communication directe avec les utilisateurs.</li>
              <p>
                Nous n’utilisons pas vos informations à des fins de marketing ou de publicité, et aucune donnée n’est partagée avec des tiers.
              </p>

              <h3 className="text-xl font-semibold mt-6" style={{ color: '#fad62b' }}>
                Destinataire des données personnelles
              </h3>
              <p>
                Les informations personnelles collectées sur ce site sont strictement destinées à un usage interne et ne sont accessibles qu'à moi. Aucun partage avec des tiers n'est effectué, sauf en cas de nécessité légale.
              </p>

              <h3 className="text-xl font-semibold mt-6" style={{ color: '#fad62b' }}>
                Durée de conservation
              </h3>
              <p>
                Vos informations personnelles sont conservées uniquement pour la durée nécessaire à l’accomplissement des objectifs pour lesquels elles ont été collectées, ou aussi longtemps que nous restons en contact pour répondre à vos demandes. Une fois l’objectif atteint, les données peuvent être supprimées.
              </p>

              <h3 className="text-xl font-semibold mt-6" style={{ color: '#fad62b' }}>
                Vos droits
              </h3>
              <p>
                Conformément aux lois en vigueur sur la protection des données, vous disposez des droits suivants concernant vos informations personnelles :
              </p>
              <li>Droit d'accès à vos données pour en vérifier l'exactitude.</li>
              <li>Droit de rectification pour corriger des erreurs éventuelles.</li>
              <li>Droit de suppression des données si vous ne souhaitez plus qu'elles soient conservées.</li>
              <p>
                Pour exercer ces droits, vous pouvez me contacter via l'adresse indiquée dans la section "Contact".
              </p>

              <h3 className="text-xl font-semibold mt-6" style={{ color: '#fad62b' }}>
                Sécurité
              </h3>
              <p>
                Nous mettons en œuvre des pratiques standards pour assurer la sécurité de vos données personnelles. Bien que nous prenions des précautions pour sécuriser les informations collectées, aucune transmission de données sur Internet n'est totalement sécurisée. Par conséquent, nous ne pouvons pas garantir une sécurité absolue.
              </p>

              <h3 className="text-xl font-semibold mt-6" style={{ color: '#fad62b' }}>
                Utilisation des cookies
              </h3>
              <p>
                Ce site n'utilise pas de cookies ou d’autres technologies de suivi pour collecter des données sur les visiteurs.
              </p>

              <h3 className="text-xl font-semibold mt-6" style={{ color: '#fad62b' }}>
                Contact
              </h3>
              <p>
                Pour toute question ou demande relative à cette politique de confidentialité, vous pouvez me contacter via le formulaire de contact sur le site ou en envoyant un e-mail à l’adresse suivante : thomas.maingre@gmail.com
              </p>

            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </footer>
  )
}