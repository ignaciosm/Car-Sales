export const addFeature = (item) => {
  // console.log('hello from action addFeature')
  return {
    type: 'ADD_FEATURE', payload: item
  };
};

export const addPrice = (item) => {
  // console.log('hello from action addPrice')
  return {
    type: 'ADD_PRICE', payload: item.price
  };
};

export const removeFeature = (item) => {
  // console.log('hello from action removeFeature')
  return {
    type: 'REMOVE_FEATURE', payload: item
  };
};