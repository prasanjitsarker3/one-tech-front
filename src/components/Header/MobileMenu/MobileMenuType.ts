export interface MenuType {
    links: {
        id: number,
        title: string,
        slag?: string,
        subMenus?: {
            id: number,
            title: string,
            slag: string
        }[]
    }[]
}