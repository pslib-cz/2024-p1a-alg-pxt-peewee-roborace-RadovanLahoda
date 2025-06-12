//let p = 0
//let o = 125
//const stripLenght: number = 36;
//let pasek = neopixel.create(DigitalPin.P0, stripLenght, NeoPixelMode.RGB)

radio.setGroup(123)
radio.setFrequencyBand(48)
type IRC = {
    l: DigitalPin,
    c: DigitalPin,
    r: DigitalPin
}
const IR: IRC = {
    l: DigitalPin.P14,
    c: DigitalPin.P15,
    r: DigitalPin.P13
}

pins.setPull(IR.l, PinPullMode.PullNone);
pins.setPull(IR.c, PinPullMode.PullNone);
pins.setPull(IR.r, PinPullMode.PullNone);
let datal: number;
let datar: number;
let datac: number;
let lCommand = 0
let rCommand = 0
let blackL = 0
let blackR = 0

basic.forever(function () {
    datal = pins.digitalReadPin(IR.l);
    datac = pins.digitalReadPin(IR.c)
    datar = pins.digitalReadPin(IR.r)

    if (lCommand == 1) {
        if (datar == 0) {
        }
        if (datal == 0) {
            PCAmotor.MotorRun(PCAmotor.Motors.M1, 0)
            blackL = 1
        }
        if ((datal == 1) && (blackL == 1)) {
            PCAmotor.MotorRun(PCAmotor.Motors.M4, 200)
            lCommand = 0
        }
        basic.pause(20)
    }
    if (rCommand == 1) {
        if (datar == 0) {
            PCAmotor.MotorRun(PCAmotor.Motors.M4, 0)
            blackR = 1
        }
        if ((datar == 1) && (blackR == 1)) {
            PCAmotor.MotorRun(PCAmotor.Motors.M4, 200)
            rCommand = 0
        }
        if (datal == 0) {
            //idk
        }
        basic.pause(20)
    }
    if ((rCommand == 0) && (lCommand == 0)) {
        if (datal === 0) {
            PCAmotor.MotorRun(PCAmotor.Motors.M1, 0)
        }
        if (datar === 0) {
            PCAmotor.MotorRun(PCAmotor.Motors.M4, 0)
        }
        if (datac === 0) {
            PCAmotor.MotorRun(PCAmotor.Motors.M1, 200)
            PCAmotor.MotorRun(PCAmotor.Motors.M4, -200)
        }
        basic.pause(20)
    }
    if ((rCommand == 1) && (lCommand == 1)) {
        rCommand = 0
        lCommand = 0
    }
//    o += 5
//    p += 5
//    pasek.showRainbow(o, p)
//    pasek.show()
//    if (o >= 350) {
//        o = -0
//    }
//    if (p >= 350) {
//        p = -0
//    }
})

radio.onReceivedString(function (ReceivedString) {
    let dilek = ReceivedString.split(',')
    lCommand = parseInt(dilek[0])
    rCommand = parseInt(dilek[1])
})