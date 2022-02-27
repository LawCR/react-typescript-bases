import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import {gsap} from 'gsap'


export const useCounter = ({maxCount = 10}) => {

    const [counter, setCounter] = useState(5)
    // const elementToAnimate = useRef<HTMLHeadingElement>(null)
    const elementToAnimate = useRef<any>(null) // Para que sea mas flexible en los elementos
    const tl = useRef( gsap.timeline())

    const handleClick = () => {
        // Retorna el valor min entre los valores mandados como parametros
        setCounter( prev => Math.min(prev + 1, maxCount))
    }

    useLayoutEffect(() => {
        if(!elementToAnimate.current) return
        
        tl.current.to(elementToAnimate.current, {y: -10, duration: 0.2, ease: 'ease.out'})
            .to(elementToAnimate.current, {y: 0, duration: 1, ease: 'bounce.out'})
            .pause()
    }, [])

    useEffect(() => {
        // if (counter < maxCount) return
        // console.log('%cSe llego al valor maximo', 'color: red; background-color:black;');
        tl.current.play(0)
    }, [counter])

    return  {
        counter,
        elementToAnimate,
        handleClick
    }
}