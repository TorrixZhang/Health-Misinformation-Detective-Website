import React, { Component } from "react";
import ExpertHeader from "./NavComponents/navExpertSign";
import Header from "./NavComponents/navigation";
import QandANav from "./NavComponents/QandANav";

const iconStyle = {
    display: 'flex',
    alignItems: 'center',
}

class QandA extends Component {
    render() {
        return (
            <div>
                <ExpertHeader />
                <QandANav />
                {/** First QBox */}
                <div className="QBox">
                    <div className="user">
                        <div className="photo"></div>
                        <div className="intro">
                            <h5>Topic: Nutrition</h5>
                            <span>xx views</span>
                            <span>upload time</span>
                        </div>
                    </div>
                    <div className="content">
                        <div className="questionIcon" style={iconStyle}>
                            <span className='icon'></span>
                            <span className='text'>The Question Title</span>
                        </div>
                        <div className="answerIcon" style={iconStyle}>
                            <span className='icon'></span>
                            <span className='text'>The answer of the question</span>
                        </div>
                        <div className="peer" style={iconStyle}>
                            <span className='icon'></span>
                            <span className='text'>Peer Reviewed</span>
                        </div>
                        <div className="next"></div>
                    </div>
                </div>

                {/** Second QBox */}
                <div className="QBox">
                    <div className="user">
                        <div className="photo"></div>
                        <div className="intro">
                            <h5>Topic: Nutrition</h5>
                            <span>xx views</span>
                            <span>upload time</span>
                        </div>
                    </div>
                    <div className="content">
                        <div className="questionIcon" style={iconStyle}>
                            <span className='icon'></span>
                            <span className='text'>The Question Title</span>
                        </div>
                        <div className="answerIcon" style={iconStyle}>
                            <span className='icon'></span>
                            <span className='text'>The answer of the question</span>
                        </div>
                        <div className="peer" style={iconStyle}>
                            <span className='icon'></span>
                            <span className='text'>Peer Reviewed</span>
                        </div>
                        <div className="next"></div>
                    </div>
                </div>

                {/** Third QBox */}
                <div className="QBox">
                    <div className="user">
                        <div className="photo"></div>
                        <div className="intro">
                            <h5>Topic: Nutrition</h5>
                            <span>xx views</span>
                            <span>upload time</span>
                        </div>
                    </div>
                    <div className="content">
                        <div className="questionIcon" style={iconStyle}>
                            <span className='icon'></span>
                            <span className='text'>The Question Title</span>
                        </div>
                        <div className="answerIcon" style={iconStyle}>
                            <span className='icon'></span>
                            <span className='text'>The answer of the question</span>
                        </div>
                        <div className="peer" style={iconStyle}>
                            <span className='icon'></span>
                            <span className='text'>Peer Reviewed</span>
                        </div>
                        <div className="next"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default QandA;
