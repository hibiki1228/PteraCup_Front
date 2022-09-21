import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/header";
import RankingElement from "./components/rankingElement";
export default function Ranking() {
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
    const [outputType, setOutputType] = useState("pageNumber");
    const [testDatas, setTestDatas] = useState(initialTestDatas);
    const handleSortByExchangeNumber = () => {
        setOutputType("exchangeNumber");
        testDatas.sort((a, b) => b.exchangeNumber - a.exchangeNumber);
        console.log(testDatas);
    };
    const handleSortByWordNumber = () => {
        setOutputType("wordNumber");
        testDatas.sort((a, b) => b.wordNumber - a.wordNumber);
        console.log(testDatas);
    };
    const handleSortByPageNumber = () => {
        setOutputType("pageNumber");
        testDatas.sort((a, b) => b.pageNumber - a.pageNumber);
        console.log(testDatas);
    };
    return (
        <div className="font-fancy">
            <Header></Header>
            <div>
                <div className=" flex flex-col right-72  top-32  w-screen fixed text-black  justify-center items-center">
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
    );
}
