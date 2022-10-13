const ImgInput = ({ sm, lg, value, setValue }) => {
  return (
    <div
      style={{
        marginRight: '20px',
        height: lg ? '360px' : sm ? '125px' : '125px',
        width: lg ? '550px' : sm ? '192px' : '192px',
      }}
    >
      <label htmlFor="inputImg" style={{}}>
        <div
          style={{
            height: lg ? '360px' : sm ? '125px' : '125px',
            width: lg ? '550px' : sm ? '192px' : '192px',
            marginTop: '30px',
            border: '1px solid rgba(0,0,0, 0.2)',
            borderRadius: '5px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          {lg ? (
            <img
              src={
                value
                  ? URL.createObjectURL(value)
                  : '/static/img/PublicCreateImgInput.png'
              }
              style={value ? { width: '100%' } : null}
            />
          ) : (
            <img
              src={
                value
                  ? URL.createObjectURL(value)
                  : '/static/img/PublicCreateImgInput.png'
              }
              style={
                value ? { width: '100%' } : { width: '18px', height: '18px' }
              }
            />
          )}
        </div>
      </label>
      <input
        type="file"
        files={value}
        onChange={(e) => {
          setValue(e.target.files[0])
        }}
      />
    </div>
  )
}

export default ImgInput
