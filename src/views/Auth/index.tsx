import React, { useState } from 'react';

import SignIn from './SignIn';
import SignUp from './SignUp';

import './style.css';

import { AuthPage } from 'src/types/aliases';

// component: 로그인 회원가입 화면 컴포넌트 //
export default function Auth() {

    // state: 페이지 상태 //
    const [page, setPage] = useState<AuthPage>('sign-in');

    // event handler: 페이지 변경 이벤트 처리 //
    const onPageChangeHandler = (page: AuthPage) => {
        setPage(page)
    };

    // render: 로그인 회원가입 화면 컴포넌트 렌더링 //
    return (
        <div id='auth-wrapper'>
            <div className='auth-side-image'></div>
            <div className='auth-box'>
                {page === 'sign-in' ? 
                <SignIn onPageChange={onPageChangeHandler} /> : 
                <SignUp onPageChange={onPageChangeHandler} />
                }
            </div>
        </div>
    )
}