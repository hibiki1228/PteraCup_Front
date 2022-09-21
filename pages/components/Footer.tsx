import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useWindowSize } from "../../lib/hooks/GetWindowSize";
export default function Footer() {
    const { width, height } = useWindowSize();
    const router = useRouter();
    if (
        router.pathname != "/signIn" &&
        router.pathname != "/signUp" &&
        router.pathname != "/"
    ) {
        return (
            <div className="sticky bottom-0">
                <Link href="/makeDiary">
                    <a className=" animate-bounce mx-auto items-center flex -mb-16 justify-center">
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
                <div className=" bg-amber-100 border-amber-200 border-y-2 h-30">
                    <div className="grid grid-cols-5 mt-4 ">
                        <Link href="/ranking">
                            <a
                                className={
                                    " border-2 border-red-300 bg-amber-200 hover:bg-red-200 rounded-full font-medium text-[4px] items-center sm:duration-300 duration-300 justify-center text-center p-1 flex sm:p-4 h-12 mx-auto sm:text-xl  " +
                                    (router.pathname == "/ranking"
                                        ? "bg-red-300 text-cyan-300"
                                        : "bg-amber-200")
                                }
                            >
                                ランキング
                            </a>
                        </Link>
                        <Link href="/lookDiary">
                            <a
                                className={
                                    " border-2 border-red-300 bg-amber-200 hover:bg-red-200 rounded-full font-medium text-[4px] items-center sm:duration-300 duration-300 justify-center text-center p-1 flex sm:p-4 h-12 mx-auto sm:text-xl  " +
                                    (router.pathname == "/lookDiary"
                                        ? "bg-red-300 text-cyan-300"
                                        : "bg-amber-200")
                                }
                            >
                                日記を見る
                            </a>
                        </Link>
                        <div></div>
                        <Link href="/status">
                            <a
                                className={
                                    " border-2 border-red-300 bg-amber-200 hover:bg-red-200 rounded-full font-medium text-[4px] items-center sm:duration-300 duration-300 justify-center text-center p-1 flex sm:p-4 h-12 mx-auto sm:text-xl  " +
                                    (router.pathname == "/status"
                                        ? "bg-red-300 text-cyan-300"
                                        : "bg-amber-200")
                                }
                            >
                                ステータス
                            </a>
                        </Link>
                        <Link href="/lookMyDiary">
                            <a
                                className={
                                    " border-2 border-red-300 bg-amber-200 hover:bg-red-200 rounded-full font-medium text-[4px] items-center sm:duration-300 duration-300 justify-center text-center p-1 flex sm:p-4 h-12 mx-auto sm:text-xl  " +
                                    (router.pathname == "/lookMyDiary"
                                        ? "bg-red-300 text-cyan-300"
                                        : "bg-amber-200")
                                }
                            >
                                過去の日記
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        );
    } else {
        return <div className="sticky bottom-0"></div>;
    }
}
