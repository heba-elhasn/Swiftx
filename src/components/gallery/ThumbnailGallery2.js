
import React, {useState } from 'react'

import './style.css'


export const Grid = (props)=>{
    
        const {thumbnails, onClick } = props
        console.log(thumbnails)
        return (
            <div className='grid'>
               {thumbnails.map((thumbnail, i) => (
      <Thumbnail
        key={thumbnail.index}
        imgUrl={thumbnail}
        index={i}
        onClick={onClick}
      />
    ))} 
            </div>
        )
    }

export const Thumbnail = (props)=>{
    
        const { imgUrl, index, onClick } = props.item
        return (
            <div className='thumbnail'>
                 <img src={imgUrl} data-index={index} onClick={onClick} />
            </div>
        )
    }

export const ShowWindow =(props)=>{
   
     const   {activeThumbnail} = props
        return (
            <div className='bigWindow'>
                <img src={activeThumbnail} />
            </div>
        )
    }

const ThumbnailGallery2 =(props)=>{
  
const [thumbnails , setThumbnails] = useState([])
const [activeIndex , setActiveIndex] = useState(0)
   
    
        const {item}= this.props
   

      const  handleClick = e => {
               const activeIndex = e.target.getAttribute('data-index')
              setActiveIndex({activeIndex:activeIndex})
             }
           
           
   const renderThumbnails = () =>
    thumbnails.length ? (
      <>
        <Grid thumbnails={thumbnails} onClick={handleClick} />
        <ShowWindow activeThumbnail={thumbnails[activeIndex]} />
      </>
    ) : null

        return (
            <>
                
      <div className='gallery-container'>{renderThumbnails()}</div>
     
    
            </>
        )
    }



export default ThumbnailGallery2





 



 

 
  