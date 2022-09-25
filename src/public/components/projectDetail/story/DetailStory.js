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

export default function DetailStory(props) {
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
            <Viewer initialValue={markdown} />
          </Box>
          <img
            style={{ width: '50%' }}
            src="https://previews.123rf.com/images/mariakraynova/mariakraynova1405/mariakraynova140500426/28717325-%EB%A7%91%EA%B3%A0-%ED%91%B8%EB%A5%B8-%EB%B0%94%EB%8B%A4%EC%97%90-%EB%96%A0%EC%9E%88%EB%8A%94-%ED%92%8D%EC%84%A0-%EB%85%B8%EB%9E%80%EC%83%89-%EB%82%B4%EB%B6%80-%ED%8A%9C%EB%B8%8C.jpg"
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
          />
          <DetailItemInfo activeStep={activeStep} items={items} />
        </div>
      </Box>
    </Box>
  )
}
