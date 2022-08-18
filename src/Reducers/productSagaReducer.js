export const productData = (data = [], action) => {
    switch (action.type) {
        case 'PRODUCT_LIST':
            console.warn("PRODUCT_LIST condition ", action)
            return data
        case 'SET_PRODUCT_LIST':
                console.warn("PRODUCT_LIST condition ", action)
                return [...action.data]
        default:
            return data
    }
}
