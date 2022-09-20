import Link from "next/link";
import { useRouter } from "next/router";
export default function Footer() {
    const router = useRouter();
    return (
        <div className="sticky bottom-0 bg-amber-100 border-amber-200 border-y-2 h-20">
            <div className="grid grid-cols-4 mt-4">
                <Link href="/makeDiary">
                    <div
                        className={
                            " border-2 border-red-200 bg-amber-200 rounded-full font-medium text-lg text-center p-2 mx-auto " +
                            (router.pathname == "/inputDiary"
                                ? "bg-red-200 text-cyan-300"
                                : "bg-amber-200")
                        }
                    >
                        日記を書く
                    </div>
                </Link>
                <Link href="/lookDiary">
                    <div
                        className={
                            " border-2 border-red-200 bg-amber-200 rounded-full font-medium text-lg text-center p-2 mx-auto " +
                            (router.pathname == "/lookDiary"
                                ? "bg-red-200 text-cyan-300"
                                : "bg-amber-200")
                        }
                    >
                        日記を見る
                    </div>
                </Link>
                <Link href="/status">
                    <div
                        className={
                            " border-2 border-red-200 bg-amber-200 rounded-full font-medium placeholder:text-lg text-center p-2 mx-auto " +
                            (router.pathname == "/status"
                                ? "bg-red-200 text-cyan-300"
                                : "bg-amber-200")
                        }
                    >
                        ステータス
                    </div>
                </Link>
                <Link href="/lookMyDiary">
                    <div
                        className={
                            " border-2 border-red-200 bg-amber-200 rounded-full font-medium placeholder:text-lg text-center p-2 mx-auto " +
                            (router.pathname == "/lookMyDiary"
                                ? "bg-red-200 text-cyan-300"
                                : "bg-amber-200")
                        }
                    >
                        過去の日記
                    </div>
                </Link>
            </div>
        </div>
    );
}
