import { CheckboxOptionType } from 'antd/es/checkbox/Group'
import { SortLabel, SortStateItem, SortType } from '../types'

export const sortOptions: Map<string, SortStateItem> = new Map([
    [
        'none',
        {
            type: SortType.NONE,
            label: SortLabel.NONE,
        },
    ],
    [
        'popularity',
        {
            type: SortType.POPULARITY,
            label: SortLabel.POPULARITY,
        },
    ],
    [
        'alphabetical',
        {
            type: SortType.ALPHABETICAL,
            label: SortLabel.ALPHABETICAL,
        },
    ],
    [
        'releaseDate',
        {
            type: SortType.RELEASE_DATE,
            label: SortLabel.RELEASE_DATE,
        },
    ],
    [
        'relevance',
        {
            type: SortType.RELEVANCE,
            label: SortLabel.RELEVANCE,
        },
    ],
])
export const platformOptions: CheckboxOptionType[] = [
    {
        label: 'Компьютер',
        value: 'pc',
    },
    {
        label: 'Браузер',
        value: 'browser',
    },
]

export const genreOptions: CheckboxOptionType[] = [
    {
        label: 'MMORPG',
        value: 'mmorpg',
    },
    {
        label: 'Shooter',
        value: 'shooter',
    },
    {
        label: 'Strategy',
        value: 'strategy',
    },
    {
        label: 'MOBA',
        value: 'moba',
    },
    {
        label: 'Racing',
        value: 'racing',
    },
    {
        label: 'Sports',
        value: 'sports',
    },
    {
        label: 'Social',
        value: 'social',
    },
    {
        label: 'Sandbox',
        value: 'sandbox',
    },
    {
        label: 'Open-World',
        value: 'open-world',
    },
    {
        label: 'Survival',
        value: 'survival',
    },
    {
        label: 'PVP',
        value: 'pvp',
    },
    {
        label: 'PVE',
        value: 'pve',
    },
    {
        label: 'Pixel',
        value: 'pixel',
    },
    {
        label: 'Voxel',
        value: 'voxel',
    },
    {
        label: 'Zombie',
        value: 'zombie',
    },
    {
        label: 'Turn-Based',
        value: 'turn-based',
    },
    {
        label: 'First-Person',
        value: 'first-person',
    },
    {
        label: 'Third-Person',
        value: 'third-Person',
    },
    {
        label: 'Top-Down',
        value: 'top-down',
    },
    {
        label: 'Tank',
        value: 'tank',
    },
    {
        label: 'Space',
        value: 'space',
    },
    {
        label: 'Sailing',
        value: 'sailing',
    },
    {
        label: 'Side-Scroller',
        value: 'side-scroller',
    },
    {
        label: 'Superhero',
        value: 'superhero',
    },
    {
        label: 'Permadeath',
        value: 'permadeath',
    },
    {
        label: 'Card',
        value: 'card',
    },
    {
        label: 'Battle Royale',
        value: 'battle-royale',
    },
    {
        label: 'MMO',
        value: 'mmo',
    },
    {
        label: 'MMOFPS',
        value: 'mmofps',
    },
    {
        label: 'MMOTPS',
        value: 'mmotps',
    },
    {
        label: '3D',
        value: '3d',
    },
    {
        label: '2D',
        value: '2d',
    },
    {
        label: 'Anime',
        value: 'anime',
    },
    {
        label: 'Fantasy',
        value: 'fantasy',
    },
    {
        label: 'Sci-Fi',
        value: 'sci-fi',
    },
    {
        label: 'Fighting',
        value: 'fighting',
    },
    {
        label: 'Action-RPG',
        value: 'action-rpg',
    },
    {
        label: 'Military',
        value: 'military',
    },
    {
        label: 'Martial-Arts',
        value: 'martial-arts',
    },
    {
        label: 'Flight',
        value: 'flight',
    },
    {
        label: 'Low-Spec',
        value: 'low-spec',
    },
    {
        label: 'Tower-Defense',
        value: 'tower-defense',
    },
    {
        label: 'Horror',
        value: 'horror',
    },
    {
        label: 'MMORTS',
        value: 'mmorts',
    },
]
