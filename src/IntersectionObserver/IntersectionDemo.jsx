import React from 'react'
import v1 from "./vid1.mp4"
import v2 from "./vid2.mp4"
import v3 from "./vid3.mp4"
import v4 from "./vid4.mp4"
import "./inter.css"
import { useEffect } from 'react'
function IntersectionDemo() {

    function callBack(entries){
        entries.forEach((entry)=>{
            let  child=entry.target.children[0];
            child.play().then(function(){
                if(entry.isIntersecting==false){
                    child.pause()

                }
            })
        })
    }

    useEffect(function fn(){
        let conditionObject={
            root:null,
            threshold:"0.9"
        }
        let observer=new IntersectionObserver(callBack,conditionObject);
        let elements=document.querySelectorAll(".video-container")
        elements.forEach((el)=>{
            observer.observe(el)
        })
    },[])
    
    
    return (
        <div className="container">
            <div className="video-container">
                <Video
                    src={v1}
                    id="a">
                </Video>
            </div>
            <div className="video-container">
                <Video
                    src={v2}
                    id="b">
                </Video>
            </div>
            <div className="video-container">
                <Video
                    src={v3}
                    id="c">
                </Video>
            </div>
            <div className="video-container">
                <Video
                    src={v4}
                    id="d">
                </Video>
            </div>
        </div>
    )
}
function Video(props) {
    const handleMute=(e)=>{
        e.preventDefault();
        e.target.muted=!e.target.muted
    }
    return (
        <video className="video-styles" controls muted="true" id={props.id}>
            <source src={
                props.src
            } type="video/mp4"
            onClick={handleMute}
            >

            </source>
        </video>
    )
}

export default IntersectionDemo