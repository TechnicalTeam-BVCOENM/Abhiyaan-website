import Image from "next/image";

export default function EventCard({imgUrl , formLink , route}) {
    return (
        <div id="eventCards" className="flex flex-col justify center w-[25vw] h-auto text-black  rounded-xl  bg-white m-4">
            
                <Image src={imgUrl} alt="event" width={400} height={400}  className=" object-fit h-[25vh] w-[25vw]"/>
                <div className="flex justify-evenly h-10 items-center font-bold text-xl hover:text-orange-500">
                <a href={formLink} target="_blank" rel="noreferrer">
                    <button >Register</button>
                </a>
                <a href={route} target="_blank" rel="noreferrer">
                    <button>Explore</button>
                </a>
                </div>
        </div>
    );
}