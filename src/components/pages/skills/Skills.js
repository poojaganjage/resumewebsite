import React from 'react';

function Skills() {
    return (
        <div className="card">
            <div className="card-content">
                <h6>
                    <strong>TECHNICAL SKILLS</strong>
                </h6>
                <div className="row mt-top">
                    <div className="col s6">
                        <p>HTML And CSS</p>
                        <div className="progress grey lighten-1">
                            <div className="determinate blue" style={{ width: '90%' }}></div>
                        </div>
                    </div>
                    <div className="col s6">
                        <p>JavaScript and Jquery</p>
                        <div className="progress grey lighten-1">
                            <div className="determinate blue" style={{ width: '80%' }}></div>
                        </div>
                    </div>
                </div>
                <div className="row mt-top">
                    <div className="col s6">
                        <p>React Js</p>
                        <div className="progress grey lighten-1">
                            <div className="determinate blue" style={{ width: '80%' }}></div>
                        </div>
                    </div>
                    <div className="col s6">
                        <p>Redux</p>
                        <div className="progress grey lighten-1">
                            <div className="determinate blue" style={{ width: '80%' }}></div>
                        </div>
                    </div>
                </div>
                <div className="row mt-top">
                    <div className="col s6">
                        <p>JSX</p>
                        <div className="progress grey lighten-1">
                            <div className="determinate blue" style={{ width: '85%' }}></div>
                        </div>
                    </div>
                    <div className="col s6">
                        <p>MySql</p>
                        <div className="progress grey lighten-1">
                            <div className="determinate blue" style={{ width: '90%' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Skills;
