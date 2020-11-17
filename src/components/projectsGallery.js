import React from "react"
import Mern from "../components/mern"
import Shoppy from "../components/shoppy"
import GalleryWrapper from "../styles/components/projectsGallery"

function ProjectsGallery() {
  return (
    <GalleryWrapper>
      <Shoppy />
      <Mern />
    
    </GalleryWrapper>
  )
}

export default ProjectsGallery
