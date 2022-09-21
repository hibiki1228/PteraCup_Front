import Image from "next/image";
export default function Header() {
    const date = new Date();

    return (
        <div
            className="sticky top-0 border-4 rounded-b-2xl border-red-200 bg-gradient-to-b from-amber-300 to-amber-100 shadow-2xl
                      shadow-red-400/50 text-gray-600 space-y-4 pt-1"
        >
            <div className="flex flex-row">
                <Image
                    alt="和雲3"
                    src="/images/和雲3.png"
                    width={110}
                    height={55}
                    className="opacity-50"
                ></Image>
                <div className="text-3xl text-center font-serif font-semibold pt-2 z-10">
                    <div>Random Exchange Diary</div>
                </div>
                <Image
                    alt="和雲4"
                    src="/images/和雲4.png"
                    width={110}
                    height={55}
                    className="opacity-50"
                ></Image>
            </div>
            <div className="flex">
                <div className="basis-3/4 text-xl font-normal px-2 text-left text-bottom">
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
                        width={90}
                        height={90}
                        objectFit="cover"
                    ></Image>
                </div>
            </div>
        </div>
    );
}
