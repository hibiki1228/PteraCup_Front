import Image from "next/image";
import { useWindowSize } from "../../lib/hooks/GetWindowSize";
export default function Header() {
    const date = new Date();
    const { width, height } = useWindowSize();

    return (
        <div
            className="sticky top-0 border-4 rounded-b-2xl border-red-200 bg-gradient-to-b from-amber-300 to-amber-100 shadow-2xl
                      shadow-red-400/50 text-gray-600 space-y-4 pt-1 z-50"
        >
            <div className="flex flex-row grid-rows-3 justify-center">
                <Image
                    alt="和雲3"
                    src="/images/和雲3.png"
                    width={220}
                    height={55}
                    className="opacity-50"
                ></Image>
                <div className="sm:text-3xl xl:text-5xl text-lg text-center font-serif font-semibold pt-2 z-10">
                    <div>Random Exchange Diary</div>
                </div>
                <Image
                    alt="和雲4"
                    src="/images/和雲4.png"
                    width={220}
                    height={55}
                    className="opacity-50"
                ></Image>
            </div>
            <div className="flex">
                <div className="basis-3/4 text-xs top-24 sm:text-xl font-normal px-2 absolute sm:top-8  text-left text-bottom">
                    <div>
                        Date：
                        {String(date.getFullYear()) +
                            "/" +
                            String(date.getMonth() + 1) +
                            "/" +
                            String(date.getDate())}
                    </div>
                </div>
                <div className="basis-1/4 absolute  right-0">
                    <Image
                        alt="touka_otome"
                        src="/images/touka_otome.png"
                        width={(1 * width) / 5}
                        height={(1 * width) / 5}
                        objectFit="cover"
                    ></Image>
                </div>
            </div>
        </div>
    );
}
