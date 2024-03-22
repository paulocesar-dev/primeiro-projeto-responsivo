const convertButton = document.querySelector(".convert-button")
const currencySelect01 = document.querySelector(".currency-select-01")
const currencySeletc02 = document.querySelector(".currency-select-02")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConvertd = document.querySelector(".currency-value-convertd")

    
    const dolarToday = 4.97
    const euroToday = 5.38
    const libraToday = 6.26
    const bitcoinToday = 321986.97

    if (currencySelect01.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }

    if (currencySelect01.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue) 
    }

    if (currencySelect01.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }
       
    if (currencySelect01.value == "libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    }

    if (currencySelect01.value == "bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
    }
// ---------------------------------------------------------------------------------------------------


    //--------//  convertendo de real para outras moedas  //---------------------


    if (currencySeletc02.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }

    if (currencySeletc02.value == "dolar") {
        currencyValueConvertd.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySeletc02.value == "euro") {
        currencyValueConvertd.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySeletc02.value == "libra") {
        currencyValueConvertd.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySeletc02.value == "bitcoin") {
        currencyValueConvertd.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }
//----------------------------------------------------------------------------------------------------------------------


//--------------// convertendo de dolar para outras moedas //----------------------------------------------------------------------

    if (currencySelect01.value == "dolar" && currencySeletc02.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)         
    }
    
    if (currencySelect01.value == "dolar" && currencySeletc02.value == "real") {
        currencyValueConvertd.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * dolarToday) 
    }
        
    if (currencySelect01.value == "dolar" && currencySeletc02.value == "euro") {
        currencyValueConvertd.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / 0.92) 
    }

    if (currencySelect01.value == "dolar" && currencySeletc02.value == "libra") {
        currencyValueConvertd.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / 0.79) 
    }

    if (currencySelect01.value == "dolar" && currencySeletc02.value == "bitcoin") {
        currencyValueConvertd.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / 0.000026) 
    }
    
    // ---------------------------------------------------------------------------------------------------------------------
    
   
    // ---------convertendo de euro para outras moedas//----------------------------
    

    if (currencySelect01.value == "euro" && currencySeletc02.value == "euro") {
        currencyValueConvertd.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue) 
    }

    if (currencySelect01.value == "euro" && currencySeletc02.value == "real") {
        currencyValueConvertd.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * euroToday) 
    }

    if (currencySelect01.value == "euro" && currencySeletc02.value == "dolar") {
        currencyValueConvertd.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * 1.09) 
    }

    if (currencySelect01.value == "euro" && currencySeletc02.value == "libra") {
        currencyValueConvertd.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * 0.86)
    } 

    if (currencySelect01.value == "euro" && currencySeletc02.value == "bitcoin") {
        currencyValueConvertd.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue * 0.000028) 
    }
// ---------------------------------------------------------------------------------------------------------

// -----convertendo de libra para outras moedas //------------------------------------

if (currencySelect01.value == "libra" && currencySeletc02.value == "libra") {
    currencyValueConvertd.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "GBP"
    }).format(inputCurrencyValue) 
}

if (currencySelect01.value == "libra" && currencySeletc02.value == "real") {
    currencyValueConvertd.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue * libraToday)     
}

if (currencySelect01.value == "libra" && currencySeletc02.value == "dolar") {
    currencyValueConvertd.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(inputCurrencyValue * 1.26) 
}

if (currencySelect01.value == "libra" && currencySeletc02.value == "euro") {
    currencyValueConvertd.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(inputCurrencyValue * 1.16) 
}

if (currencySelect01.value == "libra" && currencySeletc02.value == "bitcoin") {
    currencyValueConvertd.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "BTC"
    }).format(inputCurrencyValue * 0.000033) 
}
// --------------------------------------------------------------------------------------------------

// -----convertendo de bitcoin para outras moedas //-------------------------------------------

if (currencySelect01.value == "bitcoin" && currencySeletc02.value == "bitcoin") {
    currencyValueConvertd.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "BTC"
    }).format(inputCurrencyValue) 
}

if (currencySelect01.value == "bitcoin" && currencySeletc02.value == "real") {
    currencyValueConvertd.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue * bitcoinToday) 
}

if (currencySelect01.value == "bitcoin" && currencySeletc02.value == "dolar") {
    currencyValueConvertd.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(inputCurrencyValue * 38323.60) 
}

if (currencySelect01.value == "bitcoin" && currencySeletc02.value == "euro") {
    currencyValueConvertd.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(inputCurrencyValue * 35342.41) 
}

if (currencySelect01.value == "bitcoin" && currencySeletc02.value == "libra") {
    currencyValueConvertd.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "GBP"
    }).format(inputCurrencyValue * 30378.54) 
}
// ----------------------------------------------------------------------------------------------

}
//----//função para trocar nome e bandeira da moeda que vai ser convertida //------------------------------ 
             
                     
function currencyChange01() {
    const currencyNameToConvert = document.querySelector(".currency-name-to-convert")
    const currencyImgToConvert = document.querySelector(".currency-img-to-convert")

    if (currencySelect01.value == "real") {
        currencyNameToConvert.innerHTML = "real"
        currencyImgToConvert.src = "./assets/real.png"
    }

    if (currencySelect01.value == "dolar") {
        currencyNameToConvert.innerHTML = "dolar"
        currencyImgToConvert.src = "./assets/dolar.png"
    }

    if (currencySelect01.value == "euro") {
        currencyNameToConvert.innerHTML = "euro"
        currencyImgToConvert.src = "./assets/euro.png"
    }

    if (currencySelect01.value == "libra") {
        currencyNameToConvert.innerHTML = "libra"
        currencyImgToConvert.src = "./assets/libra.png"
    }

    if (currencySelect01.value == "bitcoin") {
        currencyNameToConvert.innerHTML = "bitcoin"
        currencyImgToConvert.src = "./assets/bitcoin.png"
    }

    convertValues()
}
// ----------------------------------------------------------------------------------------------------------------


//---- //função para trocar nome e bandeira da moeda convertida //---------------------- 

function currencyChange02() {
    const currencyNameConvertd = document.getElementById("currency-name-convertd")
    const currencyImageConvertd = document.querySelector(".currency-img-convertd")

    if (currencySeletc02.value == "dolar") {
        currencyNameConvertd.innerHTML = "dolar"
        currencyImageConvertd.src = "./assets/dolar.png"
    }

    if (currencySeletc02.value == "real") {
        currencyNameConvertd.innerHTML = "real"
        currencyImageConvertd.src = "./assets/real.png"
    }

    if (currencySeletc02.value == "euro") {
        currencyNameConvertd.innerHTML = "euro"
        currencyImageConvertd.src = "./assets/euro.png"
    }

    if (currencySeletc02.value == "libra") {
        currencyNameConvertd.innerHTML = "libra"
        currencyImageConvertd.src = "./assets/libra.png"
    }

    if (currencySeletc02.value == "bitcoin") {
        currencyNameConvertd.innerHTML = "bitcoin"
        currencyImageConvertd.src = "./assets/bitcoin.png"
    }

    convertValues()
}



currencySelect01.addEventListener("change", currencyChange01)
currencySeletc02.addEventListener("change", currencyChange02)
convertButton.addEventListener("click", convertValues)






