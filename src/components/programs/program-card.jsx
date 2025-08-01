import { ChevronDown, ChevronUp, Clock, CreditCard, PersonStanding, Users } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible"
import { Button } from "../ui/button"
import { useState } from "react";

export default function ProgramCard({program}){
    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className='w-[350px] h-full rounded-xl border font-aptos'>
            <img loading="lazy" src={program.image ? program.image.url : "https://placehold.co/300x200"} alt={program.name}
            className='w-full h-[200px] rounded-t-xl object-cover' />
            <div className='p-6 flex flex-col space-y-2'>
                <h3 className='font-medium uppercase'>{program.name}</h3>
                <p className='flex items-center gap-2'>
                        <span><PersonStanding className="h-5 w-5 text-muted-foreground"/></span>
                        Accessible
                </p>
                {program.cpf && 
                    
                    <p className='flex items-center gap-2'>
                        <span><CreditCard className='h-5 w-5 text-muted-foreground'/></span>
                        Éligible Financement CPF
                    </p>
                }
                <p className='flex items-center gap-2'>
                    <Clock className="h-5 w-5 text-muted-foreground" />
                    <span>Durée : {program.durationInHours} heures ({Math.ceil(program.durationInDays)} jours)</span>
                </p>
                {program.capacity && 
                    <p className='flex items-center gap-2'>
                        <span><Users className="h-5 w-5 text-muted-foreground"/></span>
                        Entre {program.capacity.min === 0 ? 1 : program.capacity.min} et {program.capacity.max} stagiaires max.
                    </p>
                }
                <Collapsible open={isOpen} onOpenChange={setIsOpen}>
                    <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full justify-between">
                        Thèmes Abordés
                        {isOpen ? (
                        <ChevronUp className="h-4 w-4" />
                        ) : (
                        <ChevronDown className="h-4 w-4" />
                        )}
                    </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-2 px-2">
                    <ul className="list-disc list-inside space-y-1">
                        {program.steps.map((step) => {
                            return <li key={`${step.souceId} - ${step.text}`} className='text-sm'>{step.text}</li>
                        })}
                    </ul>
                    </CollapsibleContent>
                </Collapsible>
            </div>
            {/* <div className='w-full flex justify-between items-center p-4'>
                    <Link to={program.publicRegistrationUrl.replace('/registration','')}><Button variant='outline'>En savoir plus</Button></Link>
                    <a href="#quickContact"><Button onClick={() => onSelect(program.id)}>Je suis intéressé</Button></a>
            </div> */}
        </div>
    )
}