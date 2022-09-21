import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';
import NestedModal from './Modal';

function MakeProjectItem() {
  const [buttonType, setButtonType] = useState('');
  const [buttonLabel, setButtonLabel] = useState('');
  const [projectStatusLabel, setProjectStatusLabel] = useState('');
  const [projectStatusType, setProjectStatus] = useState('');
  const [progress, setProgress] = useState(10);
  /**
   * buttonLabel
   * - 심사 요청중(모달) #6297BA
   * - 반려 사유 확인(모달) #6297BA
   * - 취소 사유 확인(모달) #6297BA
   * - 포기 사유 확인(모달) #6297BA
   * - 종료 사유 확인(모달) #6297BA
   * - 프로젝트 관리하기 - #00AEEF
   * - 펀딩 포기 진행중 - #d9d9d9 disabled
   * -
   */

  /**
   * buttonType
   * - modalbutton
   * - projectManagement
   * - projectCancle
   */

  /**
   * projectStatusLabel
   * - 심사 요청 #464646
   * - 반려 #464646
   * - 취소 #464646
   * - 펀딩포기 #464646
   * - 강제종료 #464646
   * - 오픈예정 red
   * - 펀딩 진행중 red
   * - 미달성종료 #6297BA
   * - 진행여부결정 #6297BA
   * - 환불 진행 #6292BA
   * - 결제 후 종료 #6297BA
   * - 정산 대기 #6297BA
   * - 1차 정산 요청 #6297BA
   * - 1차 정산 완료 #6297BA
   * - 2차 정산 요청 #6297BA
   * - 완료 #6297BA
   */

  /**
   * projectStatus
   * - closed : #464646
   * - open : red
   * - closing : #6297BA
   */
  useEffect(() => {
    setButtonType('projectManagement');
    setButtonLabel('프로젝트 관리하기');
    setProjectStatusLabel('펀딩 진행중');
    setProjectStatus('open');
  }, []);

  const projectOpen = {
    width: '60px',
    height: '30px',
    border: '1px solid red',
    fontSize: '10px',
    color: 'red',
    textAlign: 'center',
    lineHeight: '30px',
    fontWeight: 'bold',
  };

  const projectClosed = {
    width: '60px',
    height: '30px',
    border: '1px solid #6297BA',
    fontSize: '10px',
    color: '#6297BA',
    textAlign: 'center',
    lineHeight: '30px',
    fontWeight: 'bold',
  };

  const projectClosing = {
    width: '60px',
    height: '30px',
    border: '1px solid #464646',
    fontSize: '10px',
    color: '#464646',
    textAlign: 'center',
    lineHeight: '30px',
    fontWeight: 'bold',
  };

  return (
    <Box sx={{ height: '400px', border: '1px solid #d9d9d9' }}>
      <Box sx={{ width: '100%', height: '200px' }}>
        <img
          src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002487]_20210426091745609.jpg"
          style={{ width: '100%', height: '100%' }}
          alt="itemImg"
        />
      </Box>
      <Box
        sx={{
          height: '150px',
          borderBottom: '1px solid #d9d9d9',
          padding: '1%',
        }}
      >
        {/* 프로젝트 내용 */}
        <Box>
          {projectStatusType == 'open' ? (
            <Box sx={projectOpen}>{projectStatusLabel}</Box>
          ) : (
            ''
          )}
          {projectStatusType == 'closed' ? (
            <Box sx={projectClosed}>{projectStatusLabel}</Box>
          ) : (
            ''
          )}
          {projectStatusType == 'closing' ? (
            <Box sx={projectClosing}>{projectStatusLabel}</Box>
          ) : (
            ''
          )}
        </Box>
        <Box sx={{ fontWeight: 'bolder', fontSize: '20px' }}>레저댓 침낭</Box>
        <Box sx={{ display: 'flex', color: '#707070', fontWeight: 'bolder' }}>
          <Box>카테고리</Box>
          <Box sx={{ margin: '0 5%' }}>|</Box>
          <Box>사업자 명</Box>
        </Box>
        <Box>
          <LinearProgress variant="determinate" value={progress} />
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Box
            sx={{ color: '#00AEEF', fontSize: '25px', fontWeight: 'bolder' }}
          >
            {progress}%
          </Box>
          <Box
            sx={{
              color: '#707070',
              fontWeight: 'bolder',
              padding: '10px',
            }}
          >
            목표 금액 : 300,000
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          height: '50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {buttonType == 'projectManagement' ? (
          <Button variant="contained" sx={{ color: 'white' }}>
            {buttonLabel}
          </Button>
        ) : (
          ''
        )}

        {buttonType == 'modalbutton' ? <NestedModal /> : ''}
        {buttonType == 'projectCancle' ? (
          <Button variant="contained" color="neutral" sx={{ color: 'white' }}>
            {buttonLabel}
          </Button>
        ) : (
          ''
        )}
      </Box>
    </Box>
  );
}

export default MakeProjectItem;
