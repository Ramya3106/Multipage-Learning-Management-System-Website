import {React, useState} from 'react'
import {Link} from 'react-router-dom'
import { RiSearch2Line, RiShoppingCartLine, RiMenu3Line } from 'react-icons/ri'
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

const Navbar = () =>{
    const [isSidebaropen, setIsSidebaropen] = useState(false)
    const [isCategoryopen, setIsCategoryopen] = useState(false)
    const [isCategoryDropdownopen, setIsCategoryDropdownopen] = useState(false)
    return(
        <div className='flex items-center justify-center sticky top-0 z-100 bg-[#fff] shadow-md w-full'>
            <nav className='flex items-center w-full max-w-[1400px] justify-center gap-3 px-5 md:px-10 py-4'></nav>
            <span className='flex items-center lg:border-r border-gray-300 min-h-[40px] pr-7'>
                <Link to='/' >
                <h1 className='fonyt-bold text-xl'>
                    SKILL<span className='text-purple-500'>MINE</span>
                </h1>
                </Link>

            </span>
        </div>
    )
}
export default Navbar