import React from 'react';

interface HoverCardProps {
    titles: string[];
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

function HoverCard({ titles, onMouseEnter, onMouseLeave }: HoverCardProps) {
    return (
        <div 
            className='py-2 z-50 cursor-pointer shadow-lg mt-5 text-black hover:text-white rounded-md bg-white border-b-4 text-xs border-b-blue-400' 
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {
                titles.map((title, index) => 
                <div key={index} className='py-1 px-5 text-sm hover:bg-customeprimary'>{title}</div>)
            }
        </div>
    );
}

export default HoverCard;
