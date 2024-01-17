import React from 'react'

function Emoji({ emoji, setEmoji, setCurrentMessage }) {
    return (
        <>
            <button className='emoji-toggler' onClick={() => setEmoji(!emoji)}>&#128578;</button>
            <div className={emoji ? 'emoji-toggle active' : 'emoji-toggle'} >
                <div onClick={(e) => setCurrentMessage((s) => s + e.target.textContent)}>&#128525;</div>
                <div onClick={(e) => setCurrentMessage((s) => s + e.target.textContent)}>&#128514;</div>
                <div onClick={(e) => setCurrentMessage((s) => s + e.target.textContent)}>&#128512;</div>
                <div onClick={(e) => setCurrentMessage((s) => s + e.target.textContent)}>&#128521;</div>
                <div onClick={(e) => setCurrentMessage((s) => s + e.target.textContent)}>&#128523;</div>
                <div onClick={(e) => setCurrentMessage((s) => s + e.target.textContent)}>&#128526;</div>
                <div onClick={(e) => setCurrentMessage((s) => s + e.target.textContent)}>&#128536;</div>
                <div onClick={(e) => setCurrentMessage((s) => s + e.target.textContent)}>&#128578;</div>
                <div onClick={(e) => setCurrentMessage((s) => s + e.target.textContent)}>&#128580;</div>
                <div onClick={(e) => setCurrentMessage((s) => s + e.target.textContent)}>&#128527;</div>
                <div onClick={(e) => setCurrentMessage((s) => s + e.target.textContent)}>&#128547;</div>
                <div onClick={(e) => setCurrentMessage((s) => s + e.target.textContent)}>&#128549;</div>
                <div onClick={(e) => setCurrentMessage((s) => s + e.target.textContent)}>&#128557;</div>
                <div onClick={(e) => setCurrentMessage((s) => s + e.target.textContent)}>&#128551;</div>
                <div onClick={(e) => setCurrentMessage((s) => s + e.target.textContent)}>&#128556;</div>
                <div onClick={(e) => setCurrentMessage((s) => s + e.target.textContent)}>&#129402;</div>
                <div onClick={(e) => setCurrentMessage((s) => s + e.target.textContent)}>&#128293;</div>
                <div onClick={(e) => setCurrentMessage((s) => s + e.target.textContent)}>&#128077;</div>
                <div onClick={(e) => setCurrentMessage((s) => s + e.target.textContent)}>&#128078;</div>
                <div onClick={(e) => setCurrentMessage((s) => s + e.target.textContent)}>&#128170;</div>
                <div onClick={(e) => setCurrentMessage((s) => s + e.target.textContent)}>&#128074;</div>
                <div onClick={(e) => setCurrentMessage((s) => s + e.target.textContent)}>&#128405;</div>
                <div onClick={(e) => setCurrentMessage((s) => s + e.target.textContent)}>&#128169;</div>
                <div onClick={(e) => setCurrentMessage((s) => s + e.target.textContent)}>&#128102;</div>
                <div onClick={(e) => setCurrentMessage((s) => s + e.target.textContent)}>&#128103;</div>
                <div onClick={(e) => setCurrentMessage((s) => s + e.target.textContent)}>&#128118;</div>
                <div onClick={(e) => setCurrentMessage((s) => s + e.target.textContent)}>&#128143;</div>
            </div>
        </>
    )
}

export default Emoji