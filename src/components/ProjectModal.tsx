// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogClose,
// } from "@/components/ui/dialog"
// import { Button } from "@/components/ui/button"
// import { X } from "lucide-react"

// interface Project {
//   id: number;
//   title: string;
//   description: string;
//   longDescription: string;
//   tech: string;
//   image: string;
// }

// interface ProjectModalProps {
//   project: Project | null;
//   isOpen: boolean;
//   onClose: () => void;
// }

// export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
//   if (!project) return null;

//   return (
//     <Dialog open={isOpen} onOpenChange={onClose}>
//       <DialogContent className="sm:max-w-[425px]">
//         <DialogHeader>
//           <DialogTitle>{project.title}</DialogTitle>
//           <DialogDescription>{project.description}</DialogDescription>
//           <p className="text-sm text-gray-500 mb-2">Technologies : {project.tech}</p>
//         </DialogHeader>
//         <div className="mt-4">
//           <p className="text-sm text-gray-700">{project.longDescription}</p>
//         </div>
//       </DialogContent>
//     </Dialog>
//   )
// }

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface Project {
  id: number;
  title: string;
  description: string;
  presentation: string;
  objectif: string;
  conclusion: string;
  tech: string;
  image: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto" style={{ backgroundColor: '#9a9a9b' }}>
        <DialogHeader>
          <DialogTitle className="text-2xl">{project.title}</DialogTitle>
          <DialogDescription style={{ color: '#fad62b' }}>{project.description}</DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Présentation</h3>
              <p className="text-sm text-white">{project.presentation}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Objectif</h3>
              <p className="text-sm text-white">{project.objectif}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Conclusion</h3>
              <p className="text-sm text-white">{project.conclusion}</p>
            </div>
          </div>
          <p className="mt-4">
            Technologies utilisées : <span style={{ color: '#fad62b' }}>{project.tech}</span>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}