import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Diary from "./components/diary";
import Footer from "./components/Footer";
import Header from "./components/header";

export default function LookMyDiary() {
    const router = useRouter();
    console.log(router.query["path"]);

    const testDatas = [
        {
            author: "user",
            title: "title",
            date: "2014-01-01",
            diaryText: "this is a test description",
        },
        {
            author: "user",
            title: "title",
            date: "2016-03-01",
            diaryText: "this is a test description",
        },
        {
            author: "user",
            title: "title",
            date: "2014-01-09",
            diaryText:
                "this is a test descriptionnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn",
        },
    ];
    // const query = router.query;
    // useEffect(() => {
    //     console.log(query);
    //     console.log(query.test);
    //     router.query = { test: "/lookDiary" };
    // }, [query]);

    return (
        <motion.div
            initial={{
                translateX:
                    router.query.history == "/ranking"
                        ? 10000
                        : router.query.history == "/lookDiary"
                        ? 10000
                        : -10000,
            }}
            animate={{
                translateX: 0,
            }}
            exit={{
                translateX: -10000,
            }}
        >
            <div className="font-fancy">
                <Header></Header>
                <div className="flex flex-col min-h-screen">
                    <div className="m-8 mt-24 flex-grow">
                        {testDatas.map((testData, index) => (
                            <div key={index}>
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
