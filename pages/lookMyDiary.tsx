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
            author: "一般通過オタク",
            title: "あけおめ",
            date: "2015-01-01",
            diaryText: "あけましておめでとうございます！僕昨年は受験勉強で全然推し事できなかったし早いとこ大学受かってバイト始めてライブいっぱい行きたい！っていうのが今年の抱負！",
        },
        {
            author: "一般通過オタク",
            title: "title",
            date: "2020-04-09",
            diaryText: "はやり病のせいで推しのライブがなくなった。この感染の波はいったいいつ収まるのだろうか。僕が耐えきれなくなってしぬのと今回延期になったライブが開催されるのどっちが先だろうな...。",
        },
        {
            author: "一般通過オタク",
            title: "はぁ",
            date: "2022-09-09",
            diaryText:
                "ライブ行ってきた、、、いやまじで推し尊すぎた。もう3回目なのに毎回実在したんだ...って感動して泣けるの控えめに言って天才だろ。しばらくは余韻に浸って幸せな生活が送れそう。ありがとう推しよ。",
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
