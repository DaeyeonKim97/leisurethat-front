import MypageTab from '../components/mypage/MypageTab';
import styled from 'styled-components';

function Mypage() {
  const Title = styled.div`
    text-align: center;
    padding: 2%;
    border-bottom: 1px solid #d9d9d9; ;
  `;

  return (
    <>
      <Title>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }} align="center">
          마이페이지
        </h1>
      </Title>
      <MypageTab />
    </>
  );
}

export default Mypage;
