import { BrowserRouter, Routes, Route, HashRouter } from 'react-router';
import styled from 'styled-components';
// Pages
import MainPage from './components/pages/MainPage';

const MainTitleText = styled.p`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`;

//provider 생성
const MiniBlog = (props) => {
    return (
        <>
            <MainTitleText>소플의 미니 블로그</MainTitleText>
            <MainPage></MainPage>
        </>
    );
}

export default MiniBlog;