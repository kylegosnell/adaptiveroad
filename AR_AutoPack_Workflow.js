function InitAutoPack(){
	nlapiLogExecution('DEBUG', 'Start Script');
	var rec = nlapiGetNewRecord(),
			  fulfillmentID = rec.getFieldValue('id'),
			  params = {},
			  scheduled ={};
	params.stID = fulfillmentID;
        nlapiLogExecution('DEBUG',params.stID);
        spsapiAutoPack(params);
		nlapiLogExecution('DEBUG', 'End Script');
}