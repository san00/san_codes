import React from "react"
import Mern from "../components/mern"
import Shoppy from "../components/shoppy"
import GalleryWrapper from "../styles/components/projectsGallery"
import { ProjectsLink } from "../styles/components/projects"

function ProjectsGallery() {
  return (
    <GalleryWrapper>
      <Shoppy />
      <Mern />
      <ProjectsLink to="/">Go back to the home page.</ProjectsLink>
    </GalleryWrapper>
  )
}

export default ProjectsGallery
