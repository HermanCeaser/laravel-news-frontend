'use client'

// Use usePathname for catching route name.
import { usePathname } from 'next/navigation';
import Header from './components/Header';

export const LayoutProvider = ({ children }) => {
    const pathname = usePathname();
    return (
        <>
            {pathname !== "/login" && <Header/>}
            {children}
        </>
    )
};