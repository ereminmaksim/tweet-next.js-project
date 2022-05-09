import React from 'react';
import {
    CalendarIcon,
    EmojiHappyIcon,
    LocationMarkerIcon,
    PhotographIcon,
    SearchCircleIcon
} from "@heroicons/react/outline";

const styles = {
    main: `flex space-x-2 flex-1 text-twitter`,
    icon: `h-5 w-5 cursor-pointer transition-transform
    duration-150 ease-out hover:scale-150
    `
}

function SearchIcon() {
    return (
        <div className={styles.main}>
            <CalendarIcon className={styles.icon}/>
            <EmojiHappyIcon className={styles.icon}/>
            <LocationMarkerIcon className={styles.icon}/>
            <PhotographIcon className={styles.icon}/>
            <SearchCircleIcon className={styles.icon}/>
        </div>
    );
}

export default SearchIcon;