//-----------------------------------//
//----SEQUENCE CALL------------------//
//-----------------------------------//

//It clean my own logs
document.getElementById(SET_CLEAN_OWN_LOGS_DOM_ID).addEventListener("click", function(){
	controllers.functions.executeSequence("cleaners", "cleanOwnLogs")
})

document.getElementById(SOLVE_RIDDLE_DOM_ID).addEventListener("click", function(){
    window.alert("Everything is ready to use.\nThere is a red button on every puzzle page. Just click on it. :)");
})

document.getElementById(PERFORM_CHECK_BALANCE_ID).addEventListener("click", function(){
	controllers.functions.executeSequence("missions", "checkBalance")
})

document.getElementById(PERFORM_TRANSFER_MONEY_ID).addEventListener("click", function(){
	controllers.functions.executeSequence("missions", "transferMoney")
})

document.getElementById(PERFORM_BANK_CAMPING).addEventListener("click", function(){
	controllers.functions.executeSequence("camping", "bankCamping")
})

document.getElementById(PERFORM_INSTALL_SOFTWARE).addEventListener("click", function(){
	controllers.functions.executeSequence("uploader", "upload")
})

