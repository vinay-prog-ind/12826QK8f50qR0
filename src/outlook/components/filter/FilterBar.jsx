import React, { useState } from 'react'
import Button from '../../ui/Button'




export default function FilterBar({setFilter, setIsOpen}) {
    const type = ["Unread", "Read", "Favorite"];
    const [active, setActive] = useState();
    const [isActive, setIsActive] = useState(false);

    function toggleActive(i) {
        setActive(i);
        if(active === i) {
            setActive();
            setIsActive(isActive => !isActive);
            setFilter("All");
        }

        if(active !== i) {
            if(i===0) {
                setFilter("Unread");
            }
            else if(i === 1) {
                setFilter("Read");
            }
            else if(i === 2)
            {
                setFilter("Favorite");
            }
            else {
                setFilter("All");
            }
        }
        setIsOpen(null);
    }

  return (
    <div className='filterBar'>
        <p>Filter: </p>
        <ul className='filterUl'>
            {
                type.map((el, i) => 
                    <li className={`filterLi ${active === i ? "selectedFilter" : ""}`} onClick={() => toggleActive(i)} key={i}><Button   active={active === i} key ={i} type={active === i ? "activeBtn" : "filter"}>{el}</Button></li>
            )}
        </ul>
    </div>
  )
}
