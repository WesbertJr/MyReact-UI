
export default function Header({title, label}) {
    return (
        <>
        <h1 className='pt-12 pb-4 font-extrabold'>{title}</h1>
        <p className="text-2xl text-gray-300/60 pb-4">
            {label}
        </p>        
        </>
    )
}