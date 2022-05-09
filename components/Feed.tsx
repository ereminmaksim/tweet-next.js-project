import React from 'react';
import {RefreshIcon} from "@heroicons/react/solid";
import TweetBox from "./TweetBox/TweetBox";

const styles = {
    main: `col-span-7 lg:col-span-5 border-x`,
    wrap: `flex justify-between items-center`,
    mainText: `p-5 pb-0 text-xl font-bold`,
    update: `mr-5 mt-5 h-8 w-8 cursor-pointer text-twitter
            transition-all duration-500 ease-out
            hover:rotate-180 active:scale-125`
}


function Feed() {
    return (
        <div className={styles.main}>
            <div className={styles.wrap}>
                <h1 className={styles.mainText}>Home</h1>
                <RefreshIcon className={styles.update}/>
            </div>

            {/*TweetBox*/}
            <TweetBox/>
        </div>
    );
}

export default Feed;