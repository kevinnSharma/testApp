import React, { useState, createContext, useEffect } from 'react';
export const ScrollContext = createContext();

const ScrollContextProvider = ({ children }) => {
    const [onScrollToTop, setOnScrollToTop] = useState(false);
    const [scrollEnabled, setScrollEnabled] = useState(true);
    const [isProfileScrollEnabled, setIsProfileScrollEnabled] = useState(false);

    useEffect(()=>{
        if(onScrollToTop){
            setScrollEnabled(true)
            console.log('scroll enabled')
        }
    }, [onScrollToTop])
    return (
        <ScrollContext.Provider value={{ onScrollToTop, setOnScrollToTop, scrollEnabled, setScrollEnabled, isProfileScrollEnabled, setIsProfileScrollEnabled }}>
            {children}
        </ScrollContext.Provider>
    );
}

export default ScrollContextProvider;
