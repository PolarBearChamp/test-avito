export interface MinimumSystemRequirements {
    os: string
    processor: string
    memory: string
    graphics: string
    storage: string
}

export interface ScreenshotData {
    id: number
    image: string
}

export interface ShortGame {
    id: number
    title: string
    thumbnail: string
    short_description: string
    game_url: string
    genre: string
    platform: string
    publisher: string
    developer: string
    release_date: string
    freetogame_profile_url: string
}

export interface FullGame extends ShortGame {
    minimum_system_requirements: MinimumSystemRequirements
    screenshots: ScreenshotData[]
    description: string
    status: string
}

export interface GameCardProps
    extends Omit<
        ShortGame,
        | 'game_url'
        | 'short_description'
        | 'freetogame_profile_url'
        | 'id'
        | 'developer'
        | 'platform'
    > {}

export interface FilterState {
    genres: string[]
    platforms: string[]
}

export interface SortState {
    sort: SortStateItem
}

export interface SortStateItem {
    type: SortType
    label: SortLabel
}

export const enum SortType {
    RELEASE_DATE = 'release-date',
    POPULARITY = 'popularity',
    ALPHABETICAL = 'alphabetical',
    RELEVANCE = 'relevance',
    NONE = '',
}

export const enum SortLabel {
    RELEASE_DATE = 'По дате релиза',
    POPULARITY = 'По популярности',
    ALPHABETICAL = 'По алфавиту',
    RELEVANCE = 'По релевантности',
    NONE = 'Сортировать по:',
}
