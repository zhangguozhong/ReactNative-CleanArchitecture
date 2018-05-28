import phone from '../../common/data-mock.json';

export default class HomePresenter{
    dispatch = null;
  
    constructor(dispatch) {
      this.dispatch = dispatch;
    }

    getInitialState(){
      return {data: {}, typeSort: ''}
    }

    loadDefaultData(){
      
      this.dispatch({
        type: 'LOAD_CUSTOMER_DATA',
        vm: (model)=>{
          
          return {
            data: phone
          }
        }
      })
    }
  
  }