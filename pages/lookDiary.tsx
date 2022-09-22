import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import { useEffect } from "react";
import Diary from "./components/diary";
import Footer from "./components/Footer";
import Header from "./components/header";

export default function LookDiary() {
    const router = useRouter();
    // router.query = { path: "/lookDiary" };
    let testDatas = [
        {
            author: "John",
            title: "title",
            date: "2014-01-01",
            diaryText: "this is a test description",
        },
        {
            author: "Ben",
            title: "title",
            date: "2016-03-01",
            diaryText: "this is a test description",
        },
        {
            author: "Mikel",
            title: "title",
            date: "2014-01-09",
            diaryText:
                "this is a test descriptionnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn",
        },
    ];

    useEffect(() => {
        const cookie = parseCookies();
        console.log(cookie);
        testDatas.push({
            author: cookie.username,
            title: "title",
            date: "2022-9-20",
            diaryText: cookie.diaryText,
        });
    }, []);
    // const query = router.query;
    let pageHistory = "";
    // useEffect(() => {
    //     console.log(query);
    //     pageHistory = String(query);
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
                translateX: router.query.history == "/ranking" ? 10000 : -10000,
            }}
            animate={{
                translateX: 0,
            }}
            exit={{
                translateX:
                    Object.values(router.query)[0] == "" ? -10000 : 10000,
            }}
        >
            <div className="font-fancy">
                <Header></Header>

                <div className="flex flex-col min-h-screen">
                    <div className="m-12 mt-16 flex-grow">
                        {testDatas.map((testData, index) => (
                            <div key={index} className="bg-black rounded-xl">
                                <Diary
                                    author={testData.author}
                                    title={testData.title}
                                    date={testData.date}
                                    diaryText={testData.diaryText}
                                ></Diary>
                            </div>
                        ))}
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </motion.div>
    );
}
