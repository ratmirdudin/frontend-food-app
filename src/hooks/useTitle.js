import {useEffect} from "react";

const getUpdatedTitle = (routeTitle) => {
    let defaultTitle = "Еда и точка";
    return defaultTitle + " | " + routeTitle
}

export const useTitle = (title) => {
    useEffect(() => {
        const prevTitle = document.title
        document.title = getUpdatedTitle(title)
        return () => {
            document.title = prevTitle
        }
    }, [title])
}