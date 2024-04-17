'use client'

import { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { SidebarToggleComponent } from './component';

export const SidebarToggleContainer: FC = ({}) => {
    const [showSidebar, setShowSidebar] = useState(true);
    const [domLoaded, setDomLoaded] = useState(false);
    const buttonRef = useRef<HTMLDivElement>(null);
    const sidebar = useMemo(() => domLoaded && document.getElementById('sidebar'), [domLoaded]);
    const layout = useMemo(() => domLoaded && document.getElementById('layout'), [domLoaded]);
    const wrapper = useMemo(() => domLoaded && document.getElementById('cardWrapper'), [domLoaded]);

    useEffect(() =>{
      const moveButton = () =>{
        const sidebar = document.getElementById('sidebar')!;
        if(window.innerWidth < 650 && sidebar.dataset.closed === 'false'){
          buttonRef.current!.style.left = '200px';
        } else {
          buttonRef.current!.removeAttribute('style');
        }
      }
      
      if(window.innerWidth < 650) {
        document.getElementById('sidebar')!.style.transform = 'translateX(-200px)';
        document.getElementById('cardWrapper')!.style.marginLeft = '16px'; 

        setShowSidebar(false);
      };

      setDomLoaded(true);

      window.addEventListener('resize', moveButton)

      return () => window.removeEventListener('resize', moveButton);
    }, [])

    const moveSidebar = useCallback((sidebar: HTMLElement, layout: HTMLElement) => {
      sidebar.style.transform = `translateX(-${(window.innerWidth - layout.clientWidth) / 2 + sidebar.clientWidth}px)`;
    }, [])

    const onClick = () =>{
        const button = buttonRef.current!;

        if(!sidebar || !layout || !wrapper) return;

        const removeTranslationDelay = () => sidebar.dataset.closed = 'true';
        const timeout = showSidebar && setTimeout(removeTranslationDelay, 200);

        const moveWrapper = () =>{
          if(sidebar.dataset.closed !== 'true') return;
          if(window.innerWidth >= 650) wrapper.style.marginLeft = '16px';

          moveSidebar(sidebar, layout);
        }

        if(showSidebar){
          moveSidebar(sidebar, layout);

          window.addEventListener('resize', moveWrapper);
          wrapper.removeAttribute('style');
          button.removeAttribute('style');

          if(window.innerWidth >= 650) wrapper.style.marginLeft = '16px';
        } else {
          window.removeEventListener('resize', moveWrapper);
          clearTimeout(timeout as NodeJS.Timeout);
          
          sidebar.removeAttribute('style');
          sidebar.dataset.closed = 'false';
          wrapper.removeAttribute('style');
          
          if(window.innerWidth < 650) button.style.left = '200px';
        }
        
        setShowSidebar(!showSidebar);
    }

    return (
        <SidebarToggleComponent onClick={onClick} buttonRef={buttonRef}/>
    );
}