radio.setGroup(123)
radio.setFrequencyBand(48)
radio.setTransmitSerialNumber(true)
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
let a = 1
let b = 1
let c = 1
let e = 0
let f = 0
let g = 0
let lCommand = 0
pins.setPull(IR.l, PinPullMode.PullNone);
pins.setPull(IR.c, PinPullMode.PullNone);
pins.setPull(IR.r, PinPullMode.PullNone);
basic.forever(function () {
    radio.onReceivedString(function (ReceivedString) {
        let dilek = ReceivedString
        lCommand = parseInt(dilek)
    })
    a = pins.digitalReadPin(IR.l)
    b = pins.digitalReadPin(IR.c)
    c = pins.digitalReadPin(IR.r)
    if (a && b && c == 0) {
        PCAmotor.MotorRun(PCAmotor.Motors.M4, 125)
        PCAmotor.MotorRun(PCAmotor.Motors.M1, -100)
        e = 0
        basic.pause(20)
    }
    if (lCommand == 1) {
        PCAmotor.MotorRun(PCAmotor.Motors.M1, 0)
        PCAmotor.MotorRun(PCAmotor.Motors.M4, 125)
        basic.pause(500)
        lCommand = 0
    }
    if (lCommand == 2) {
        PCAmotor.MotorRun(PCAmotor.Motors.M4, 0)
        PCAmotor.MotorRun(PCAmotor.Motors.M1, 100)
        basic.pause(500)
        lCommand = 0
    }
    if (lCommand == 3) {
        PCAmotor.MotorRun(PCAmotor.Motors.M1, 100)
        PCAmotor.MotorRun(PCAmotor.Motors.M4, -125)
        basic.pause(500)
        lCommand = 0
    }
    if (lCommand == 4) {
        PCAmotor.MotorRun(PCAmotor.Motors.M1, -100)
        PCAmotor.MotorRun(PCAmotor.Motors.M4, 125)
        basic.pause(500)
        lCommand = 0
    }
    //if (a && b && c == 0) {
    //    PCAmotor.MotorRun(PCAmotor.Motors.M4, 200)
    //    PCAmotor.MotorRun(PCAmotor.Motors.M1, -200)
    //    e = 0
    //    basic.pause(20)
    //}
    if (a && b == 1, c && g == 0) {
        PCAmotor.MotorRun(PCAmotor.Motors.M1, 0)
        PCAmotor.MotorRun(PCAmotor.Motors.M4, -125)
        e = 0
        basic.pause(20)
    }
    if (b && c == 1, a && f == 0) {
        PCAmotor.MotorRun(PCAmotor.Motors.M4, 0)
        PCAmotor.MotorRun(PCAmotor.Motors.M1, 100)
        e = 0
        basic.pause(20)
    }
    if (a && c == 1, b == 0, e == 1) {
        let d = Math.randomRange(0, 1)
        e = 1
        if (d == 0) {
            PCAmotor.MotorRun(PCAmotor.Motors.M1, 0)
            PCAmotor.MotorRun(PCAmotor.Motors.M4, -125)
        }
        if (d == 1) {
            PCAmotor.MotorRun(PCAmotor.Motors.M1, 100)
            PCAmotor.MotorRun(PCAmotor.Motors.M4, 0)
        }
        basic.pause(20)
    }
    if (a == 1, b && c == 0) {
        PCAmotor.MotorRun(PCAmotor.Motors.M4, 0)
        PCAmotor.MotorRun(PCAmotor.Motors.M1, 100)
        e = 0
        basic.pause(20)
        f = 1
    }
    //if (b == 1, a && c == 0){
    //    PCAmotor.MotorRun(PCAmotor.Motors.M4, -100)
    //    PCAmotor.MotorRun(PCAmotor.Motors.M1, 100)
    //    e = 0
    //    basic.pause(20)
    //    f = 0
    //    g = 0
    //}
    if (c == 1, a && b == 0) {
        PCAmotor.MotorRun(PCAmotor.Motors.M4, -125)
        PCAmotor.MotorRun(PCAmotor.Motors.M1, 0)
        e = 0
        basic.pause(20)
        g = 1
    }
})