import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useWindowSize } from "../../lib/hooks/GetWindowSize";

export default function MakeDiaryButton() {
    const router = useRouter();
    const { width, height } = useWindowSize();
    return (
        <Link href="/makeDiary">
            <a
                className={
                    " flex justify-center items-center -mt-16" +
                    (router.pathname == "/makeDiary" ? " animate-bounce" : "")
                }
            >
                <div
                    className={
                        "p-4  rounded-full border-4 sm:p-4 duration-300 sm:duration-300 " +
                        (router.pathname == "/makeDiary"
                            ? "bg-gradient-to-t from-pink-400 to-pink-200 border-green-300"
                            : "bg-amber-200")
                    }
                >
                    <Image
                        alt="pencil"
                        src="/images/pencil.png"
                        width={width > 640 ? 72 : 36}
                        height={width > 640 ? 64 : 32}
                        className="z-10"
                    ></Image>
                    {router.pathname == "/makeDiary" && (
                        <div className="sm:p-1 p-1 rounded-full sm:-top-[0px] sm:-ml-[23px] -top-[0px] -ml-[20px] duration-300 sm:duration-300 absolute">
                            <Image
                                alt="sakura"
                                src="/images/sakura.png"
                                width={width > 640 ? 108 : 70}
                                height={width > 640 ? 100 : 70}
                                className="rounded-full z-0"
                            ></Image>
                        </div>
                    )}
                </div>
            </a>
        </Link>
    );
}
