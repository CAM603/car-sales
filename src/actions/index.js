export const BUY_ITEM = "BUY_ITEM"; // Action Type

export const buyItem = item => {
    // Action Creator
    return {
        type: BUY_ITEM,
        payload: item
    }
}