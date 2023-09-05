import { api } from 'lwc';
//import {loadStyle} from 'lightning/platformResourceLoader';
//import buttonoverride from '@salesforce/resourceUrl/buttonoverride';
import LightningModal from 'lightning/modal';
   /** Dynamic modal to run the flows */


export default class newCreateModal extends LightningModal {
    @api flowName;
    @api inputVariables;
    @api objectApiName;

    /*connectedCallback() {

        Promise.all([
                loadStyle(this, buttonoverride) //specified filename
            ])
            .then(() => {
                console.log('Loaded style');
            }).catch(error => {
                console.log('css load errror' + error);
                
            });
    
         
        }*/
    

   
    handleStatusChange(Event) {
        console.log('handleStatusChange', Event.detail);
        if (Event.detail.status === 'FINISHED' || Event.detail.status === 'PAUSED' || Event.detail.status === 'FINISHED_SCREEN') {
            this.handleClose();
        }
    }

    handleClose() {
        this.close('okay');
    }

    
}