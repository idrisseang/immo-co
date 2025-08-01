import ThankYouPopup from "./thank-you-popup";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function CommentsForm({articleId, previousComments}){
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const addComment = async (articleId, data) => {
        try {
            const newComment = {
                "authorName": data.name,
                "authorEmail": data.email,
                "comment": data.message,
                "approved": false
            }

            const response = await axios.post(`${import.meta.env.VITE_COCKPIT_API_ENDPOINT}/content/item/actus`, {
                data: {
                    "_id": articleId,
                    "comments": [
                        ...previousComments,
                        newComment
                    ]

                }
            }, {
                headers: {"api-key" : import.meta.env.VITE_COCKPIT_API_KEY}
            });
            return response.status;
        } catch (error) {
            console.log("error while adding comment to cms : ", error);
        }
    }
    const onSubmit = async (data) => {
        const status = await addComment(articleId, data);
        if(status === 200){
            setIsPopupOpen(true) //affichage pop up de remerciement
        }
        reset();
    }

    return(
        <form className="container mx-auto px-4 py-5 space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <h2 className="font-bold text-xl text-form-green">Laisser un commentaire !</h2>
                <p className="text-zinc-600 text-sm">Votre adresse e-mail ne sera pas publiée. Les champs obligatoires sont indiqués avec <span className="text-red-500">*</span></p>
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:w-1/2 justify-between gap-4">
            <div className="flex flex-col space-y-2">
                <label htmlFor="name" className="font-medium">
                    Nom <span className="text-red-500">*</span>
                </label>
                <input 
                    type="text" 
                    name="name"
                    id="name"
                    {...register("name", { 
                        required: "Entrez votre nom",
                    })} 
                    className="px-2 py-1 border rounded-sm" 
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>

                <div className="flex flex-col space-y-2">
                <label htmlFor="email" className="font-medium">
                    E-mail <span className="text-red-500">*</span>
                </label>
                <input 
                    type="email" 
                    name="email"
                    id="email"
                    {...register("email", { 
                        required: "L'email est obligatoire",
                        pattern: { value: /^\S+@\S+\.\S+$/, message: "Adresse e-mail invalide" }
                    })} 
                    className="px-2 py-1 border rounded-sm" 
                    placeholder="vous@example.fr"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>
            </div>
            <div className="flex flex-col space-y-2 md:w-1/2">
                <label htmlFor="message" className="font-medium font"> Votre message </label>
                <textarea name="message" id="message" className="border p-2 rounded-md" {...register("message")}></textarea>
            </div>

            <button type="submit" className="w-full md:w-fit self-start bg-form-green text-white text-sm font-medium p-2 shadow-md rounded-sm hover:bg-white hover:border hover:border-form-green hover:text-form-green">Envoyer mon commentaire</button>
            <ThankYouPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} text={"Votre commentaire sera publié prochainement sur le site après validation !"}/>
        </form>
    )
}