import {
  Award,
  BookOpen,
  Star,
  Users,
  Target,
  TrendingUp,
  Calendar,
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
} from "lucide-react"
import {Link} from "react-router-dom"
import Qualiopi from "../assets/qualiopi.png"
import Robot from "../assets/version-robot.png"
import CPF from "../assets/cpf.png"

import Classroom from "../assets/fake-img.jpg"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import { useTranslation } from "react-i18next"
import WhatsappBtn from "@/components/whatsapp-btn"
import FAQSection from "@/components/faq-section"
import Header from "@/components/header"
import { useEffect, useState } from "react"
import axios from "axios"
import ActusSection from "@/components/actu-section"
import Newsletter from "@/components/newsletter/newsletter-section"
import { Toaster } from "react-hot-toast"
import ProgramsSection from "@/components/programs/programs-section"
import HeroSection from "@/components/hero-section"

export default function Home() {
  const { t } = useTranslation();
  const heroContent = t('heroSection');
  const menu = t('menu');
  const date = new Date(Date.now()).getFullYear()
  const [actus, setActus] = useState([])

  useEffect( () => {
        const getActus = async () => {
            try {
                const {data} = await axios.get(`http://cockpit.immoetco.com/api/content/items/actus`, {
                    headers: {'api-key' : import.meta.env.VITE_COCKPIT_API_KEY}
                });
                setActus(data)
            } catch (error) {
                console.log("il y'a eu une erreur lors de la récupération des actus disponibles.")
            }
        }
        getActus();
    }, [actus]);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Toaster  position="top-center"/>
      <Header />

      <div className="bg-[#8cad2a] w-fit p-2 rounded-full bottom-4 fixed right-4 z-50 animate-pulse cursor-pointer">
        <a href="https://wa.me/33582730732" target="_blank">
        <WhatsappBtn color={'white'}/>
        </a>
      </div>
      <HeroSection heroContent={heroContent}/>

      {/* Formulaire rapide de contact */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <Card className="max-w-4xl mx-auto border-0 shadow-xl bg-gradient-to-r from-[#8cad2a] to-[#718c22] text-white">
            <CardContent className="p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-medium mb-6">Obtenez votre devis personnalisé</h2>
                  <p className="text-xl text-gray-100 mb-8">
                    Nos conseillers vous accompagnent dans votre projet de formation. Réponse sous 24h garantie.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>Financement CPF jusqu'à 100%</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>Accompagnement personnalisé</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>Certification reconnue</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-8">
                  <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <Input placeholder="Prénom" className="border-gray-200 text-gray-900" />
                      <Input placeholder="Nom" className="border-gray-200 text-gray-900" />
                    </div>
                    <Input placeholder="Email" type="email" className="border-gray-200 text-gray-900" />
                    <Input placeholder="Téléphone" type="tel" className="border-gray-200 text-gray-900" />
                    <Textarea
                      placeholder="Votre projet de formation..."
                      className="border-gray-200 text-gray-900 h-24"
                    />
                    <Button className="w-full bg-[#16539b] hover:bg-[#0f3e75] text-white font-medium py-3">
                      Recevoir mon devis gratuit
                    </Button>
                  </form>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Liste des formations */}
      <ProgramsSection />

      {/* Bannière 100% CPF */}
      <section className="py-20 bg-[#16539b]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-[#8cad2a] rounded-3xl p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#8cad2a] to-[#a6c73e] opacity-90"></div>
              <div className="relative z-10">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">100% Finançable CPF</h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Utilisez vos droits à la formation pour vous reconvertir sans débourser un euro. Nos formations sont
                  éligibles au Compte Personnel de Formation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-white text-[#16539b] cursor-pointer hover:bg-gray-100 font-medium px-8 py-4">
                    Se financer via CPF
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-5xl font-light text-[#16539b] mb-6 tracking-tight">Ils ont réussi leur reconversion</h2>
            <p className="text-xl text-gray-600 font-thin">Plus de 500 apprenants nous font confiance</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Marie Dubois",
                content:
                  "Grâce à Immo&Co, j'ai pu me spécialiser dans un domaine d'avenir. La formation était complète et l'accompagnement exceptionnel. J'ai trouvé un emploi 2 semaines après ma certification !",
                rating: 5,
                image: "/placeholder.svg?height=60&width=60",
              },
              {
                name: "Pierre Martin",
                content:
                  "Une formation qui m'a ouvert de nouveaux horizons. Les intervenants sont des experts du terrain et le contenu est ultra-pratique. Mon chiffre d'affaires a doublé en 6 mois.",
                rating: 5,
                image: "/placeholder.svg?height=60&width=60",
              },
              {
                name: "Sophie Laurent",
                content:
                  "Formation de qualité qui répond parfaitement aux enjeux actuels des entreprises. L'approche pédagogique est excellente et les outils fournis sont directement utilisables.",
                rating: 5,
                image: "/placeholder.svg?height=60&width=60",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border border-[#16539b] bg-white hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#8cad2a] fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-8 leading-relaxed italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-medium text-[#16539b] mb-1">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Présentation du centre de formation */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-5xl font-light text-[#16539b] mb-8 tracking-tight">
                Immo&Co, votre partenaire formation
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Depuis 2020, nous accompagnons les professionnels dans leur montée en compétences sur les métiers
                émergents. Notre expertise reconnue et notre approche pédagogique innovante garantissent votre réussite.
              </p>

              <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-light text-[#8cad2a] mb-2">500+</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">Apprenants formés</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-light text-[#8cad2a] mb-2">95%</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">Taux de réussite</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-light text-[#8cad2a] mb-2">4.8/5</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-light text-[#8cad2a] mb-2">85%</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">Insertion pro</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <img
                  src={Classroom}
                  alt="Centre de formation Immo&Co"
                  className="w-full h-80 object-cover rounded-2xl mb-6"
                />
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <Users className="w-8 h-8 text-[#8cad2a] mx-auto mb-2" />
                    <div className="text-sm font-medium">Formateurs experts</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <Target className="w-8 h-8 text-[#8cad2a] mx-auto mb-2" />
                    <div className="text-sm font-medium">Pédagogie adaptée</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <TrendingUp className="w-8 h-8 text-[#8cad2a] mx-auto mb-2" />
                    <div className="text-sm font-medium">Suivi carrière</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection title={"Questions fréquentes"} description={"Les réponses à vos questions sur nos formations"}/>
      
              {/* <p className="text-gray-600 mb-6">Vous avez d'autres questions ?</p>
              <Button className="bg-[#8cad2a] hover:bg-[#718c22] text-white font-medium px-8 py-3">
                Contactez nos conseillers
              </Button> */}
      {/* Blog/Actualités */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">

            <ActusSection actus={actus} title={"L'actualité des métiers émergents"} desc={"Restez informé des dernières tendances et opportunités du secteur"}/>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-[#8cad2a] text-[#8cad2a] hover:bg-[#8cad2a] hover:text-white px-8 py-3"
            >
              Voir tous les articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />

      {/* Footer avec logos Qualiopi et CPF */}
      <footer className="bg-white pt-20 pb-6 border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12 mb-12">
            <div className="">
              <h3 className="text-2xl font-semibold text-[#16539b] mb-4 tracking-tight">Immo&Co</h3>
              <p className="text-gray-600 mb-8 max-w-md leading-relaxed">
                Formation professionnelle pour les secteurs émergents. Programmes certifiés avec résultats garantis.
              </p>

              {/* Réseaux sociaux */}
              <div className="flex items-center space-x-4 mb-8">
                <Link to={import.meta.env.VITE_FB_URL} target="_blank" className="text-gray-400 hover:text-[#8cad2a] transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="currentColor"/>
                  </svg>
                </Link>
                <Link to={import.meta.env.VITE_LINKEDIN_URL} target="_blank" className="text-gray-400 hover:text-[#8cad2a] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Link>
              </div>

              {/* Logos certifications */}
              <div className="flex items-center space-x-6 mb-8">
                
                  <img src={Qualiopi} alt="Logo Qualiopi" className="rounded-md border" />
              
               
                  <img src={CPF} alt="Logo CPF" className="" />
              </div>
            </div>

            <div>
              <h4 className="font-medium text-[#16539b] mb-6">Formations</h4>
              <ul className="space-y-4 text-gray-600">
                <li>
                  <Link to="/formations/pemd" className="hover:text-[#8cad2a] transition-colors">
                    Certification PEMD
                  </Link>
                </li>
                <li>
                  <Link to="/formations/economie-circulaire" className="hover:text-[#8cad2a] transition-colors">
                    Économie Circulaire
                  </Link>
                </li>
                <li>
                  <Link to="/formations" className="hover:text-[#8cad2a] transition-colors">
                    Toutes les formations
                  </Link>
                </li>
                <li>
                  <Link to="/financement" className="hover:text-[#8cad2a] transition-colors">
                    Financement CPF
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-[#16539b] mb-6">Support</h4>
              <ul className="space-y-4 text-gray-600">
                <li>
                  <Link to="/faq" className="hover:text-[#8cad2a] transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-[#8cad2a] transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="hover:text-[#8cad2a] transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/actualites" className="hover:text-[#8cad2a] transition-colors">
                    Actualités
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-[#16539b] mb-6">Contact</h4>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-3 text-[#8cad2a]" />
                  <a href="tel:+33582730732" className="hover:text-[#8cad2a] transition-colors">
                    +33582730732
                  </a>
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-3 text-[#8cad2a]" />
                  <a to="mailto:contact@Immo&Co.fr" className="hover:text-[#8cad2a] transition-colors">
                    contact@immoetco.fr
                  </a>
                </li>
                <li className="flex items-start">
                  <MapPin className="w-4 h-4 mr-3 text-[#8cad2a] mt-1" />
                  <span>
                    71 Rue Desnouettes,
                    <br />
                    75015 Paris.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
            <p>&copy; {date} Immo&Co. Tous droits réservés.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/mentions-legales" className="hover:text-[#8cad2a] transition-colors">
                Mentions légales
              </Link>
              <Link to="/politique-confidentialite" className="hover:text-[#8cad2a] transition-colors">
                Politique de confidentialité
              </Link>
              <Link to="/cgv" className="hover:text-[#8cad2a] transition-colors">
                CGV
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
