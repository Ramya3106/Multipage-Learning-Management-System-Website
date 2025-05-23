import {React, useState} from 'react'
import {Link} from 'react-router-dom'
import { RiSearch2Line, RiShoppingCart2Line, RiMenu3Line } from 'react-icons/ri'
import { FaTimes, FaChevronDown} from 'react-icons/fa'

const CourseCategories =[
    "Art @ Design",
    "Science",
    "Geography",
    "Programming",
    "Mathematics",
    "Engineering",
    "Health @ Fitness",
    "Business & Fitness",
    "History",
    "Marketing",
    "Phychology",
    "Cybersecurity",
    "Law",
    "AI & Machine Learning",
    "Data Science",
    "Music & Audio Production",
]

const Navbar =() =>{
    const [isSidbaropen, setIsSidebaropen] = useState(false)
    const [isCategoryopen, setIsCategory] = useState(false)
    const [isCategoryDropdownopen, setIsCategoryDropdownopen] = useState(false)
}
export default Navbar