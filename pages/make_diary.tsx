import Image from "next/image";
import { KeyboardEvent, useState } from "react";
import Header from "./components/header";

export default function MakeDiary() {
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
        // setTextLength(event.target.value.length + 1);
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
        <div className="font-fancy">
            <Header></Header>
            <div className="flex flex-col min-h-screen">
                <div className="m-8 mt-24">
                    <form onSubmit={sendDiaryText}>
                        <div className="text-lg">今日の出来事</div>
                        <div className="ml-4">
                            <textarea
                                onKeyDown={handleKeyDown}
                                cols={32}
                                rows={16}
                                maxLength={textMaxLength}
                                value={diaryText}
                                className=" rounded-md text-black p-2 border-2 resize-none outline-none w-64 -ml-2 bg-white h-80 border-yellow-200"
                                onChange={handleDiaryTextForm}
                            ></textarea>
                            {/* <div className=" rounded border-2 bg-white h-80 w-64 -mt-80  border-yellow-200"></div> */}
                            {textLength}
                            <div>
                                <div
                                    className="bg-white p-2  w-32 justfy-center m-auto h-18 rounded
"
                                >
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
        </div>
    );
}
