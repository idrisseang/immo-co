import Header from "@/components/header";
import { usePrograms } from "@/hooks/use-programs";
import { useEffect, useState } from "react";
import Error from "./Error";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accessibility, Award, BookOpen, Calendar, CheckCircle, GraduationCap, Monitor, Star, Target, Users } from "lucide-react";

export default function ProgramPage(){
    const {data, loading, error} = usePrograms();
    const programId = window.location.pathname.split('/').pop();
    const [selectedProgram, setSelectedProgram] = useState({});
    const [activeSection, setActiveSection] = useState("overview")

    const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

    const sections = [
        { id: "overview", label: "Vue d'ensemble", icon: BookOpen },
        { id: "objectives", label: "Objectifs", icon: Target },
        { id: "target", label: "Public cible", icon: Users },
        { id: "prerequisites", label: "Pré-requis", icon: CheckCircle },
        { id: "program", label: "Programme", icon: Calendar },
        { id: "team", label: "Équipe pédagogique", icon: GraduationCap },
        { id: "evaluation", label: "Évaluation", icon: Award },
        { id: "resources", label: "Ressources", icon: Monitor },
        { id: "quality", label: "Qualité", icon: Star },
        { id: "accessibility", label: "Accessibilité", icon: Accessibility },
    ]

    useEffect( () => {
        if(!programId) return <Error />
    }, [programId]);

    useEffect( () => {
        programId && setSelectedProgram(data && data.programs.find(p => p.id === programId));
    }, [programId, data, setSelectedProgram])
    
    console.log(selectedProgram)

    return (
        <div className="h-screen">
            <Header />
            {
                selectedProgram && <section className="inter w-full h-2/3 text-white gradient mx-auto container px-32 py-16 flex justify-center">
               <div className="flex items-center flex-col justify-between my-14">
                    <h1 className="text-center font-bold text-4xl   uppercase">{selectedProgram.name}</h1>
                    <div className="font-bold">
                        <p className="">Formation en Cycle Long de 126 heures</p>
                        <p>A distance</p>
                        <p>Diplômante et accessible</p>
                        
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="text-sm bg-[#16539b] px-4 py-2 rounded-sm">Être rappelé</button>
                        <button className="text-sm border border-[#16539b] px-4 py-2 rounded-sm hover:bg-[#81a22c] hover:border-none hover:font-medium hover:cursor-pointer">Découvrir le programme</button>
                    </div>
               </div>
            </section>

            }
            <div className="min-h-screen ">
      {/* Navigation latérale */}
      <div className="">
        <Card className="w-64">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Navigation rapide</CardTitle>
          </CardHeader>
          <CardContent className="space-y-1">
            {sections.map((section) => {
              const Icon = section.icon
              return (
                <button
                  key={section.id}
                  
                  className={`w-full flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-all hover:bg-blue-50 ${
                    activeSection === section.id ? "bg-blue-100 text-blue-700 font-medium" : "text-gray-600"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {section.label}
                </button>
              )
            })}
          </CardContent>
        </Card>
      </div>

      {/* Contenu principal */}
      <div className="lg:ml-72 px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header de la formation */}
          <section id="overview" className="relative"></section>
          </div>

        </div>
    </div> 
    </div>
    
)}
