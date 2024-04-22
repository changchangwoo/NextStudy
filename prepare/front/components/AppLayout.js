import PropTypes from 'prop-types'
import Link from 'next/link'
import { Menu, Input, Row, Col } from 'antd'
import { useState } from 'react';
import UserProfile from '../components/UserProfile';
import LoginForm from '../components/LoginForm';
import styled from 'styled-components';

const SearchInput = styled(Input.Search)`
verticalAlign : middle
`
    ;
const AppLayout = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return (
        <>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/"><a>노드버드</a></Link>
                </Menu.Item>
                <Menu.Item>

                    <Link href="/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <SearchInput enterButton style={{ verticalAlign: 'middle' }}></SearchInput>
                </Menu.Item>

            </Menu>
            <Row gutter={8} >
                <Col xs={24} md={6}>
                    {isLoggedIn ? <UserProfile setIsLoggedIn={setIsLoggedIn} /> : <LoginForm setIsLoggedIn={setIsLoggedIn} />}
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                <a href="https://velog.io/@changwoo/posts" target="_blank" rel="noreferrer noopener">Made by changwooLee </a>
                </Col>
            </Row>
        </>
    );
};

AppLayout.PropTypes = {
    children: PropTypes.node.isRequired,
}

export default AppLayout