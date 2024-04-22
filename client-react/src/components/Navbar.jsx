import { Button } from "./Button"
import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <>
            <header className="absolute w-full">
                <div className="w-full h-[80px] bg-white px-[20px] sm:px-[120px] flex items-center justify-between">
                    <Link to="/">
                        <h1 className="font-black text-[20px]">Work Buddy</h1>
                    </Link>
                    {<div className="flex flex-row gap-[20px]">
                        <Link to="/signup">
                            <Button>Signup</Button>
                        </Link>
                        <Link to="/login">
                            <Button>Login</Button>
                        </Link>
                    </div>}

                    {/* {<div className="flex flex-row items-center gap-[20px]">
                    <p className="text-[14px] font-medium">josey359@gmail.com</p>
                    <Button className="text-green-500 border-[2px] border-green-500">Logout</Button>
                </div>} */}
                </div>
            </header>
        </>
    )
}