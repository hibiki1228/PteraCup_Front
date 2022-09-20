import axios from "axios";
import { useRouter } from "next/router";
import { setCookie } from "nookies";
import { useState } from "react";

export default function SignInCheck() {
    type signInElement = {
        mailAddress: string;
        password: string;
    };
    type errorSignInCheckElement = {
        mailAddress: boolean;
        password: boolean;
    };
    type successSignIn = {
        successStatus: boolean;
        errorText: string;
    };
    const url = "";
    const router = useRouter();
    const [formData, setFormData] = useState<signInElement>({
        mailAddress: "",
        password: "",
    });
    const [errorSignInForm, setErrorSignInForm] =
        useState<errorSignInCheckElement>();
    const [successSignInStatus, setSuccessSignIn] = useState<successSignIn>();
    const [errorFormData, setErrorFormData] = useState<errorSignInCheckElement>(
        {
            mailAddress: false,
            password: false,
        }
    );
    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSignInError = () => {
        let formError = Object.assign({}, errorFormData);

        if (successSignInStatus.errorText == "user is not exist") {
            formError.mailAddress = true;
        }
        if (successSignInStatus.errorText == "password is incorrect") {
            formError.password = true;
        }
        setErrorSignInForm(formError);
    };
    const signInCheck = (event) => {
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
            signIn();
            if (successSignInStatus) {
                router.push("/makeDiary");
            }
        }
        setErrorFormData(formError);
    };
    const signIn = () => {
        axios
            .post(url + "/login", {
                email: formData.mailAddress,
                password: formData.password,
            })
            .then((res) => {
                console.log(res.data);
                setCookie(null, "accessToken", res.data.cookies);
                setSuccessSignIn({
                    successStatus: true,
                    errorText: "success!",
                });
            })
            .catch((error) => {
                console.log(error);
                setSuccessSignIn({
                    successStatus: false,
                    errorText: error,
                });
                handleSignInError();
            });
    };
    return (
        <div>
            <div className="border-2 rounded m-4 mt-12">
                <form onSubmit={signInCheck}>
                    <div className="flex flex-col">
                        {errorFormData.mailAddress && (
                            <div className="mx-4 text-xs text-red-500">
                                無効なメールアドレスです
                            </div>
                        )}
                        {errorSignInForm.mailAddress && (
                            <div className="mx-4 text-xs text-red-500">
                                ユーザーが存在しません
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
                        {errorSignInForm.password && (
                            <div className="mx-4 text-xs text-red-500">
                                パスワードが一致しません
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
