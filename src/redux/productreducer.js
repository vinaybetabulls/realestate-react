import ADD_PROPERTY from './actions'

const property = {
    type:ADD_PROPERTY,
    propertyName:'',
    propertyDiscription:'',
    propertyLocation:'',
    propertyInformation:'',
    images:[]

}

export default function AddProduct(state=property, action) {

    switch(action.type) {
        case ADD_PROPERTY:
            return Object.assign({},state, {
                propertyName: action.propertyName,
                propertyDiscription: action.propertyDiscription,
                propertyLocation: action.propertyLocation,
                images: action.images,
            })
        default:
            return state;
    }
}