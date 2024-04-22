import Head from "next/head";
import AppLayout from "../components/AppLayout";

const Signup = () => {
    const onSubmit = useCallback(()=> {
        // onSubmit은 e.prevent.default를 따로 할 필요가 없다
        // 
    }, []);
    return (
    <AppLayout>
        <Head>
            <title>회원가입 | NodeBird </title>
        </Head>
    </AppLayout>
    )
};

export default Signup