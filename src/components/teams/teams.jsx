import Link from 'next/link';

const Teams = () => {
    return (
        <div
            className=" z-10 flex flex-col items-center justify-center gap-4 pt-16"
            id="teams"
        >


            <Link href={`/web-team`}>
                <div className="btnnn p-4 cursor-pointer text-black">Web Development Team</div>

            </Link>

            <Link href="/council" >
                <div className="btnnn p-4 cursor-pointer text-black " id="ssbtn">
                    Student Council Team
                </div>
            </Link>
        </div>
    );
};

export default Teams;
