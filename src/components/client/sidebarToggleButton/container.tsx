'use client'

import { FC, useState } from 'react';
import { SidebarToggleComponent } from './component';

export const SidebarToggleContainer: FC = ({}) => {
    const [showSidebar, setShowSidebar] = useState(true);
    
    const onClick = () =>{
        const sidebar = document.getElementById('sidebar');
        const wrapper = document.getElementById('cardWrapper');
        const layout = document.getElementById('layout');

        if(!sidebar || !wrapper || !layout) return;

        if(showSidebar){
            sidebar.style.transform = `translateX(-${(document.body.clientWidth - layout.clientWidth) / 2 + sidebar.clientWidth}px)`;
            wrapper.style.marginLeft = '16px';
        } else {
            sidebar.removeAttribute('style');
            wrapper.removeAttribute('style');
        }
        
        setShowSidebar(!showSidebar);
    }

    return (
        <SidebarToggleComponent onClick={onClick}/>
    );
}