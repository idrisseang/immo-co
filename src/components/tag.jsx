export default function Tag({text, small}){
    return(
        <span className={`${small ? 'text-sm font-medium bg-form-green text-white px-2 rounded-sm' : 'px-2 py-1.5 bg-main-green font-medium text-sm text-white rounded-sm'} hover:text-black`}>
            {text}
        </span>
    )
}