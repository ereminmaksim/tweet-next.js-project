import React, {SVGProps} from 'react';

interface SidebarType {
    Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
    title: string
}

const styles = {
    wrapper: `group flex max-w-fit cursor-pointer items-center space-x-2 
    rounded-full px-4 py-3 hover:bg-gray-100
    transition-all duration-200`,
    icon: `h-6 w-6`,
    workingText: `hidden 
    md:inline-flex
    group-hover:text-twitter
    text-base font-light lg:text-xl
    `
//
}


function SidebarRow({Icon, title}: SidebarType) {
    return (
        <div className={styles.wrapper}>
            <Icon className={styles.icon}/>
            <p className={styles.workingText}>{title}</p>
        </div>
    );
}

export default SidebarRow;