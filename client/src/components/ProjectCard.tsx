import type React from "react"
import type { Project } from "../types"
import { useNavigate } from "react-router-dom"

import { useState } from "react";
import { img } from "framer-motion/client";

const ProjectCard = ({gen,setGenerations,forCommunity = false} :
    {gen:Project,setGenerations:React.Dispatch<
    React.SetStateAction<Project[]>>,forCommunity?:boolean}) => {

        const navigate = useNavigate();
        const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div key={gen.id} className="mb-4 break-inside-avoid">
      <div className="bg-white/5 border border-whote/10 rounded-cl overflow-hidden hover:border-white/20 transition group">
        {/* Preview */}
        <div>
            {gen.generatedImage && (
                <img src={gen.generatedImage} alt={gen.productName} className={`absolute inset-0 w-full h-full object-cover transition duration-500 ${gen.generatedVideo ? 'group-hover:opacity-0' : 'group-hover:scale-105'}`} />
            )}
        </div>

        {/* Details */}
        <div></div>
      </div>
    </div>
  )
}

export default ProjectCard
