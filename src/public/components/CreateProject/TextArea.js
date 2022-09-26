import { Editor } from '@tinymce/tinymce-react'
import { useRef } from 'react'

const TextArea = () => {
  const editorRef = useRef(null)
  return (
    <Editor
      apiKey="28u6x0bzs1bf7gwucyrhtslc95fggcjdol0yz5w3lamypatr"
      onInit={(evt, editor) => (editorRef.current = editor)}
      initialValue="<p>내용을 작성해 주세요</p>"
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
