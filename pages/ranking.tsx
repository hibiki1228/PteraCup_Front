import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useState } from "react";

import Footer from "./components/Footer";
import Header from "./components/header";
import RankingElement from "./components/rankingElement";
export default function Ranking() {
    const router = useRouter();
    console.log(router.query["path"]);

    const initialTestDatas = [
        {
            username: "test",
            pageNumber: 23,
            wordNumber: 200,
            exchangeNumber: 100,
        },
        {
            username: "test",
            pageNumber: 34,
            wordNumber: 300,
            exchangeNumber: 30,
        },
        {
            username: "test",
            pageNumber: 192,
            wordNumber: 100,
            exchangeNumber: 50,
        },
        {
            username: "test",
            pageNumber: 12,
            wordNumber: 500,
            exchangeNumber: 20,
        },
        {
            username: "test",
            pageNumber: 100,
            wordNumber: 1000,
            exchangeNumber: 10,
        },
    ];

    const [pagemove, setpagemove] = useState(false);
    const [outputType, setOutputType] = useState("pageNumber");
    const [testDatas, setTestDatas] = useState(initialTestDatas);
    const handleSortByExchangeNumber = () => {
        setOutputType("exchangeNumber");
        testDatas.sort((a, b) => b.exchangeNumber - a.exchangeNumber);
    };
    const handleSortByWordNumber = () => {
        setOutputType("wordNumber");
        testDatas.sort((a, b) => b.wordNumber - a.wordNumber);
    };
    const handleSortByPageNumber = () => {
        setOutputType("pageNumber");
        testDatas.sort((a, b) => b.pageNumber - a.pageNumber);
    };
    // const query = router.query;
    // let pageHistory = "";
    // useEffect(() => {
    //     console.log(query);
    //     pageHistory = String(query.ranking);
    //     router.query = {
    //         lookDiary: "false",
    //         makeDiary: "false",
    //         lookMyDiary: "false",
    //         status: "false",
    //         ranking: "true",
    //     };
    // }, [query]);

    return (
        <motion.div
            initial={{
                translateX: -10000,
            }}
            animate={{
                translateX: 0,
            }}
            exit={{
                translateX:
                    Object.values(router.query)[0] == "" ? -10000 : 10000,
            }}
        >
            <div className="font-fancy ">
                <Header></Header>

                <div>
                    <div className=" flex flex-col right-72  top-32  w-screen fixed text-black  justify-center items-center">
                        <button onClick={() => setpagemove(true)}>test</button>
                        <button onClick={() => setpagemove(false)}>test</button>
                        <button
                            className={
                                "w-1/5 h-12 m-4 rounded-xl border-2 " +
                                (outputType == "pageNumber"
                                    ? "bg-green-200"
                                    : "bg-yellow-200")
                            }
                            onClick={handleSortByPageNumber}
                        >
                            ページ数
                        </button>
                        <button
                            className={
                                "w-1/5 h-12 m-4 rounded-xl border-2 " +
                                (outputType == "wordNumber"
                                    ? "bg-green-200"
                                    : "bg-yellow-200")
                            }
                            onClick={handleSortByWordNumber}
                        >
                            文字数
                        </button>
                        <button
                            className={
                                "w-1/5 h-12 m-4 rounded-xl border-2 " +
                                (outputType == "exchangeNumber"
                                    ? "bg-green-200"
                                    : "bg-yellow-200")
                            }
                            onClick={handleSortByExchangeNumber}
                        >
                            交換数
                        </button>
                    </div>
                    <div className="flex flex-col min-h-screen">
                        <div className="mt-16">
                            {testDatas.map((data, index) => (
                                <RankingElement
                                    key={index}
                                    username={data.username}
                                    pageNumber={data.pageNumber}
                                    wordNumber={data.wordNumber}
                                    exchangeNumber={data.exchangeNumber}
                                    outputType={outputType}
                                    rank={index + 1}
                                ></RankingElement>
                            ))}
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </motion.div>
    );
}
