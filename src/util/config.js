export const SORT_OPTIONS = [{
        id: "alphabetical",
        displayValue: "Ordem Alfabética",
        strategy: (artist) => artist.sort((a, b) => a.name > b.name ? 1 : -1)
    }, {
        id: "popularity",
        displayValue: "Popularidade",
        strategy: (artist) => artist.sort((a, b) => b.numPlays - a.numPlays)
    }
]

export const MUSIC_API = {
    url: "https://dws-recruiting-bands.dwsbrazil.io/api"
}