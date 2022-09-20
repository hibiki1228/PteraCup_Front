import { useRouter } from "next/router";
import { useState } from "react";

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
            <div className="border-2 rounded m-4 mt-12">
                <form onSubmit={signIn}>
                    <div className="flex flex-col">
                        {errorFormData.mailAddress && (
                            <div className="mx-4 text-xs text-red-500">
                                無効なメールアドレスです
                            </div>
                        )}
                        <input
                            name="mailAddress"
                            onChange={handleChange}
                            className="rounded w-64 m-4"
                            placeholder="example@example.com"
                        ></input>
                        {errorFormData.password && (
                            <div className="mx-4 text-xs text-red-500">
                                パスワードは半角英小文字大文字数字をそれぞれ1種類以上含む8文字以上100文字以下で入力してください
                            </div>
                        )}
                        <input
                            name="password"
                            type="password"
                            onChange={handleChange}
                            className="rounded w-64 m-4"
                            placeholder="password"
                        ></input>
                        <button type="submit"></button>
                    </div>
                    <button type="submit" className="rounded border-2  mx-auto">
                        サインイン
                    </button>
                </form>
            </div>
        </div>
    );
}
