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

export const enum FilterType {
    GENRES = 'genres',
    PLATFORMS = 'platforms',
}
