export interface IConfigGlobal {
    description: string
    longTitle: string
    shortTitle: string
    url: string
}

export interface ITrainingConfig {
    categoriesList: string[]
    dataConfig: Record<string, IConfigGlobal[]>
}