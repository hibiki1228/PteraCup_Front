import { useRouter } from "next/router";
import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/header";

const initialErrorState = {
    username: false,
    mailAddress: false,
    password: false,
    confirmPassword: false,
};
export default function SignUp() {
    const router = useRouter();
    type signUpElement = {
        username: string;
        mailAddress: string;
        password: string;
        confirmPassword: string;
    };
    type errorSignUpElement = {
        username: boolean;
        mailAddress: boolean;
        password: boolean;
        confirmPassword: boolean;
    };
    const [formData, setFormData] = useState<signUpElement>({
        username: "",
        mailAddress: "",
        password: "",
        confirmPassword: "",
    });

    const [formErrors, setFormErrors] =
        useState<errorSignUpElement>(initialErrorState);
    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        console.log(formData);
    };

    const signUp = (event) => {
        event.preventDefault();
        console.log(initialErrorState);

        let mailAddressPattern =
            /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/;
        let passwordPattern =
            /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)[a-zA-Z\d]{8,100}$/;
        let formError = Object.assign({}, initialErrorState);
        if (formData.username === "") {
            formError.username = true;
        }
        if (!mailAddressPattern.test(formData.mailAddress)) {
            formError.mailAddress = true;
        }
        if (!passwordPattern.test(formData.password)) {
            formError.password = true;
        }
        if (formData.password !== formData.confirmPassword) {
            formError.confirmPassword = true;
        }
        if (
            !formError.confirmPassword &&
            !formError.username &&
            !formError.password &&
            !formError.mailAddress
        ) {
            router.push("/makeDiary");
        }
        setFormErrors(formError);
    };
    return (
        <div>
            <Header></Header>
            <div className="text-3xl text-center font-semibold mt-4">
                サインアップ
            </div>
            <div className="border-2 border-amber-200 bg-amber-200 rounded m-12 mt-6">
                <form onSubmit={signUp}>
                    <div className="flex flex-col">
                        <div className="text-sm mx-4 mt-4">ユーザー名</div>
                        <input
                            name="username"
                            onChange={handleChange}
                            className="rounded w-64 mx-4 mb-1 p-1"
                            placeholder="user"
                        ></input>
                        {formErrors.username && (
                            <div className="text-xs text-red-500 mx-4">
                                ユーザーネームが入力されていません
                            </div>
                        )}

                        <div className="text-sm mx-4 mt-4">メールアドレス</div>
                        <input
                            name="mailAddress"
                            onChange={handleChange}
                            className="rounded w-64 mx-4 mb-1 p-1"
                            placeholder="example@example.com"
                        ></input>
                        {formErrors.mailAddress && (
                            <div className="text-xs text-red-500 mx-4">
                                無効なメールアドレスです
                            </div>
                        )}

                        <div className="text-sm mx-4 mt-4">パスワード</div>
                        <input
                            name="password"
                            type="password"
                            onChange={handleChange}
                            className="rounded w-64 mx-4 mb-1 p-1"
                            placeholder="password"
                        ></input>
                        {formErrors.password && (
                            <div className="text-xs text-red-500 mx-4">
                                パスワードは半角英小文字大文字数字をそれぞれ1種類以上含む8文字以上100文字以下で作成してください
                            </div>
                        )}

                        <div className="text-sm mx-4 mt-4">パスワード</div>
                        <input
                            name="confirmPassword"
                            type="password"
                            onChange={handleChange}
                            className="rounded w-64 mx-4 mb-1 p-1"
                            placeholder="password"
                        ></input>
                        {formErrors.confirmPassword && (
                            <div className="text-xs text-red-500 mx-4 mb-2">
                                パスワードが一致しません
                            </div>
                        )}
                        <button type="submit"></button>
                    </div>
                    <div className="grid-cols-3 flex flex-row-reverse">
                        <button
                            type="submit"
                            className="rounded border-2 border-red-300 bg-red-300 hover:border-red-400 hover:bg-red-400 text-white font-semibold p-1 mx-auto my-4"
                        >
                            サインアップ
                        </button>
                    </div>
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
}
