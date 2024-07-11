import { useState } from 'react';
import './Profile.scss';

const Profile = () => {
    const [user, setUser] = useState({
        username: 'John Doe',
        email: 'john.doe@example.com',
        password: 'password'
    });

    const [showModal, setShowModal] = useState(false);
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [error, setError] = useState('');

    const handlePasswordChange = () => {
        if (currentPassword !== user.password) {
            setError('Current password is incorrect.');
            return;
        }

        if (newPassword !== confirmNewPassword) {
            setError('New passwords do not match.');
            return;
        }

        setUser((prevUser) => ({
            ...prevUser,
            password: newPassword
        }));

        setShowModal(false);
        setCurrentPassword('');
        setNewPassword('');
        setConfirmNewPassword('');
        setError('');
        alert('Password updated successfully!');
    };

    const openModal = () => {
        setShowModal(true);
        setError('');
    };

    const closeModal = () => {
        setShowModal(false);
        setCurrentPassword('');
        setNewPassword('');
        setConfirmNewPassword('');
        setError('');
    };

    return (
        <div className="profile-page">
            <h1 className="profile-page__title">Profile</h1>
            <div className="profile-page__info">
                <img src="https://via.placeholder.com/150" alt="Profile Avatar" className="profile-page__avatar" />
                <p className="profile-page__username"><strong>Username:</strong> {user.username}</p>
                <p className="profile-page__email"><strong>Email:</strong> {user.email}</p>
                <button onClick={openModal} className="profile-page__change-password-button">Change Password</button>
            </div>

            {showModal && (
                <div className="profile-page__overlay" onClick={closeModal}>
                    <div className="profile-page__modal" onClick={(e) => e.stopPropagation()}>
                        <div className="profile-page__modal-content">
                            <h2 className="profile-page__modal-title">Change Password</h2>
                            {error && <p className="profile-page__error">{error}</p>}
                            <label htmlFor="currentPassword" className="profile-page__label">Current Password:</label>
                            <input
                                type="password"
                                id="currentPassword"
                                value={currentPassword}
                                onChange={(e) => setCurrentPassword(e.target.value)}
                                className="profile-page__input"
                            />
                            <label htmlFor="newPassword" className="profile-page__label">New Password:</label>
                            <input
                                type="password"
                                id="newPassword"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className="profile-page__input"
                            />
                            <label htmlFor="confirmNewPassword" className="profile-page__label">Confirm New Password:</label>
                            <input
                                type="password"
                                id="confirmNewPassword"
                                value={confirmNewPassword}
                                onChange={(e) => setConfirmNewPassword(e.target.value)}
                                className="profile-page__input"
                            />
                            <div className="profile-page__button-group">
                                <button onClick={handlePasswordChange} className="profile-page__submit-button">Submit</button>
                                <button onClick={closeModal} className="profile-page__cancel-button">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Profile;