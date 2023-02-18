//import React, { useEffect } from 'react'
import { useEffect, useState } from 'react';

export const ShowImage = ({ image }) => {

  const [valueImg, setValueImg] = useState([])

  useEffect(() => {
    const getGifs = async () => {
      const url = `https://api.giphy.com/v1/gifs/search?api_key=41ciNV3n8yPmiIwafuoMHT7wY1feMe5F&q=${image}&limit=20`
      const resp = await fetch(url)
      const { data } = await resp.json()
      const gifs = data.map((img) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
      }))
      setValueImg(gifs)
      return gifs
    }
    getGifs(image)
  }, [image]);

  return (
    <div>
      {
        <div className='contGridItems'>
          {
            valueImg.map((image) => {
              return (
                <div key={image.id} style={{display: 'flex', flexDirection: 'column'}}>
                  <label className='labelGridItem'>{image.title}</label>
                  <img className='gridItem' src={image?.url} alt='Gif traido desde GIPHY' key={image.id} />
                </div>
              )
            })
          }
        </div>

      }
    </div>
  )
}
