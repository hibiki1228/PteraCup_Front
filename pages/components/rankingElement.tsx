type propsType = {
    username: string;
    pageNumber: number;
    wordNumber: number;
    exchangeNumber: number;
    outputType: string;
    rank: number;
};

export default function RankingElement(props: propsType) {
    return (
        <div className="flex justify-center items-center">
            <div className="border-2 text-center w-36 m-4 rounded">
                <div className="border-b-2">{props.rank}位</div>
                <div>{props.username}</div>
                <div>
                    {props.outputType == "pageNumber"
                        ? props.pageNumber
                        : props.outputType == "wordNumber"
                        ? props.wordNumber
                        : props.exchangeNumber}
                </div>
            </div>
        </div>
    );
}
