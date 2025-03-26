import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router'
import { getRecentlyMemoryRequest } from 'src/apis';
import { ACCESS_TOKEN, MEMORY_TEST_ABSOLUTE_PATH } from 'src/constants';
import { MemoryTest } from 'src/types/interfaces';

// component: 최근 기억력 검사 컴포넌트 //
export default function RecentlyMemory() {

	// state: cookie 상태 //
	const [cookies] = useCookies();

	// state: 기억력 검사 기록 리스 상태 //
	const [memoryTests,  setMemoryTests] = useState<MemoryTest[]>([]);

	// variable: access token //
	const acessToken = cookies[ACCESS_TOKEN];

	// function: 네비게이터 함수
	const navigator = useNavigate();

	// function: get recently memory response 처리 함수 //
	const getRecentlyMemoryResponse = () => {
		
	};

	// event handler: 검사 버튼 클릭 이벤트 처리 //
	const onTestClickHandler = () => {
		navigator(MEMORY_TEST_ABSOLUTE_PATH);
	};

	// effect: 컴포넌트 로드시 실행할 함수 //
	useEffect(() => {
		if(!acessToken) return;
		getRecentlyMemoryRequest(acessToken).then()
	}, []);

	// render: 최근 기억력 검사 컴포넌트 렌더링 //
	return (
		<div>
			<div className='recently-container'>
				<div className='recently-top'>
					<div className='recently-title-box'>
						<div className='title'>기억력 검사 기록</div>
						<div className='info-button'>
							기억력을 높이는 방법 <div className='icon' />
						</div>
					</div>
					<div className='button primary middle' onClick={onTestClickHandler}>검사하러가기</div>
				</div>
				<div className='recently-chart-box'></div>
			</div>
		</div>
	)
}
