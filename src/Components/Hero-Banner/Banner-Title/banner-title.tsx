'use client';
import MobileScreen from '@/app/Hooks/Common/screen-size';
import {App} from '../../../Enums/index';
import './banner-title.css'
import { useEffect, useState } from 'react';
import { textArray } from '@/Const';
const BannerTitle = () => {
    const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);
    const isMobile = MobileScreen();
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTextIndex((prevIndex: number) =>
                prevIndex === textArray.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [textArray.length]);

    return <div className={isMobile ? 'banner-title-mobile' : 'banner-title'}>{isMobile ? textArray[currentTextIndex] : App.name }</div>
}

export default BannerTitle;