import { useState, memo } from 'react'

function ImageBlock() {
    const [image, setImage] = useState('')

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files
        if(file){
            const reader = new FileReader()
            reader.readAsDataURL(file[0])
            reader.onloadend = () => {
                setImage(reader.result as string)
            }
        }
    }

  return (
    <div >
        {image ? <img height={250} width={400} src={image} alt={image} className='image-block'/> 
               : <label className="imgInput">
                           <span>select image</span>
                        <input type="file" onChange={handleFileChange}  />
                 </label>
        }
    </div>
  )
}

export default memo(ImageBlock)