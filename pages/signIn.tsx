import { useRouter } from "next/router";
import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/header";

export default function SignIn() {
    type loginElement = {
        mailAddress: string;
        password: string;
    };
    type errorSignInElement = {
        mailAddress: boolean;
        password: boolean;
    };
    const router = useRouter();
    const [formData, setFormData] = useState<loginElement>({
        mailAddress: "",
        password: "",
    });
    const [errorFormData, setErrorFormData] = useState<errorSignInElement>({
        mailAddress: false,
        password: false,
    });
    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const signIn = (event) => {
        event.preventDefault();
        let mailAddressPattern =
            /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/;
        let passwordPattern =
            /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)[a-zA-Z\d]{8,100}$/;
        let formError = Object.assign({}, errorFormData);
        if (!mailAddressPattern.test(formData.mailAddress)) {
            formError.mailAddress = true;
        }
        if (!passwordPattern.test(formData.password)) {
            formError.password = true;
        }
        if (!formError.mailAddress && !formError.password) {
            router.push("/makeDiary");
        }
        setErrorFormData(formError);
    };
    return (
        <div>
            <Header></Header>
            <div className="text-3xl font-semibold text-center mt-4">
                サインイン
            </div>
            <div className="border-4 border-amber-200 rounded mx-12 mt-8 bg-amber-200">
                <form onSubmit={signIn}>
                    <div className="flex flex-col">
                        <div className="mx-4 mt-2 text-sm">メールアドレス</div>
                        <input
                            name="mailAddress"
                            onChange={handleChange}
                            className="rounded text-black bg-white w-64 mb-2 mx-4 p-0.5"
                            placeholder="example@example.com"
                        ></input>
                        {errorFormData.mailAddress && (
                            <div className="mx-4 mb-2 text-xs text-red-500">
                                無効なメールアドレスです
                            </div>
                        )}
                        <div className="mx-4 mt-4 text-sm">パスワード</div>
                        <input
                            name="password"
                            type="password"
                            onChange={handleChange}
                            className="rounded bg-white text-black w-64 mb-2 mx-4 p-0.5"
                            placeholder="password"
                        ></input>
                        {errorFormData.password && (
                            <div className="mx-4 mb-6 text-xs text-red-500">
                                パスワードは半角英小文字大文字数字をそれぞれ1種類以上含む8文字以上100文字以下で入力してください
                            </div>
                        )}
                        <button type="submit"></button>
                    </div>
                    <div className="grid-cols-3 flex flex-row-reverse">
                        <button
                            type="submit"
                            className="rounded border-2 border-red-300 bg-red-300 hover:border-red-400 hover:bg-red-400 text-white font-semibold p-1 mx-auto my-4"
                        >
                            サインイン
                        </button>
                    </div>
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
}
