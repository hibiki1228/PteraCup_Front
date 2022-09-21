import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
export default function Footer() {
    const router = useRouter();
    return (
        <div className="sticky bottom-0 bg-amber-100 border-amber-200 border-y-2 h-20">
            <div className="grid grid-cols-5 mt-4">
                <Link href="/ranking">
                    <a
                        className={
                            " border-2 border-red-300  bg-amber-200 hover:bg-red-200 rounded-full font-medium text-xs text-center p-2 mx-auto sm:text-xl  " +
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
                            " border-2 border-red-300 bg-amber-200 hover:bg-red-200 rounded-full font-medium text-xs text-center p-2 mx-auto sm:text-xl  " +
                            (router.pathname == "/lookDiary"
                                ? "bg-red-300 text-cyan-300"
                                : "bg-amber-200")
                        }
                    >
                        日記を見る
                    </a>
                </Link>
                <Link href="/makeDiary">
                    <a className=" flex justify-center">
                        <div
                            className={
                                "p-8 -mt-20 rounded-full border-4 " +
                                (router.pathname == "/makeDiary"
                                    ? "bg-gradient-to-t from-pink-400 to-pink-200 border-green-300"
                                    : "bg-amber-200")
                            }
                        >
                            <Image
                                alt="pencil"
                                src="/images/pencil.png"
                                width={72}
                                height={64}
                                className="z-10"
                            ></Image>
                            {router.pathname == "/makeDiary" && (
                                <div className="p-2 rounded-full -top-[68px] -ml-[44px] absolute">
                                    <Image
                                        alt="sakura"
                                        src="/images/sakura.png"
                                        // layout="fill"
                                        // objectFit="cover"
                                        width={140}
                                        height={140}
                                        className="rounded-full z-0"
                                    ></Image>
                                </div>
                            )}
                        </div>
                    </a>
                </Link>
                <Link href="/status">
                    <a
                        className={
                            " border-2 border-red-300 bg-amber-200 hover:bg-red-200 rounded-full font-medium text-xs text-center p-2 mx-auto sm:text-xl  " +
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
                            " border-2 border-red-300 bg-amber-200 hover:bg-red-200 rounded-full font-medium text-xs text-center p-2 mx-auto sm:text-xl  " +
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
    );
}
