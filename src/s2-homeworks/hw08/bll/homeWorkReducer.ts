import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            switch (action.payload) {
                case "up":
                    return [...state].sort((a, b) => (a.name > b.name ? 1 : -1))
                case "down":
                    return [...state].sort((a, b) => (a.name < b.name ? 1 : -1))
                default:
                    return state
            }
        }
        case 'check': {
            return [...state].filter(age=> age.age >= 18)
        }
        default:
            return state
    }
}
//[ 55, 40, 44, 66 ] to deeply equal [ 66, 44, 40, 55 ]