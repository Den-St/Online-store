export const formatSearchLink = (route: string, params?: {text?: string, skip?: boolean}) => {
    if(params?.skip) return '#';
    return `${route}?text=${params?.text}`
}