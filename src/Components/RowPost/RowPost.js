import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'

import axios from '../../axios'
import {API_KEY, imageUrl } from '../../constants/constants'
import './RowPost.css'
function RowPost(props) {
    const [urlId, setUrlId] = useState('')
    const [originals, setOriginals] = useState([])

    useEffect(() => {
        axios.get(props.url).then((response) => {
            setOriginals(response.data.results)
        }).catch((err) => {
            alert('network error: ' + err.message)
        })
    }, [])
    const opts={
        height:'390',
        width:'100%',
        playerVars:{
            autoplay:1,
        }
    }

    const handleMovie=(id)=>{
        console.log(id)
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
            console.log(response.data)
            if(response.data.results.length!==0){
                setUrlId(response.data.results[0])
            }else{
                console.log('Array is empty')
            }
        }).catch((error)=>{
            console.log(error.message)
        })
    }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
            {
                originals.map((obj)=>
                    <img onClick={()=>handleMovie(obj.id)} className={props.isSmall?'smallPoster':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
                )
                }
        </div>
        {urlId && <YouTube opts={opts} videoId={urlId.key}/>}
    </div>
  )
}

export default RowPost