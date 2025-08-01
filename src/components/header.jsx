import {Link} from "react-router-dom"
import logo from "../assets/logo.png"
import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";
import LanguageSelector from "./language-selector";
import { usePrograms } from "@/hooks/use-programs";
import { RefreshCcw } from "lucide-react";

export default function Header(){
    const { t } = useTranslation();
    const menu = t('menu');
    const {data, loading, error} = usePrograms();
    return(
      <header className="border-b border-gray-100 bg-white sticky top-0 z-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex h-[80px] items-center justify-between">
            <div className="flex items-center h-full">
              <img src={logo} alt="logo immoetco formations aux métiers émergents du bâtiment" className="h-full"/>
            </div>
            <nav className="hidden md:block">
              <div className="flex items-center space-x-12">
                <Link to="/" className="text-[#16539b] font-medium text-sm">
                  {menu.home}
                </Link>

                {/* Menu déroulant Formations */}
                <div className="relative group">
                  <button className="text-gray-600 hover:text-[#8cad2a] font-medium text-sm transition-colors flex items-center">
                    {menu.trainings.label}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      {
                        loading && <div>
                          <div className="w-full flex items-center gap-2 justify-center">
                            <RefreshCcw size={16} className="animate-spin"/>
                            <p className="font-medium text-sm">Chargement...</p>
                          </div>
                        </div>
                      }
                      {
                        data && data.programs.map(program => 
                          <Link
                            key={program.id}
                            to={`/programs/${program.id}`}
                            className="block px-4 py-3 text-sm font-medium text-black hover:bg-gray-50 hover:text-[#8cad2a] transition-colors"
                          >   
                        {program.name}
                      </Link>
                        )
                      }
                    </div>
                  </div>
                </div>

                <Link to="/faq" className="text-gray-600 hover:text-[#8cad2a] font-medium text-sm transition-colors">
                  {menu.faq}
                </Link>
                <Link
                  to="/actualites"
                  className="text-gray-600 hover:text-[#8cad2a] font-medium text-sm transition-colors"
                >
                  {menu.news}
                </Link>
                <Link
                  to="/a-propos"
                  className="text-gray-600 hover:text-[#8cad2a] font-medium text-sm transition-colors"
                >
                  {menu.about}
                </Link>
                <Link to="/blog" className="text-gray-600 hover:text-[#8cad2a] font-medium text-sm transition-colors">
                  {menu.blog}
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-[#8cad2a] font-medium text-sm transition-colors"
                >
                  {menu.contact}
                </Link>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-[#8cad2a] font-medium text-sm transition-colors"
                >
                  {menu.reviews}
                </Link>
              </div>
            </nav>
            <div className="flex items-center">
              <Button className="bg-[#16539b] hover:border hover:border-[#16539b] hover:text-[#16539b] hover:bg-white hover:cursor-pointer box-border text-white font-medium px-6">{menu.cta}</Button>
            </div>
          </div>
        </div>
      </header>
    )
}