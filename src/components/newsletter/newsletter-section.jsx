import NewsletterForm from "./newsletter-form";

export default function Newsletter(){
    return(
        <section className="py-10 bg-[#16539b]">
            <div className="container mx-auto px-6 lg:px-8 text-white">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-5xl font-light mb-6 tracking-tight">Restez informé</h2>
                <p className="xl:text-lg mb-12">
                Recevez nos actualités sur les secteurs émergents et nos nouvelles formations
                </p>
                <NewsletterForm />
                <p className="text-xs font-medium mt-6">* En validant ce formulaire, vous autorisez Immo&Co à utiliser votre adresse e-mail pour vous envoyer des informations et actualités. Vous pouvez vous désabonner à tout moment via le lien présent dans nos e-mails.</p>
            </div>
            </div>
      </section>
    )
}