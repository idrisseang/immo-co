import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../components/ui/accordion";
import { lazy, Suspense } from "react"
const SafeHTML = lazy(() => import("../hooks/use-safe-html"));

export default function FAQ({data}) {
    
    return (
        <Accordion type="single" collapsible className="w-full text-start ">
            {
                data && data.map((el, i) => {
                    return <AccordionItem value={`item${i}`} key={i}>
                    <AccordionTrigger className={"cursor-pointer"}>{el.items?.question || el.question}</AccordionTrigger>
                    <AccordionContent>
                       <Suspense fallback={<div>Chargement...</div>}>
                        <SafeHTML htmlContent={el.items?.answer || el.answer}/>
                       </Suspense>
                    </AccordionContent>
                </AccordionItem>
                })
            }
        </Accordion>
    )
}