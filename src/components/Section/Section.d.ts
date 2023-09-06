export interface ISection { 
    title: string, 
    listQuizzes: {
        id: string,
        title: string,
        ulr: string,
        description: string,
        image: {
            id: string,
            alt: string,
            src: string
        }
    }[]
};
