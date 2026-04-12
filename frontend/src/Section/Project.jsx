import { useState } from "react"

const useIsMobile = (query = "(max-width : 630px)")=>{
  const [isMobiel , setMobile] = useState(
    typeof window !== "undefined" && window.matchMedia(query).matches
  )

export default function Project(){
  return  <Section id="projects" className = "relative text-white">
    
  </Section>
}