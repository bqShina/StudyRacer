import React from 'react';

const UserProfile: React.FC = () => {
    return (
        <div className="flex items-center">
            <img
                src="https://via.placeholder.com/40"
                alt="User Avatar"
                className="w-10 h-10 rounded-full mr-2"
            />
            <span className="text-sm">John Doe</span>
        </div>
    );
};

export default UserProfile;