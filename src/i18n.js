import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18next
.use(LanguageDetector) // module pour détecter la langue actuelle utilisée dans le navigateur
.use(initReactI18next)
.init({
    debug: false, // en dev mode pour avoir les erreurs en console
    lng: 'fr',
    returnObjects: true, // langue par défaut
    resources: { // objet qui contient le contenu en fonction des différentes langues souhaitées
        fr: {
            translation: {
                menu: {
                    home: "Accueil",
                    trainings: {
                    label: "Formations",
                    item1: "PEMD",
                    item2: "Formations certifiantes"
                    },
                    faq: "FAQ",
                    news: "Actualités",
                    about: "À propos",
                    blog: "Blog",
                    contact: "Contact",
                    reviews: "Avis",
                    cta: "Démarrer"
                },

                heroSection: {
                    title: "Formez-vous aux métiers d'avenir et devenez acteur de la transition du bâtiment",
                    description: "Formez-vous aux métiers émergents et devenez un acteur clé de la transition écologique du bâtiment.Nos formations certifiantes, 100% finançables via le CPF, vous préparent aux compétences de demain.",
                    cta1: "Découvrir nos formations",
                    cta2: "Démarrer ma formation maintenant",
                }
            }
        }, 
        gb: {
            translation: {
                "menu": {
                    home: "Home",
                    trainings: {
                    label: "Programs",
                    item1: "PEMD",
                    item2: "Certified programs"
                    },
                    faq: "FAQ",
                    news: "News",
                    about: "About",
                    blog: "Blog",
                    contact: "Contact",
                    reviews: "Reviews",
                    cta: "Get started now"
                },
                heroSection: {
                    title:"Train for the jobs of the future and become a major player in the building industry's transition.",
                    description: "Train for emerging professions and become a key player in the ecological transition of the building industry. 100% CPF-financed, our certification courses prepare you for the skills of tomorrow.",
                    cta1: "Discover our programs",
                    cta2: "Start my training now"
                }
            }
        },
        es: {
            translation: {
                heroSection: {
                    title: "Formez-vous aux métiers d'avenir et devenez acteur de la transition du bâtiment",
                    description: "Formez-vous aux métiers émergents et devenez un acteur clé de la transition écologique du bâtiment.Nos formations certifiantes, 100% finançables via le CPF, vous préparent aux compétences de demain.",
                    cta1: "Découvrir nos formations",
                    cta2: "Obtenir un devis gratuit"
                }
            }
        }
    }
})