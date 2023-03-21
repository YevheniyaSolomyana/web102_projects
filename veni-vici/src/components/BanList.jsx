import React from 'react';

const BanList = ({ banList }) => {
    return (
        <div>
            <h2>Banned Attributes:</h2>
            <ul>
                {banList.map((attribute, index) => (
                    <li key={index}>{attribute}</li>
                ))}
            </ul>
        </div>
    );
};

export default BanList;
