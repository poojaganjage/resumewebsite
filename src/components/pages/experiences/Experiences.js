import React from 'react';

function Experiences() {
    return (
        <div className="card">
            <div className="card-content">
                <h6>
                    <strong>WORKING EXPERIENCE</strong>
                </h6>
                <div className="row mt-top">
                    <div className="col xl4 l4 m6 s12">
                        <p className="teal year_exp white-text">
                            Sep
                            <strong>2021</strong> - Dec
                            <strong>2022</strong>
                        </p>
                    </div>
                    <div className="col xl8 l8 m6 s12">
                        <blockquote className="no-pad">
                            <h6 className="no-pad mt-bottom">
                                <strong>REACT JS DEVELOPER</strong>
                            </h6>
                            <p>
                                Working as an “Senior Software Engineer” in Mindtree Ltd from September - 2021 to till present.
                            </p>
                        </blockquote>
                    </div>
                </div>
                <div className="row mt-top">
                    <div className="col xl4 l4 m6 s12">
                        <p className="teal year_exp white-text">
                            Aug
                            <strong>2019</strong> - Sep
                            <strong>2021</strong>
                        </p>
                    </div>
                    <div className="col xl8 l8 m6 s12">
                        <blockquote className="no-pad">
                            <h6 className="no-pad mt-bottom">
                                <strong>DRUPAL DEVELOPER</strong>
                            </h6>
                            <p>
                                Worked as an “Associate Software Engineer” in Asentech LLC from August - 2019 to September 2021. 
                            </p>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Experiences;
