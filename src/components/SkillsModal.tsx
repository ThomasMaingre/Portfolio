// import {
//     Dialog,
//     DialogContent,
//     DialogDescription,
//     DialogHeader,
//     DialogTitle,
//     DialogClose,
//   } from "@/components/ui/dialog"
//   import { Button } from "@/components/ui/button"
//   import { X, Star } from "lucide-react"
  
//   interface Skill {
//     name: string;
//     rating: number;
//   }
  
//   interface SkillsModalProps {
//     skills: Skill[] | null;
//     isOpen: boolean;
//     onClose: () => void;
//   }
  
//   export default function SkillsModal({ skills, isOpen, onClose }: SkillsModalProps) {
//     if (!skills) return null;
  
//     const renderStars = (rating: number) => {
//       return Array(5).fill(0).map((_, i) => (
//         <Star 
//           key={i} 
//           className={`inline-block h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
//         />
//       ));
//     };
  
//     return (
//       <Dialog open={isOpen} onOpenChange={onClose}>
//         <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
//           <DialogHeader>
//             <DialogTitle className="text-2xl">Compétences</DialogTitle>
//             <DialogDescription>Évaluation des compétences techniques</DialogDescription>
//           </DialogHeader>
//           <div className="mt-4">
//             <div className="space-y-4">
//               {skills.map((skill, index) => (
//                 <div key={index}>
//                   <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
//                   <div className="flex items-center">
//                     <span className="text-sm text-gray-700 mr-2">Niveau :</span>
//                     {renderStars(skill.rating)}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <DialogClose asChild>
//             <Button className="absolute right-4 top-4" variant="ghost" size="icon">
//               <X className="h-4 w-4" />
//               <span className="sr-only">Fermer</span>
//             </Button>
//           </DialogClose>
//         </DialogContent>
//       </Dialog>
//     )
//   }

// import {
//     Dialog,
//     DialogContent,
//     DialogDescription,
//     DialogHeader,
//     DialogTitle,
//     DialogClose,
//   } from "@/components/ui/dialog"
//   import { Button } from "@/components/ui/button"
//   import { X, Star } from "lucide-react"
  
//   interface Skill {
//     name: string;
//     rating: number;
//   }
  
//   interface SkillsModalProps {
//     skills: Skill[] | null;
//     isOpen: boolean;
//     onClose: () => void;
//   }
  
//   export default function SkillsModal({ skills, isOpen, onClose }: SkillsModalProps) {
//     if (!skills) return null;
  
//     const renderStars = (rating: number) => {
//       return Array(5).fill(0).map((_, i) => (
//         <Star 
//           key={i} 
//           className={`inline-block h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
//         />
//       ));
//     };
  
//     return (
//       <Dialog open={isOpen} onOpenChange={onClose}>
//         <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
//           <DialogHeader>
//             <DialogTitle className="text-2xl">Compétences</DialogTitle>
//             <DialogDescription>Évaluation des compétences techniques</DialogDescription>
//           </DialogHeader>
//           <div className="mt-4">
//             <div className="space-y-4">
//               {skills.map((skill, index) => (
//                 <div key={index}>
//                   <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
//                   <div className="flex items-center">
//                     <span className="text-sm text-gray-700 mr-2">Niveau :</span>
//                     {renderStars(skill.rating)}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <DialogClose asChild>
//             <Button className="absolute right-4 top-4" variant="ghost" size="icon">
//               <X className="h-4 w-4" />
//               <span className="sr-only">Fermer</span>
//             </Button>
//           </DialogClose>
//         </DialogContent>
//       </Dialog>
//     )
//   }

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X, Star } from "lucide-react"

interface Skill {
  name: string;
  description: string;
  rating: number;
}

interface SkillsModalProps {
  skills: Skill[] | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function SkillsModal({ skills, isOpen, onClose }: SkillsModalProps) {
  if (!skills) return null;

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`inline-block h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto" style={{ backgroundColor: '#9a9a9b' }} >
        <DialogHeader>
          <DialogTitle className="text-2xl">Compétences</DialogTitle>
          <DialogDescription style={{ color: '#fad62b' }}>Évaluation des compétences techniques</DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-1">{skill.name}</h3>
                <p className="text-sm text-white mb-2">{skill.description}</p>
                <div className="flex items-center">
                  <span className="text-sm text-gray-700 mr-2">Niveau :</span>
                  {renderStars(skill.rating)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}