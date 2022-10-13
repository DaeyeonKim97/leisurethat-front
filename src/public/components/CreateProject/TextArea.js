import { Editor } from '@tinymce/tinymce-react'
import { useRef, useState } from 'react'

const TextArea = ({ value, setValue }) => {
  const editorRef = useRef(null)
  const handleEditorChange = (e) => {
    setValue(e.target.getContent())
  }
  return (
    <Editor
      apiKey="28u6x0bzs1bf7gwucyrhtslc95fggcjdol0yz5w3lamypatr"
      onInit={(evt, editor) => (editorRef.current = editor)}
      initialValue="<p>내용을 작성해 주세요</p>"
      onChange={handleEditorChange}
      init={{
        height: 400,
        width: 600,
        menubar: false,
        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount',
        ],
        toolbar:
          'undo redo | formatselect | ' +
          'bold italic backcolor | alignleft aligncenter ' +
          'alignright alignjustify | bullist numlist outdent indent | ' +
          'removeformat | help',
        content_style:
          'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
      }}
    />
  )
}

export default TextArea
