// Actions are payloads of information that send data from your application to your store. 
// They are the only source of information for the store.

export const NEXT_MONTH = 'NEXT_MONTH'
export const PREV_MONTH = 'PREV_MONTH'

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