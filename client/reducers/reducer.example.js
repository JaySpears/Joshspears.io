 const initialState = {
   isExample: false
 };

 /**
  * function isExampleReducer, example reducer switch statement
  * for request action options.
  *
  * @param  {Object} state
  * @param  {Object} action
  */
 function isExampleReducer(state = initialState, action){
   switch (action.type) {
     case 'IS_EXAMPLE' : {
       return Object.assign({}, state, {
         isExample: action.isExample
       });
     }
     default:
       return state
   }
 }

// Export reducer.
 export default isExampleReducer;
