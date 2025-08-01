import i18n from "i18next"
import { initReactI18next } from "react-i18next"



i18n
.use(initReactI18next) // initialiser i18n pour react
.init({
    
})
export default function Test(){
  return(
    <p>Hello, welcome on this website.</p>
  )  
}