import Image from "next/image";
import { KeyboardEvent, useState } from "react";
import { useWindowSize } from "../lib/hooks/GetWindowSize";
import Bookmark from "./components/bookmark";
import Footer from "./components/Footer";
import Header from "./components/header";

export default function MakeDiary() {
    const { height, width } = useWindowSize();
    const [diaryText, setDiaryText] = useState("");
    const [textLength, setTextLength] = useState<number>(0);
    // const box = useRef(0);

    const textMaxLength = 100;
    // const test = () => {
    //     return (
    //         "rounded-full bg-blue-500 w-8 h-8 bg-gradient-round-" + textLength
    //     );
    // };

    // useEffect(() => {
    //     test();
    // }, [textLength]);
    const handleDiaryTextForm = (event: any) => {
        setDiaryText(event.target.value);
        console.log(event.target.value);
        // setTextLength(
        //     String(
        //         parseInt((event.target.value.length / textMaxLength) * 100, 10)
        //     )
        // );
        // box.current.background-image = "conic-gradient(#d5525f 0% %, #d9d9d9 % 100%)";
        setTextLength(event.target.value.length);
        // console.log(
        //     String(
        //         parseInt((event.target.value.length / textMaxLength) * 100, 10)
        //     )
        // );
        // console.log(textLength);
    };
    const sendDiaryText = () => {
        if (diaryText === "") {
            return;
        }
        console.log(diaryText);
        setDiaryText("");
    };
    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.ctrlKey && event.key === "Enter") {
            sendDiaryText();
        }
    };
    return (
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
                        className="h-screen w-screen flex justify-center items-center"
                    >
                        <div className="ml-4">
                            {/* <div className="bg-pink-200 h-20 opacity-70">
                                <div className="bg-pink-300 mx-2 my-4 opacity-100">
                                    <div className="rounded border-4 h-16 w-64 border-transparent">
                                        <div className="text-white text-center sm:duration-700 md:duration-700 lg:duration-700 xl:duration-700 xl:text-3xl lg:text-2xl md:text-xl sm:text-lg">
                                            今日の出来事
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <div className=" ml-32 mb-12">
                                <Bookmark text="今日の出来事"></Bookmark>
                            </div>

                            <textarea
                                onKeyDown={handleKeyDown}
                                cols={width > 1280 ? 64 : 32}
                                rows={16}
                                maxLength={textMaxLength}
                                value={diaryText}
                                className=" rounded-md text-black p-2 flex justify-center items-center border-2 resize-none outline-none mx-auto bg-white h-80 border-yellow-200  sm:duration-700 md:duration-700 lg:h-80 lg:text-3xl lg:w-4/5 lg:duration-700 xl:duration-700 xl:h-96 xl:text-4xl  xl:w-full"
                                onChange={handleDiaryTextForm}
                            ></textarea>
                            {/* <div className=" rounded border-2 bg-white h-80 w-64 -mt-80  border-yellow-200"></div> */}
                            <div className="text-white text-right">
                                {textLength}文字
                            </div>
                        </div>
                        <div className="m-8 mt-24">
                            <div>
                                <div className="bg-white p-2 w-32 justfy-center m-auto h-18 absolute bottom-0 rounded">
                                    <button
                                        type="submit"
                                        className="capitalize
                                    text-black
                                    inline-block
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
                        </div>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}
