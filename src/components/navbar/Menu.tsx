import { useState } from "react"
import { menuItems } from "."

const menu = () => {
  const [selectedItem, setSelectedItem] = useState('Home')
  const [selectedSubItem, setSelectedSubItem] = useState('')

  const handleSelect = (name: string) => {
    setSelectedItem(name)
    setSelectedSubItem('')
  }


  
  return (
    <div>menu</div>
  )
}

export default menu