import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Test() {
    const router = useRouter();

    const pageChangeHandler = () => {
        const answer = window.confirm(
            "コメント内容がリセットされます、本当にページ遷移しますか？"
        );
        if (!answer) {
            throw "Abort route";
        }
    };

    const beforeUnloadhandler = (event) => {
        event.returnValue =
            "コメント内容がリセットされます、本当にページ遷移しますか？";
    };

    useEffect(() => {
        router.events.on("routeChangeStart", pageChangeHandler);
        window.addEventListener("beforeunload", beforeUnloadhandler);
        return () => {
            router.events.off("routeChangeStart", pageChangeHandler);
            window.removeEventListener("beforeunload", beforeUnloadhandler);
        };
    }, []);
    const [pageMove, setPageMove] = useState(false);
    return (
        <div
            className={
                "bg-white h-screen " + (pageMove ? styles.fadeInToLeft : "")
            }
        >
            <div>test</div>
            <Link href="/test2" onClick={() => setPageMove(true)}>
                test
            </Link>
            <Link href="/test1" onClick={() => setPageMove(false)}>
                test
            </Link>
        </div>
    );
}
