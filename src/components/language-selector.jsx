import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { changeLanguage } from "i18next"
import { Globe, Languages } from "lucide-react"
import { useTranslation } from "react-i18next"


const languages = ['fr', 'gb']


export default function LanguageSelector(){
    const { i18n } = useTranslation();
    const changeDisplayedLanguage = (code) => {
        changeLanguage(code)
    }
    return(
    <div>
    <Popover>
        <PopoverTrigger open>
            <div className="border flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer m-4 hover:bg-slate-100 hover:border-black ">
                <Languages   />
                <img
                src={`https://flagcdn.com/16x12/${i18n.language}.png`}
                width="16"
                height="12"
                alt={`Drapeau ${i18n.language}`} 
                />
            </div>
        </PopoverTrigger>
        <PopoverContent>
            <div className="flex flex-col space-y-2">
                {
                    languages.map((l, i) => {
                        return <button key={i} className={`p-2 w-fit rounded-md cursor-pointer hover:bg-slate-100 transition-all ease-in duration-300 ${i18n.language === l ? "border border-emerald-900 bg-slate-100" : "text-gray-700"}`}  onClick={ () => changeDisplayedLanguage(l)}>
                            <img
                                src={`https://flagcdn.com/16x12/${l}.png`}
                                width="16"
                                height="12"
                                alt={`Drapeau ${l}`} />
                        </button>
                    })
                }
            </div>
        </PopoverContent>
    </Popover>
    </div>
    )
}