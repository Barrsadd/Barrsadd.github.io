function unitConverter() {
    let input = document.getElementById("input-el").value

    // ======= Meter to feet =======
    let meterInput = document.getElementById("meter-input")
    let feetResult = document.getElementById("feet-result")

    meterInput.textContent = input
    feetResult.textContent = (input*3.2808399).toFixed(2)

    // ======= Feet to meter =======
    let feetInput = document.getElementById("feet-input")
    let meterResult = document.getElementById("meter-result")

    feetInput.textContent = input
    meterResult.textContent = (input/3.2808399).toFixed(2)

    // ======== liter to gallon =======
    let literInput = document.getElementById("liter-input")
    let gallonResult = document.getElementById("gallon-result")

    literInput.textContent = input
    gallonResult.textContent = (input*0.21996915).toFixed(2)

    // ======== gallon to liter =======
    let gallonInput = document.getElementById("gallon-input")
    let literResult = document.getElementById("liter-result")

    gallonInput.textContent = input
    literResult.textContent = (input/0.21996915).toFixed(2)

    // ======== kilograms to pounds ======
    let kgInput = document.getElementById("kg-input")
    let poundsResult = document.getElementById("pounds-result")

    kgInput.textContent = input
    poundsResult.textContent = (input*2.20462262).toFixed(2)

    // ========= pounds to kilograms =======
    let poundsInput = document.getElementById("pounds-input")
    let kgResult = document.getElementById("kg-result")

    poundsInput.textContent = input
    kgResult.textContent = (input/2.20462262).toFixed(2)
}

