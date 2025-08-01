import ProgramsList from "./programs-list";

export default function ProgramsSection(){
    return(
        <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-5xl font-light text-[#16539b] mb-6 tracking-tight">Nos formations certifiantes</h2>
            <p className="text-xl text-gray-600 leading-relaxed font-thin">
              Spécialisez-vous dans les métiers émergents à forte demande
            </p>
          </div>
          <ProgramsList />
        </div>
      </section>
    )
}