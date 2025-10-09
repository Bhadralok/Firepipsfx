import { useEffect, useRef } from "react"

export default function useOutsideClick(handler, enabled = true) {
    const ref = useRef(null)
    useEffect(() => {
        if(!enabled) return;
        function handleClickOutside (e){
            const target = e.target;
            const inInsideMain = ref.current.contains(target)
            if(!inInsideMain) return handler();
        } 
        document.addEventListener("pointerdown", handleClickOutside)
        return () => document.removeEventListener("pointerdown", handleClickOutside)
    }, [handler, enabled])

    return ref;
}
