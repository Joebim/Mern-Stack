export const Button = (props) => {
    return <button className={`px-[15px] py-[5px] duration-200 font-semibold rounded-[5px] text-[13px] hover:bg-gray-100 ${props.className}`}>{props.children}</button>
}