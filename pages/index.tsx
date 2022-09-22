import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { parseCookies, setCookie } from "nookies";
import Footer from "./components/Footer";
import Header from "./components/header";
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
            <div className=" font-fancy">
                <Header></Header>
                <div className="flex flex-col min-h-screen">
                    <div className="flex-grow">
                        <div className="text-5xl font-semibold w-64 mx-auto mt-24">
                            <div className="text-center mb-6 z-0">
                                welcome to
                            </div>
                            <div className=" flex justify-center items-center -mt-48 -ml-32 -z-1 absolute">
                                <Image
                                    alt="flowerflame"
                                    src="/images/flowerflame.png"
                                    width={500}
                                    height={400}
                                    // layout="fill"
                                    // objectFit="cover"
                                ></Image>
                            </div>
                            <div className="w-1/2 mx-auto text-8xl">
                                <div className="text-4xl mb-1">
                                    <span className="text-red-500">R</span>
                                    <small>andom</small>
                                </div>
                                <div className="text-4xl ml-3 mb-1">
                                    <span className="text-red-500">E</span>
                                    <small>xchange</small>
                                </div>
                                <div className="text-4xl ml-8 mb-12">
                                    <span className="text-red-500">D</span>
                                    <small>iary</small>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-screen items-center justify-center mt-8">
                            <Link href="/signIn">
                                <div className="mx-10 my-12 px-4 py-2 rounded-xl text-center text-red-300  hover:border-double border-2 border-yellow-200 hover:bg-cyan-300 bg-cyan-50">
                                    サインイン
                                </div>
                            </Link>
                            <Link href="/signUp">
                                <div className="mx-10 my-12 px-3 py-2 rounded-xl text-center  text-red-300 hover:border-double border-2 border-yellow-200 hover:bg-cyan-300 bg-cyan-50">
                                    サインアップ
                                </div>
                            </Link>
                        </div>
                    </div>
                    <Footer></Footer>
                </div>
            </div>
        </div>
    );
}
// }
