import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { KeyboardEvent, useEffect, useState } from "react";
import { useWindowSize } from "../lib/hooks/GetWindowSize";
import Bookmark from "./components/bookmark";
import Footer from "./components/Footer";
import Header from "./components/header";
import TextArea from "./components/textArea";
export default function MakeDiary() {
    const { height, width } = useWindowSize();
    const [diaryText, setDiaryText] = useState("");
    const [textLength, setTextLength] = useState<number>(0);
    const router = useRouter();
    console.log(router.query["path"]);

    const textMaxLength = 140;
    const handleDiaryTextForm = (event: any) => {
        setDiaryText(event.target.value);
        setTextLength(event.target.value.length);
    };
    const sendDiaryText = () => {
        if (diaryText === "") {
            return;
        }
        setDiaryText("");
    };
    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.ctrlKey && event.key === "Enter") {
            sendDiaryText();
        }
    };

    const query = router.query;
    useEffect(() => {
        console.log(query);
        console.log(query.test);
        router.query = { test: "/makeDiary" };
    }, [query]);
    return (
        <motion.div
            initial={{
                translateX:
                    query.path == "/status" || query.path == "/lookMyDiary"
                        ? 10000
                        : -10000,
            }}
            animate={{
                translateX: 0,
            }}
            exit={{
                translateX:
                    Object.values(router.query)[0] == "" ? -10000 : 10000,
            }}
        >
            <div className="font-fancy bg-slate-800">
                <Image
                    alt="goldsakura"
                    src="/images/goldsakura.png"
                    layout="fill"
                    objectFit="cover"
                    className="-z-5 "
                ></Image>
                <Header></Header>
                <div className="flex flex-col min-h-screen ">
                    <div className="z-0">
                        <form
                            onSubmit={sendDiaryText}
                            className=" mt-12  flex justify-center items-center"
                        >
                            <div className="ml-4">
                                <div className="flex flex-col grid-cols-2 sm:flex-row sm:grid-rows-2">
                                    <div className="flex flex-col grid-cols-2">
                                        <div className=" ml-0 mb-12 xl:ml-32 xl:mb-12  ">
                                            <Bookmark text="今日の出来事"></Bookmark>
                                        </div>
                                        <TextArea
                                            handleKeyDown={handleKeyDown}
                                            width={width}
                                            diaryText={diaryText}
                                            textMaxLength={textMaxLength}
                                            handleDiaryTextForm={
                                                handleDiaryTextForm
                                            }
                                        ></TextArea>
                                        {/* <textarea
                                        onKeyDown={handleKeyDown}
                                        cols={width > 1280 ? 64 : 32}
                                        rows={16}
                                        maxLength={textMaxLength}
                                        value={diaryText}
                                        className=" rounded-md text-black p-2 flex justify-center items-center border-2 resize-none outline-none mx-auto bg-white h-80 border-yellow-200  sm:duration-700 md:duration-700 lg:h-80 lg:text-3xl lg:w-4/5 lg:duration-700 xl:duration-700 xl:h-96 xl:text-4xl  xl:w-4/5"
                                        onChange={handleDiaryTextForm}
                                    ></textarea> */}
                                    </div>
                                    <span className="flex flex-col-reverse grid-cols-3 mx-4">
                                        <div>
                                            <div className="bg-white  p-2 sm:w-32 w-28 mt-4 h-18 sm:text-lg text-[3px] justify-center m-auto sm:h-18 flex   flex-row-reverses bottom-0 rounded">
                                                <button
                                                    type="submit"
                                                    className="capitalize

                                            text-black
                                            text-sm
                                            relative
                                            cursor-pointer
                                            transition-all
                                            duration-500
                                            before:content-['']
                                            before:absolute
                                            before:-bottom-0
                                            before:left-0
                                            before:w-0
                                            before:h-0.5
                                            before:rounded-full
                                            before:opacity-0
                                            before:transition-all
                                            before:duration-500
                                            before:bg-gradient-to-r
                                            before:from-gray-600
                                            before:via-slate-400
                                            before:to-zinc-500
                                            hover:before:w-full
                                            hover:before:opacity-100

                                            "
                                                >
                                                    日記をつける
                                                    <Image
                                                        alt="pencil"
                                                        src="/images/pencil.png"
                                                        width={30}
                                                        height={24}
                                                    ></Image>
                                                </button>
                                            </div>
                                        </div>
                                    </span>
                                </div>
                                <div className="text-white text-right">
                                    {textLength}文字
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </motion.div>
    );
}
