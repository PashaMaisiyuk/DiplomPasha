import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { logout } from '../store/userSlice';
import { useNavigate } from 'react-router-dom';

const ProfilePage: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const username = useSelector((state: RootState) => state.user.username);

    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    };

    return (
        <div className="profile-page">
            <h2>Profile</h2>
            <p><strong>Username:</strong> {username}</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default ProfilePage;