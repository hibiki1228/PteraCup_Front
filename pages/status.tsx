import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Footer from "./components/Footer";
import Header from "./components/header";

export default function Status() {
    const router = useRouter();
    console.log(router.query["path"]);

    const user = {
        name: "test",
        date: "20XX/XX/XX",
        page: "test",
        word: "test",
        exchange: "test",
    };
    const query = router.query;
    // useEffect(() => {
    //     console.log(query);
    //     console.log(query.path);
    //     router.query = { path: "/status" };
    // }, [router]);
    return (
        <motion.div
            initial={{
                translateX:
                    router.query.history == "/lookMyDiary" ? -10000 : 10000,
            }}
            animate={{
                translateX: 0,
            }}
            exit={{
                translateX:
                    Object.values(router.query)[0] == "" ? -10000 : 10000,
            }}
        >
            <div className="font-fancy bg-slate-800 ">
                <Header></Header>
                <div className="flex flex-col min-h-screen">
                    <div className="flex-grow">
                        <div className=" text-center">
                            <div className=" text-amber-50 underline decoration-red-300 mx-auto  sm:duration-700 md:duration-700 lg:duration-700 xl:duration-700 xl:w-2/5 lg:w-96  md:w-80 sm:w-64 w-52  xl:text-3xl lg:text-2xl md:text-xl sm:text-lg">
                                <div className="flex flex-row p-4">
                                    <div className="basis-3/5">ユーザー名</div>
                                    <div className="basis-2/5">{user.name}</div>
                                </div>
                                <div className="flex flex-row p-4">
                                    <div className="basis-3/5">利用開始日</div>
                                    <div className="basis-2/5">{user.date}</div>
                                </div>
                                <div className="flex flex-row p-4">
                                    <div className="basis-3/5">総日記数</div>
                                    <div className="basis-2/5">
                                        {user.page}枚
                                    </div>
                                </div>
                                <div className="flex flex-row p-4">
                                    <div className="basis-3/5">総文字数</div>
                                    <div className="basis-2/5">
                                        {user.word}文字
                                    </div>
                                </div>
                                <div className="flex flex-row p-4">
                                    <div className="basis-3/5">
                                        交換した回数
                                    </div>
                                    <div className="basis-2/5">
                                        {user.exchange}回
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </motion.div>
    );
}
