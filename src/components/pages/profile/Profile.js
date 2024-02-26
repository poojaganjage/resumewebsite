import React from 'react';
import {NavLink} from 'react-router-dom';
import ImgProfile from '../../../images/pooja_photograph.jpg';

function Profile() {
    const object = {
        jobtitle: 'React Js Developer',
        followme: 'Follow Me'
    }
    const {jobtitle: title, followme} = object;
	return (
        <div className='card'>
            <div className='card-image'>
                <img className='activator' src={ImgProfile} alt='Pooja Janardhan Ganjage' width= "150" height="150" />
                <NavLink className='btn-floating halfway-fab waves-effect waves-light red'>
                    <i className='material-icons activator'>more_vert</i>
                </NavLink>
            </div>
            <div className='card-content'>
                <span className='card-title activator grey-text text-darken-4'>
                    {title}
                </span>
            </div>
            <div className='card-reveal'>
                <span className='card-title grey-text text-darken-4'>
                    {followme}
                    <i className='material-icons right'>close</i>
                </span>
                <p className='flex-container'>
                    <i className='fab fa-facebook-f grey-text text-darken-4 social_style'></i>
                    <i className='fab fa-twitter grey-text text-darken-4 social_style'></i>
                    <i className='fab fa-google-plus-g grey-text text-darken-4 social_style'></i>
                    <i className='fab fa-instagram grey-text text-darken-4 social_style'></i>
                    <i className='fab fa-pinterest grey-text text-darken-4 social_style'></i>
                </p>
            </div>
		</div>
	);
}
export default Profile;
