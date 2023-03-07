import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'
import Listitem from '../listItem/Listitem'
import { useRef } from 'react'
import './list.css'
import { useState } from 'react'
function List() {
    const [isMoved, setIsMoved] = useState(false);
    const [sliderNumber, setNumberSlider] = useState(0)
    const listRef = useRef()
    const handleClick = (direction) => {
        setIsMoved(true)
        let distance = listRef.current.getBoundingClientRect().x - 50
        if (direction === "left" && sliderNumber > 0) {
            setNumberSlider(sliderNumber - 1)
            listRef.current.style.transform = `translateX(${230 + distance}px)`

        }
        if (direction === "right" && sliderNumber < 5) {
            setNumberSlider(sliderNumber + 1)
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
        }
        console.log(distance)
    }
    return (
        <div className='list'>
            <span className='listTitle'>
                Continue to watch
            </span>
            <div className="wrapper">
                <ArrowBackIos className='sliderArrow left'
                    onClick={() => handleClick("left")}
                    style={{ display: !isMoved && "none"}}
                />
                
                <div className="container" ref={listRef}>
                    <Listitem index={0}/>
                    <Listitem index={1}/>
                    <Listitem index={2}/>
                    <Listitem index={3}/>
                    <Listitem index={4}/>
                    <Listitem index={5}/>
                    <Listitem index={6}/>
                    <Listitem index={7}/>
                    <Listitem index={8}/>
                    <Listitem index={9}/>
                </div>
                <ArrowForwardIos className='sliderArrow right' onClick={() => handleClick("right")} />
            </div>
        </div>
    )
}

export default List
