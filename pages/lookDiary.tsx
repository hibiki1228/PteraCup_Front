import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Diary from "./components/diary";
import Footer from "./components/Footer";
import Header from "./components/header";

export default function LookDiary() {
    const router = useRouter();
    // router.query = { path: "/lookDiary" };
    const testDatas = [
        {
            author: "山田",
            title: "ふるさと",
            date: "2015-01-01",
            diaryText: "元旦から出張だったが、その行き先が偶然俺のふるさとだった。空き時間ができたので小学校の近くを歩いてみた。子供の頃にはなかった〇ーソンが出来てた。懐かしい気持ちになれてたまにはこういうのもいいなって思ってたけど、俺セ〇ン派だしまたしばらく帰省しないかな。",
        },
        {
            author: "Ben",
            title: "I'm sleepy",
            date: "2020-04-09",
            diaryText: "For some reason I was sleepy all day today. I had no particular plans, so I took a nap and slept for 10 hours. OMG:'-(",
        },
        {
            author: "でででのおじさん",
            title: "ワンピース",
            date: "2022-09-09",
            diaryText:
                "今話題のワンピースの映画を見に行った。あのREDってやつ。映画館で映画を見るのはなんだかんだ3年ぶりだったが、めちゃくちゃ泣いた。ほんとに全人類見た方がいい。この日記が届いた人はだまされたと思って見にいってくれ。",
        },
    ];
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
                            <div key={index} className="bg-amber-50 rounded-xl">
                                <div className="bg-yellow-300 text-black">
                                    test:{router.query.history}
                                </div>
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
