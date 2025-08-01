
import { Check } from "lucide-react"
import Confetti from "react-confetti-boom"
import { Button } from "./ui/button"

export default function ThankYouPopup({ isOpen, onClose, text }) {

  return (
    <>
    
      {isOpen && (
        <>
        <div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={onClose}
        >
          <div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 15 }}
            className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col items-center text-center">
              <div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="mb-4 bg-green-100 rounded-full p-2"
              >
                <Check className="w-12 h-12 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Merci !</h2>
              <p className="mb-6">
                <Confetti mode="fall" particleCount={250} colors={["#02376b", "#7eba29"]} />
                {text ? text : "Votre message a bien été envoyé. Nos équipes prendront contact avec vous très prochainement."}
              </p>
              <a href="/">
                <Button>
                    <a href="/">Aller à l'accueil</a>
                </Button>
              </a>
            </div>
          </div>
        </div>
        </>
      )}
    </>
  )
}

