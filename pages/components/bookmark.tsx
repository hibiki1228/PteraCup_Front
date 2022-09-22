import Image from "next/image";
type propsType = {
    text: string;
};
export default function Bookmark(props: propsType) {
    return (
        <div>
            <div className="w-28 h-4 z-20 -ml-20 mt-4 rotate-12 border-2 absolute bg-white rounded"></div>
            <div className="w-28 h-4 z-30 -ml-20 mt-8 rotate-50 border-2 absolute bg-white rounded"></div>
            <div className="w-6 h-6 z-30 ml-4  mt-6 rotate-36 border-2 absolute bg-white rounded-xl"></div>
            <div className="rounded-full z-10 w-5 h-5 mt-7 ml-4 bg-black absolute"></div>
            <div className="bg-pink-100 w-64 h-20 z-20 opacity-25 absolute rounded"></div>
            <div className="bg-pink-300 w-60 h-16 absolute ml-2 mt-2 rounded"></div>
            <div className="absolute ml-12 mt-6 z-30">{props.text}</div>
            <div className="absolute ml-36 -mt-3 z-10">
                <Image
                    alt="four_clover"
                    src="/images/clover.png"
                    width={100}
                    height={100}
                    className="-rotate-90"
                ></Image>
            </div>
        </div>
    );
}
