import { useRouteError } from "react-router-dom";
import pegPeople from "../assets/peg-people.png";

const ErrorPage = () => {
    const error = useRouteError();
    

    return (
        <div id="error-page" className="h-screen flex items-center justify-center">
            <div className="flex flex-col items-center">
                <h1 className="text-3xl text-black text-zinc-500 my-8">Oops. That didn't work...</h1>
                <div className="text-8xl text-black text-zinc-500 leading-tight">{error.status ?? "666"}</div>
                <p className="text-2xl justify-center my-2"><i>{error.statusText || error.message}</i></p>
                <a href="/">
                    <div className="flex flex-col items-center justify-center my-8">
                        <img src={pegPeople} alt="Missing person" className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6" />
                        <div className="mt-4">Go back to landing page...</div>
                    </div>
                </a>                 
                
                                
                               
            </div>
        </div>
    )
}

export default ErrorPage