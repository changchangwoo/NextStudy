import AppLayout from "../components/AppLayout";
import FollowList from "../components/FollowList";

const Profile = () => {
    const followerList = [{nickname: "창우리"},{nickname: "창우리"},{nickname: "창우리"}];
    const followingList = [{nickname: "창우리"},{nickname: "창우리"},{nickname: "창우리"}];
    return (
        <>
            <Head>
                <title>NodeBird</title>
            </Head>
            <AppLayout>
                <NicknameEditForm />
                <FollowList header="팔로잉 목록" data={followingList} />
                <FollowList header="팔로워 목록" data={followerList} />
            </AppLayout>
        </>
    )
};

export default Profile