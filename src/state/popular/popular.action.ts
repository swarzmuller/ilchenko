export const selectedLanguageAction = (payload: string) => ({
    type: "SET_LANGUAGE",
    payload,
})

export const getReposLoadingAction = (payload: boolean) => ({
    type: "SET_LOADING",
    payload,
})

export const getRepoSuccessAction = (payload: []) => ({
    type: "GET_REPOS",
    payload,
})

export const setReposErrorActiom = (payload: string) => ({
    type: "SET_ERROR",
    payload,
})
