import React from 'react';
import {NavLink} from 'react-router-dom';

function Educations() {
	return (
        <div class='card'>
            <div class='card-content'>
                <h6>
                    <strong>EDUCATION</strong>
                </h6>
				<table class='striped'>
                    <thead>
                        <tr>
                            <th>School/College Name</th>
                            <th>Board/University</th>
                            <th>Percentage</th>
                        </tr>
                    </thead>
					<tbody>
                        <tr>
                            <td>MCA (Management)</td>
                            <td>Pune University</td>
                            <td>
                                {/* <NavLink to='/details' class='btn blue lighten-2'>
                                    View
                                </NavLink> */}
                                73.30%
                            </td>
                        </tr>
                        <tr>
                            <td>BCA</td>
                            <td>Pune University</td>
                            <td>
                                {/* <NavLink to='/details' class='btn blue lighten-2'>
                                    View
                                </NavLink> */}
                                71.91%
                            </td>
                        </tr>
                        <tr>
                            <td>12th (Science)</td>
                            <td>CBSE Board</td>
                            <td>
                                {/* <NavLink to='/details' class='btn blue lighten-2'>
                                    View
                                </NavLink> */}
                                65.80%
                            </td>
                        </tr>
                        <tr>
                            <td>10th</td>
                            <td>CBSE Board</td>
                            <td>
                                {/* <NavLink to='/details' class='btn blue lighten-2'>
                                    View
                                </NavLink> */}
                                72.20%
                            </td>
                        </tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
export default Educations;
