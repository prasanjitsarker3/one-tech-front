export interface NavLinksType {
    allMenus: {
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