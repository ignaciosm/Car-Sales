
export const CarFeatureReducer = (state = initialState, action) => {
  switch(action.type){
    case 'ADD_FEATURE':
      // console.log('hello from reducer', action)
      return {
        ...state,
        car: {
          ...state.car,
          features: [
            ...state.car.features, {id: action.payload.id, name: action.payload.name, price: action.payload.price }
          ]
        }
      }
    case 'ADD_PRICE':
      // console.log('hello from reducer', action)
      return {
        ...state,
        car: {
          ...state.car, price: state.car.price + action.payload.price
        }
      }
    case 'REMOVE_FEATURE':
        console.log('action.payload.id', action.payload.id) 
        return { 
          ...state,
          car: {
            ...state.car, features: state.car.features.filter(item => item.id !== action.payload.id )
          }
        };      
    case 'REMOVE_PRICE':
        // console.log('hello from reducer', action)
        return {
          ...state,
          car: {
            ...state.car, price: state.car.price - action.payload.price
          }
        }
      // return state;
      // return { todos: state.todos.filter(todo => !todo.completed) };        
    default:
      return state;
  }
}

export const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
  },
  additionalFeatures: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
  ]
};