import PropTypes from 'prop-types'    
import Link from 'next/link'
import { Layout, Menu, Input, Row, Col } from 'antd';

const AppLayout = ({ children }) => {
    return (
        <>
        <Link href="/"><a>노드버드</a></Link>
        <Link href="/profile"><a>프로필</a></Link>
        <Link href="/signup"><a>회원가입</a></Link>
        <div>공통메뉴</div>
        {children}
        </>
    );
};

AppLayout.PropTypes = {
    children : PropTypes.node.isRequired,
}

export default AppLayout