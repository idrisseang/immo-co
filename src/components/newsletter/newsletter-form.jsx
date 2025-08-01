import axios from "axios";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function NewsletterForm(){
    const {reset, handleSubmit, formState: {errors}, register} = useForm();

    const onSubmitNewsletterForm = async(data) => {
        const {email} = data;
        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/newsletter/add`, {email})
            if(response.data) toast.success(response.data.message)
            reset();
        } catch (error) {
            if(error.response) {
                toast.error(error.response.data.message)
                console.error(error)
            } else {
                toast.error("Problème serveur. Veuillez réessayer!")
                console.log(error)
            }
        }
    }

    return(
        <form className=" max-w-md mx-auto" onSubmit={handleSubmit(onSubmitNewsletterForm)}>
            <div className="flex flex-col sm:flex-row gap-4">
                <Input
                    type="email"
                    placeholder="Ex: johndoe@gmail.com"
                    className="bg-white text-[#16539b] placeholder:text-gray-500 h-12 border-0"
                    name="email"
                    id="email"
                    {...register('email', {required: "Votre adresse mail est obligatoire !"})}
                />
                <Button className="bg-[#8cad2a] hover:bg-[#718c22] cursor-pointer rounded-sm text-white font-medium h-12 px-8">Je m'inscris*</Button>
            </div>
            {errors.email && <p className="self-start mt-4 bg-red-200 py-1.5 rounded-md text-red-500">❌ {errors.email.message}</p>}
        </form>
    )
}