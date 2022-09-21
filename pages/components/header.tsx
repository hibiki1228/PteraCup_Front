import Image from "next/image";
export default function Header() {
    const date = new Date();

    return (
        <div
            className="sticky top-0 border-4 rounded-b-2xl border-red-200 bg-gradient-to-r from-pink-200 via-sky-200 to-yellow-200 shadow-2xl
                      shadow-red-400/50 text-gray-600 font-mono space-y-4"
        >
            <div className="text-3xl text-center font-semibold z-10">
                <div>Random Exchange Diary</div>
            </div>
            <div className="flex">
                <div className="basis-3/4 text-xl font-normal text-left text-bottom">
                    <div>
                        Date：
                        {String(date.getFullYear()) +
                            "/" +
                            String(date.getMonth() + 1) +
                            "/" +
                            String(date.getDate())}
                    </div>
                </div>
                <div className="basis-1/4 absolute right-0">
                    <Image
                        alt="touka_otome"
                        src="/images/touka_otome.png"
                        width={80}
                        height={80}
                        objectFit="cover"
                    ></Image>
                </div>
            </div>
        </div>
    );
}
