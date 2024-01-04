import { useContext } from "react";
import { GlobalContext } from "../../Context/GLobalProvider";

export default function AllIcons() {
    const { icons } = useContext(GlobalContext);
    return (
        <div>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 text-center">
                {icons.map((icon, index) => (
                    <div key={index} className="flex flex-col justify-center items-center shadow-lg py-2 hover:bg-orange-300 duration-300">
                        <img src={icon?.image} className="w-10"></img>
                        <p className="font-medium p-2">{icon?.category}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}