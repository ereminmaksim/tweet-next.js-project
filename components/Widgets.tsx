import React from 'react';
import {SearchIcon} from "@heroicons/react/solid";
import {TwitterTimelineEmbed} from "react-twitter-embed";

const styles = {
    main: `mt-2 px-2 col-span-2 hidden lg:inline `,
    wrap: `bg-gray-100 p-3 mt-2
        flex items-center space-x-2 bg-gray-100 p-3 rounded-full`,
    icon: `h-5 w-5 text-gray-400`,
    widgetInput: `flex-1
            outline-none
            bg-transparent`
}


function Widgets() {
    return (
        <div className={styles.main}>
            <div className={styles.wrap}>
                <SearchIcon className={styles.icon}/>
                <input type="text" placeholder="Search Twitter"
                       className={styles.widgetInput}/>
            </div>


            <TwitterTimelineEmbed
                sourceType="profile"
                screenName="myobrecheny"
                options={{height: 1000}}
            />
        </div>
    );
}

export default Widgets;