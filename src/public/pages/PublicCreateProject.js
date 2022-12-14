import { ChildCare } from '@mui/icons-material'
import { Button, TextField } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
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
  const navigate = useNavigate()
  const [available, setAvailable] = useState(true)

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
  const [projectFile, setProjectFile] = useState()
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

  const dateToString = (date) => {
    return (
      date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
    )
  }

  const handleSubmit = () => {
    setAvailable(false)

    let formData = new FormData()
    formData.append('name', name)
    formData.append('startDate', dateToString(startDate))
    formData.append('endDate', dateToString(endDate))
    formData.append('targetAmount', targetAmount)
    formData.append('url', url)
    formData.append('categoryId', categoryId)
    formData.append('businessFile', businessFile)
    formData.append('taxInvoiceEmail', taxInvoiceEmail)
    formData.append('bankId', bankId)
    formData.append('accountNumber', accountNumber)
    formData.append('accountHolder', accountHolder)
    formData.append('accountFile', accountFile)
    formData.append('projectFile', projectFile)
    formData.append('refundPolicy', refundPolicy)
    formData.append('inquiryEmail', inquiryEmail)
    formData.append('inquiryPhone', inquiryPhone)
    formData.append('storyFile', storyFile)
    formData.append('storyTitle', storyTitle)
    formData.append('storyContent', storyContent)
    formData.append('productName', productName)
    formData.append('productFile', productFile)
    formData.append('productDetail', productDetail)
    formData.append('rewardPrice', rewardPrice)
    formData.append('rewardMaxCount', rewardMaxCount)
    formData.append('rewardServeCount', rewardServeCount)
    formData.append('rewardTitle', rewardTitle)
    formData.append('rewardContent', rewardContent)
    formData.append('rewardDate', dateToString(rewardDate))
    formData.append('rewardFee', rewardFee)
    formData.append('rewardFeeFar', rewardFeeFar)

    let accessToken = 'Bearer ' + localStorage.getItem('accessToken')
    console.log(accessToken)
    console.log(formData.get('accountFile'))

    axios
      .post('http://localhost:8001/project/enroll', formData, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((res) => {
        console.log(res)
        navigate('/')
      })
      .catch((err) => {
        alert('???????????? ?????? ????????? ?????? ??????????????????!')
        setAvailable(true)
      })
  }

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
  useEffect(() => {
    console.log('acc : ', accountFile)
    console.log('prj : ', projectFile)
    console.log('name : ', name)
  }, [name, accountFile, projectFile])

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
            ????????????
          </UnderLineContent>
          <Button variant="outlined" sx={{ border: 'solid 1.5px' }}>
            ???????????? ????????????
          </Button>
        </div>
      </UnderLineContentBox>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '250px' }}>
          <div style={{ margin: '75px 50px', fontSize: '14px' }}>
            <div style={{ fontSize: '16px' }}>???????????? ?????????</div>
            <PrecessMenu>
              <ProjectMenu>1. ????????????</ProjectMenu>
              <ProjectMenu>2. ?????????</ProjectMenu>
              <ProjectMenu>3. ?????????</ProjectMenu>
              <ProjectMenu>4. ????????????</ProjectMenu>
              <ProjectMenu>5. ????????? ????????????</ProjectMenu>
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
            {available ? (
              <Button
                onClick={() => {
                  handleSubmit()
                }}
                variant="outlined"
                color="red"
                size="large"
                sx={{ width: '200px' }}
              >
                ?????? ????????????
                {/* <Link to={'/'}>?????? ????????????</Link> */}
              </Button>
            ) : (
              <Button
                onClick={() => {
                  handleSubmit()
                }}
                variant="outlined"
                color="red"
                size="large"
                sx={{ width: '200px' }}
                disable
              >
                ?????? ????????????
                {/* <Link to={'/'}>?????? ????????????</Link> */}
              </Button>
            )}
          </div>
        </form>
      </div>
    </>
  )
}

export default PublicCreateProject
