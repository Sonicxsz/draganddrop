function Sidebar() {

    const handleDragStart = (type: string) => {
        return (e: React.DragEvent) => e.dataTransfer.setData('element', type)
    }

  return (
    <div className="sidebar-wrapper">
        <h2>SIDEBAR</h2>

        <div draggable onDragStart={handleDragStart('image')} className="dragElement">
            Image
        </div>
        <div draggable onDragStart={handleDragStart('text')} className="dragElement">
            Text
        </div>
    </div>
  )
}

export default Sidebar