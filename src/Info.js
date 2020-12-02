import React, { useEffect, useState } from 'react';

const Info = () => {
	const [name, setName] = useState('');
	const [nickname, setNickname] = useState('');

	useEffect(() => {
		//렌더링 될 때마다 호출  componentDidMount + componentDidUpdate
		console.log('렌더링이 완료되었습니다.');
		console.log({
			name,
			nickname,
		});

		//뒷정리(cleanup) 함수 호출
		return () => {
			console.log('cleanup');
		};

		//	}, []); // 배열 추가 시 마운트,언마운트(cleanup) 될 때만 실행
	}, [name]); // name 값이 업데이트 될 때만 실행

	const onChangeName = (e) => {
		setName(e.target.value);
	};

	const onChangeNickname = (e) => {
		setNickname(e.target.value);
	};

	return (
		<div>
			<div>
				<input value={name} onChange={onChangeName} />
				<input value={nickname} onChange={onChangeNickname} />
			</div>
			<div>
				<div>
					<b>이름:</b> {name}
				</div>
				<div>
					<b>닉네임:</b> {nickname}
				</div>
			</div>
		</div>
	);
};

export default Info;
