import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import MakeDiaryButton from "./makeDiaryButton";

export default function Footer() {
    const router = useRouter();
    if (
        router.pathname != "/signIn" &&
        router.pathname != "/signUp" &&
        router.pathname != "/"
    ) {
        return (
            <motion.div
                initial={{
                    translateX: 0,
                }}
                exit={{
                    translateX: 1000,
                }}
                className="sticky bottom-0"
            >
                <div className="">
                    <div className=" bg-amber-100 border-amber-200 border-y-2 h-30">
                        <div className="grid grid-cols-5 mt-4 ">
                            <Link
                                href={{
                                    pathname: "ranking",
                                    query: { history: router.asPath },
                                }}
                                as="/ranking"
                            >
                                <a
                                    className={
                                        " border-2 border-red-300 bg-amber-200 hover:bg-red-200 rounded-full font-medium text-[4px] w-2/3 items-center sm:duration-300 duration-300 justify-center text-center p-1 flex sm:p-4 h-12 mx-auto sm:text-lg container mx-auto  " +
                                        (router.pathname == "/ranking"
                                            ? "bg-red-300 text-cyan-300"
                                            : "bg-amber-200")
                                    }
                                >
                                    ランキング
                                </a>
                            </Link>
                            <Link
                                href={{
                                    pathname: "lookDiary",
                                    query: { history: router.asPath },
                                }}
                                as="/lookDiary"
                            >
                                <a
                                    className={
                                        " border-2 border-red-300 bg-amber-200 hover:bg-red-200 rounded-full font-medium text-[4px] w-2/3 items-center sm:duration-300 duration-300 justify-center text-center p-1 flex sm:p-4 h-12 mx-auto sm:text-lg container mx-auto  " +
                                        (router.pathname == "/lookDiary"
                                            ? "bg-red-300 text-cyan-300"
                                            : "bg-amber-200")
                                    }
                                >
                                    日記を見る
                                </a>
                            </Link>
                            <MakeDiaryButton></MakeDiaryButton>
                            <Link
                                href={{
                                    pathname: "status",
                                    query: { history: router.asPath },
                                }}
                                as="status"
                            >
                                <a
                                    className={
                                        " border-2 border-red-300 bg-amber-200 hover:bg-red-200 rounded-full font-medium text-[4px] w-2/3 items-center sm:duration-300 duration-300 justify-center text-center p-1 flex sm:p-4 h-12 mx-auto sm:text-lg container mx-auto  " +
                                        (router.pathname == "/status"
                                            ? "bg-red-300 text-cyan-300"
                                            : "bg-amber-200")
                                    }
                                >
                                    ステータス
                                </a>
                            </Link>
                            <Link
                                href={{
                                    pathname: "lookMyDiary",
                                    query: { history: router.asPath },
                                }}
                                as="lookMyDiary"
                            >
                                <a
                                    className={
                                        " border-2 border-red-300 bg-amber-200 hover:bg-red-200 rounded-full font-medium text-[4px] w-2/3 items-center sm:duration-300 duration-300 justify-center text-center p-1 flex sm:p-4 h-12 mx-auto sm:text-lg container mx-auto  " +
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
            </motion.div>
        );
    } else {
        return <div className="sticky bottom-0"></div>;
    }
}
