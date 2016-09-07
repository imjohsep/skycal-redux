// Actions are payloads of information that send data from your application to your store. 
// They are the only source of information for the store.

export const NEXT_MONTH = 'NEXT_MONTH'
export const PREV_MONTH = 'PREV_MONTH'
export const NEXT_YEAR = 'NEXT_YEAR'
export const PREV_YEAR = 'PREV_YEAR'
export const USE_DAY = 'USE_DAY'

export function nextMonth(index) {
    return {
        type: 'NEXT_MONTH',
        index
    }
}

export function prevMonth(index) {
    return {
        type: 'PREV_MONTH',
        index
    }
}

export function nextYear(index) {
    return {
        type: 'NEXT_YEAR',
        index
    }
}

export function prevYear(index) {
    return {
        type: 'PREV_YEAR',
        index
    }
}

export function useDay(index) {
    return {
        type: 'USE_DAY',
        index
    }
}