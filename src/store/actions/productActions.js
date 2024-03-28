export const ORIGIN_PRODUCTS = "ORIGIN_PRODUCTS"
export const FETCH_PRODUCTS_REQUEST = "FETCH_PRODUCTS_REQUEST"
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS"
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE"
export const SORT_BY_OLD_TO_NEW = 'SORT_BY_OLD_TO_NEW';
export const SORT_BY_NEW_TO_OLD = 'SORT_BY_NEW_TO_OLD';
export const SORT_BY_HIGH_TO_LOW = 'SORT_BY_HIGH_TO_LOW';
export const SORT_BY_LOW_TO_HIGH = 'SORT_BY_LOW_TO_HIGH';
export const BRANDS_LIST = 'SORT_BY_LOW_TO_HIGH';
export const SEARCH_CARD_LIST = 'SEARCH_CARD_LIST'


export const originProducts = (product) => ({
 
        type: ORIGIN_PRODUCTS,
        payload: product
})

export const fetchProductsRequest = () => ({
 
        type: FETCH_PRODUCTS_REQUEST
    
})

export const fetchProductsSuccess=(product)=> ({

        type: FETCH_PRODUCTS_SUCCESS,
        payload: product
})

export const fetchProductsFailure=(product)=> ({

        type: FETCH_PRODUCTS_FAILURE,
        payload: product  
})

export const sortByOldToNew=()=> ({

        type: SORT_BY_OLD_TO_NEW,
        
})

export const sortByNewToOld=()=> ({

        type: SORT_BY_NEW_TO_OLD,
   
})

export const sortByHighToLow=()=> ({

        type: SORT_BY_HIGH_TO_LOW,
 
})

export const sortByLowToHigh=()=> ({

        type: SORT_BY_LOW_TO_HIGH,
       
})

export const brandsList=()=> ({

        type: BRANDS_LIST,
       
})


export const searchCardList=(filtered)=> ({

        type: SEARCH_CARD_LIST,
        payload: filtered  
})
