import { Form, Input, input } from "antd";

const NicknameEditForm = () => {
    const style = useMemo(() => ({
        marginBottom : '20px',
        border : '1px solid #9d9d9'
    }))
    return (
        <Form style={style}>
            <Input.Search addonBefore="닉네임" enterButton="수정" />
        </Form>
    )
}

export default NicknameEditForm