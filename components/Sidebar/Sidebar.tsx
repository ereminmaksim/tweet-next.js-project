import React from 'react';
import {
 BellIcon,
 HashtagIcon,
 BookmarkIcon,
 CollectionIcon,
 DotsCircleHorizontalIcon,
 MailIcon,
 UserIcon,
 HomeIcon
} from "@heroicons/react/solid";
import SidebarRow from "./SidebarRow";

const styles = {
    wrap: `col-span-2 flex flex-col items-center px-4
    md:items-start
    `,
    twitIcon: `m-3 h-10 w-10`
}



function Sidebar() {
    return (
        <div className={styles.wrap}>
            <img className={styles.twitIcon} src="https://links.papareact.com/drq" alt="twitter"/>
            <SidebarRow  Icon={HomeIcon} title='Home'/>
            <SidebarRow  Icon={HashtagIcon} title='Explore'/>
            <SidebarRow  Icon={BellIcon} title='Notification'/>
            <SidebarRow  Icon={MailIcon} title='Messages'/>
            <SidebarRow  Icon={BookmarkIcon} title='Bookmarks'/>
            <SidebarRow  Icon={CollectionIcon} title='Lists'/>

            <SidebarRow  Icon={UserIcon} title='Sign-in'/>
            <SidebarRow  Icon={DotsCircleHorizontalIcon} title='More'/>

        </div>
    );
}

export default Sidebar;