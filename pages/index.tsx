import Link from "next/link";
import { useRouter } from "next/router";
import { parseCookies, setCookie } from "nookies";
export default function Home() {
    const router = useRouter();
    const cookies = parseCookies();
    const uid = "test";
    setCookie(null, "accessToken", uid, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
    });
    // if (cookies.accessToken !== undefined) {
    //     router.push("/inputDiary");
    // } else {
    return (
        <div>
            <div className="text-5xl w-64 mx-auto">
                <div>welcome to</div>
                <div className="w-1/2 mx-auto text-8xl">
                    <div className="text-3xl ">
                        R<small>andom</small>
                    </div>
                    <div className="text-3xl ml-3">
                        E<small>xchange</small>
                    </div>
                    <div className="text-3xl ml-8">
                        D<small>iary</small>
                    </div>
                </div>
            </div>
            <div className="flex w-1/2 mx-auto">
                <Link href="/signIn">
                    <div className="m-6 rounded-xl w-36 h-16 text-center  hover:border-double border-2 border-yellow-200 hover:bg-blue-300">
                        サインイン
                    </div>
                </Link>
                <Link href="/signUp">
                    <div className="m-6 rounded-xl w-36 h-16 text-center  hover:border-double border-2 border-yellow-200 hover:bg-blue-300">
                        サインアップ
                    </div>
                </Link>
            </div>
        </div>
    );
}
// }
