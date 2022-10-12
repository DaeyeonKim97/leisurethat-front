import { ChildCare } from '@mui/icons-material'
import { Button, TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import AprojectInfo from '../components/CreateProject/AprojectInfo'
import BprojectStory from '../components/CreateProject/BprojectStory'
import CprojectReward from '../components/CreateProject/CprojectReward'
import DprojectService from '../components/CreateProject/DprojectService'
import EprojectAdditional from '../components/CreateProject/EprojectAdditional'
import { UnderLineContent, UnderLineContentBox } from '../components/shared'
import CreateContainer from '../components/User/CreateContainer'

const ProjectMenu = styled.div`
  margin-bottom: 15px;
`

const PrecessMenu = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  div:nth-child(${(p) => p.process}) {
    color: #00aeef;
  }
`

const PublicCreateProject = () => {
  const [name, setName] = useState('')
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [targetAmount, setTargetAmount] = useState(0)
  const [url, setUrl] = useState('')
  const [categoryId, setCategoryId] = useState(1)
  const [businessFile, setBusinessFile] = useState(null)
  const [taxInvoiceEmail, setTaxInvoiceEmail] = useState('')
  const [bankId, setBankId] = useState(1)
  const [accountNumber, setAccountNumber] = useState('')
  const [accountHolder, setAccountHolder] = useState('')
  const [accountFile, setAccountFile] = useState(null)
  const [projectFile, setProjectFile] = useState(null)
  const [refundPolicy, setRefundPolicy] = useState('')
  const [inquiryEmail, setInquiryEmail] = useState('')
  const [inquiryPhone, setInquiryPhone] = useState('')
  const [storyFile, setStoryFile] = useState(null)
  const [storyTitle, setStoryTitle] = useState('')
  const [storyContent, setStoryContent] = useState('')
  const [productName, setProductName] = useState('')
  const [productFile, setProductFile] = useState(null)
  const [productDetail, setProductDetail] = useState('')
  const [rewardPrice, setRewardPrice] = useState(0)
  const [rewardMaxCount, setRewardMaxCount] = useState(0)
  const [rewardServeCount, setRewardServeCount] = useState(0)
  const [rewardTitle, setRewardTitle] = useState('')
  const [rewardContent, setRewardContent] = useState('')
  const [rewardDate, setRewardDate] = useState(new Date())
  const [rewardFee, setRewardFee] = useState(0)
  const [rewardFeeFar, setRewardFeeFar] = useState(0)

  // useEffect(() => {
  //   console.log(name)
  // }, [name])
  // useEffect(() => {
  //   console.log('startDate', startDate)
  // }, [startDate])
  // useEffect(() => {
  //   console.log('endDate', endDate)
  // }, [endDate])
  // useEffect(() => {
  //   console.log('files : ', projectFile)
  // }, [projectFile])
  // useEffect(() => {
  //   console.log('story : ', storyContent)
  // }, [storyContent])
  // useEffect(() => {
  //   console.log(productFile)
  // }, [productFile])
  // useEffect(() => {
  //   console.log(rewardContent)
  // }, [rewardContent])

  return (
    <>
      <UnderLineContentBox
        style={{
          height: '150px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            height: '120px',
            margin: '0px 280px',
          }}
        >
          <UnderLineContent
            style={{
              marginRight: '20px',
              width: '180px',
              opacity: 0.5,
            }}
          >
            기본정보
          </UnderLineContent>
          <Button variant="outlined" sx={{ border: 'solid 1.5px' }}>
            가이드북 다운로드
          </Button>
        </div>
      </UnderLineContentBox>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '250px' }}>
          <div style={{ margin: '75px 50px', fontSize: '14px' }}>
            <div style={{ fontSize: '16px' }}>프로젝트 만들기</div>
            <PrecessMenu>
              <ProjectMenu>1. 기본정보</ProjectMenu>
              <ProjectMenu>2. 스토리</ProjectMenu>
              <ProjectMenu>3. 리워드</ProjectMenu>
              <ProjectMenu>4. 안내사항</ProjectMenu>
              <ProjectMenu>5. 제작자 부가정보</ProjectMenu>
            </PrecessMenu>
          </div>
        </div>

        <form
          style={{
            width: '85%',
            fontSize: '16px',
          }}
        >
          <AprojectInfo
            name={name}
            setName={setName}
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
            targetAmount={targetAmount}
            setTargetAmount={setTargetAmount}
            url={url}
            setUrl={setUrl}
            projectFile={projectFile}
            setProjectFile={setProjectFile}
            categoryId={categoryId}
            setCategoryId={setCategoryId}
          />
          <BprojectStory
            storyTitle={storyTitle}
            setStoryTitle={setStoryTitle}
            storyFile={storyFile}
            setStoryFile={setStoryFile}
            storyContent={storyContent}
            setStoryContent={setStoryContent}
          />
          <CprojectReward
            productName={productName}
            productFile={productFile}
            productDetail={productDetail}
            rewardPrice={rewardPrice}
            rewardMaxCount={rewardMaxCount}
            rewardTitle={rewardTitle}
            rewardContent={rewardContent}
            rewardDate={rewardDate}
            rewardServeCount={rewardServeCount}
            rewardFee={rewardFee}
            rewardFeeFar={rewardFeeFar}
            setProductName={setProductName}
            setProductFile={setProductFile}
            setProductDetail={setProductDetail}
            setRewardPrice={setRewardPrice}
            setRewardMaxCount={setRewardMaxCount}
            setRewardTitle={setRewardTitle}
            setRewardContent={setRewardContent}
            setRewardDate={setRewardDate}
            setRewardServeCount={setRewardServeCount}
            setRewardFee={setRewardFee}
            setRewardFeeFar={setRewardFeeFar}
          />
          <DprojectService
            refundPolicy={refundPolicy}
            inquiryPhone={inquiryPhone}
            inquiryEmail={inquiryEmail}
            setRefundPolicy={setRefundPolicy}
            setInquiryPhone={setInquiryPhone}
            setInquiryEmail={setInquiryEmail}
          />
          <EprojectAdditional
            bankId={bankId}
            accountNumber={accountNumber}
            accountHolder={accountHolder}
            accountFile={accountFile}
            taxInvoiceEmail={taxInvoiceEmail}
            businessFile={businessFile}
            setBankId={setBankId}
            setAccountNumber={setAccountNumber}
            setAccountHolder={setAccountHolder}
            setAccountFile={setAccountFile}
            setTaxInvoiceEmail={setTaxInvoiceEmail}
            setBusinessFile={setBusinessFile}
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '100px',
              marginRight: '100px',
            }}
          >
            <Button
              onClick={() => {}}
              variant="outlined"
              color="red"
              size="large"
              sx={{ width: '200px' }}
            >
              <Link to={'/'}>승인 요청하기</Link>
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}

export default PublicCreateProject
