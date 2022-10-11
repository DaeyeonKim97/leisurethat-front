import * as React from 'react'
import { Divider, Typography } from '@mui/material'
import { Box } from '@mui/system'
import ImageStepper from './ImageStepper'
import DetailItemInfo from './DetaiItemInfo'

import '@toast-ui/editor/dist/toastui-editor-viewer.css'
import { Viewer } from '@toast-ui/react-editor'

const items = [
  {
    label: '에스튜브 - 구명부환',
    imgPath: 'http://image.auction.co.kr/itemimage/13/a9/c8/13a9c80f76.jpg',
    info: [
      { name: '무게/중량', value: '10kg / 14.5 pound' },
      { name: '색상', value: '주황색' },
      { name: '제조지역', value: '대한민국 성남시 분당구 정자로' },
    ],
  },
  {
    label: '1/350 레진 구명튜브',
    imgPath: 'https://t1.daumcdn.net/cfile/tistory/1336A34B4F7B200C0E',
    info: [
      { name: '무게/중량', value: '20kg' },
      { name: '색상', value: '빨간색' },
      { name: '제조지역', value: '대한민국 성남시 분당구 정자로' },
      { name: '제조번호', value: 'MTVS-18302' },
    ],
  },
  {
    label: '길쭉한 구명튜브',
    imgPath:
      'https://www.pongdang.com/data/goods_image/201607/28111134view.jpg',
    info: [
      { name: '무게/중량', value: '30kg / 50.5 pound' },
      { name: 'color', value: '빨간색' },
      { name: 'region', value: '대한민국 성남시 분당구 정자로' },
    ],
  },
]

const markdown = `
# 헤더
A paragraph with *emphasis* and **strong importance**.
> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
`

export default function DetailStory({ story, productList }) {
  const [activeStep, setActiveStep] = React.useState(0)

  return (
    <Box>
      <Box>
        <Typography variant="h4" style={{ marginTop: 30 }}>
          프로젝트 스토리
        </Typography>
        <Divider style={{ marginBottom: 30 }} />
        <Box style={{ display: 'flex', justifyContent: 'center' }}>
          <Box flexGrow={1} style={{ margin: 10 }}>
            <Typography color="primary" variant="h6">
              {story ? story.storyTitle : null}
            </Typography>
            {story ? (
              <Viewer
                id="viewer"
                initialValue={`${story ? story.storyContent : null}`}
              />
            ) : null}
          </Box>
          <img
            style={{ width: '50%' }}
            src={story ? `${story.storyAttachment.downloadAddress}` : null}
          />
        </Box>
      </Box>

      <Box>
        <Typography variant="h4" style={{ marginTop: 30 }}>
          상품 이미지
        </Typography>
        <Divider style={{ marginBottom: 30 }} />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ImageStepper
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            items={items}
            productList={productList}
          />
          <DetailItemInfo
            activeStep={activeStep}
            items={items}
            productList={productList}
          />
        </div>
      </Box>
    </Box>
  )
}
