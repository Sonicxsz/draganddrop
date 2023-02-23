import { useState } from "react"
import ImageBlock from "./ImageBlock"
import TextBlock from "./TextBlock"

function WorkArea() {
    const [elements, setElements] = useState<{type:string}[]>([]);
    const types = ['text', 'image']
    const handleDrop = (e:React.DragEvent) => {
        const type = e.dataTransfer.getData('element')
        if(types.includes(type)){
            setElements([...elements, {type}])
        } 
    }
    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault()
    }

  return (
    <div onDragOver={handleDragOver} onDrop={handleDrop} className='main-wrapper'>
        {
             elements.map((el, ind) => {
                return el.type === 'text' ? <TextBlock key={ind} /> : <ImageBlock key={ind}/>

            })
        }
    </div>
  )
}

export default WorkArea