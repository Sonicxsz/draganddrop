import {memo} from 'react'
function TextBlock() {
  return (
    <div>
        <textarea className='textblock-input'/>
    </div>
  )
}

export default memo(TextBlock)