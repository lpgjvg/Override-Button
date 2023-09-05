import { LightningElement, api, wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import myModal from 'c/newCreateModal';


export default class NewCreateHandler extends NavigationMixin(LightningElement) {

   @api objectApiName;
  
  
   async connectedCallback() {
      try{
        console.log('objectApiName>>' + this.objectApiName);
        

        const modalresult = await myModal.open({
            label:'New Contact Create',
            size: 'medium',
            description: 'Accessible description of modal\'s purpose',
            flowName: 'New_Record_Creation_Handler',
            objectApiName: this.objectApiName,
            inputVariables: this.inputVariables
        });
        console.log('Modal Result>>' + modalresult);

        if(modalresult === 'okay')
        {
            if (this.objectApiName) {
                this[NavigationMixin.Navigate]({
                    type: 'standard__objectPage',
                    attributes: {
                        objectApiName: this.objectApiName,
                        actionName: 'list'
                    },
                    state: {
                        listViewId: ''
                    }
                });
            }
            
        }

        
      

      } catch (error) {
        // Handle any errors that occur when opening the modal
        console.error('Error opening modal:', error);
    }
    }

    get inputVariables() {
        return [
            { name: 'objectApiName', type: 'String', value: this.objectApiName }            

        ]}
    
    


}