import Image from "next/image";
import { ChangeEventHandler, KeyboardEventHandler } from "react";

type propsType = {
    handleKeyDown: KeyboardEventHandler;
    textMaxLength: number;
    diaryText: string;
    handleDiaryTextForm: ChangeEventHandler;
    width: number;
};

export default function TextArea(props: propsType) {
    return (
        <div>
            <div className="w-96 h-80 bg-white rounded">
                <div className="pt-16">
                    <div className="z-10 absolute ml-16">
                        <textarea
                            onKeyDown={props.handleKeyDown}
                            rows={16}
                            maxLength={props.textMaxLength}
                            value={props.diaryText}
                            className=" rounded-md text-black z-20 flex justify-center items-center border-2 w-64 h-48 resize-none outline-none mx-auto border-yellow-200  "
                            onChange={props.handleDiaryTextForm}
                        ></textarea>
                    </div>
                    <div className="absolute grid top-72 ml-16 z-0 grid-rows-7">
                        <div className="w-64 border-b-2 h-[23px] border-dotted"></div>
                        <div className="w-64 border-b-2 h-[23px] border-dotted"></div>
                        <div className="w-64 border-b-2 h-[23px] border-dotted"></div>
                        <div className="w-64 border-b-2 h-[23px] border-dotted"></div>
                        <div className="w-64 border-b-2 h-[23px] border-dotted"></div>
                        <div className="w-64 border-b-2 h-[23px] border-dotted"></div>
                        <div className="w-64 border-b-2 h-[23px] border-dotted"></div>
                    </div>
                </div>
            </div>
            <div className="absolute ml-64 -mt-32">
                <Image
                    src="/images/flower0743.png"
                    alt="flower"
                    width={128}
                    height={128}
                    className=""
                ></Image>
            </div>
            <div className="absolute ml-0 rotate-180 -mt-80">
                <Image
                    src="/images/flower0743.png"
                    alt="flower"
                    width={128}
                    height={128}
                    className=""
                ></Image>
            </div>
        </div>
    );
}
