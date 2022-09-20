import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import Loading from "./components/loading";
export default function Home() {
    const router = useRouter();
    const session = useSession();
    const isReady = router.isReady;
    if (isReady) {
        return <Loading />;
    }
    if (session) {
        router.push("/InputDiary");
    } else {
        return (
            <div>
                <div className="flex">
                    <Link href="/signIn">サインイン</Link>
                    <Link href="/signUp">サインアップ</Link>
                </div>
            </div>
        );
    }
}
