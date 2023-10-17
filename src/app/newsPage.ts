export interface NewsPage {
    id: string;
    gameId: string;
    name: string;
    date: string;
    vignetteSource: string;
    shortDescription: string;
    tags: string[];
    release: string|undefined;
    improvements: string|undefined;
    bugsFixed: string|undefined;
    downloadLink: string;
}