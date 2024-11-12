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
      <DialogContent 
        className="sm:max-w-[700px] h-[80vh] relative" 
        style={{ backgroundColor: '#9a9a9b' }}
      >
        <DialogClose asChild>
          <Button
            className="absolute right-4 top-4 h-8 w-8 rounded-full bg-black hover:bg-gray-800 text-white"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Fermer</span>
          </Button>
        </DialogClose>
        
        <div className="h-full overflow-y-auto pr-6">
          <DialogHeader className="mt-2">
            <DialogTitle className="text-2xl" style={{ color: '#fad62b' }}>{project.title}</DialogTitle>
            <DialogDescription className="text-white">{project.description}</DialogDescription>
          </DialogHeader>
          
          <div className="mt-4 space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-white">Présentation</h3>
              <p className="text-sm text-white">{project.presentation}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-white">Objectif</h3>
              <p className="text-sm text-white">{project.objectif}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-white">Conclusion</h3>
              <p className="text-sm text-white">{project.conclusion}</p>
            </div>
            <p className="mt-4 text-white">
              Technologies utilisées : <span style={{ color: '#fad62b' }}>{project.tech}</span>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}