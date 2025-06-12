//let p = 0
//let o = 125
//const stripLenght: number = 36;
//let pasek = neopixel.create(DigitalPin.P0, stripLenght, NeoPixelMode.RGB)
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
let x = 0
pins.setPull(IR.l, PinPullMode.PullNone);
pins.setPull(IR.c, PinPullMode.PullNone);
pins.setPull(IR.r, PinPullMode.PullNone);
let datal: number;
let datar: number;
let datac: number;
let ein = 0
let zwei = 0
let z = 0
let g = 0

basic.forever(function () {
    datal = pins.digitalReadPin(IR.l);
    datac = pins.digitalReadPin(IR.c)
    datar = pins.digitalReadPin(IR.r)
    radio.onReceivedString(function (ReceivedString) {
        let dilek = ReceivedString.split(',')
        ein = parseInt(dilek[0])
        zwei = parseInt(dilek[1])
    })
    if (ein == 1) {
        if (datar == 0) {
        }
        if (datal == 0) {
            PCAmotor.MotorRun(PCAmotor.Motors.M1, 0)
            let z = 1
        }
        if ((datal == 1) && (z == 1)) {
            PCAmotor.MotorRun(PCAmotor.Motors.M4, 200)
            ein = 0
        }
        basic.pause(20)
    }
    if (zwei == 1) {
        if (datar == 0) {
            PCAmotor.MotorRun(PCAmotor.Motors.M4, 0)
            g = 1
        }
        if ((datar == 1) && (g == 1)) {
            PCAmotor.MotorRun(PCAmotor.Motors.M4, 200)
            zwei = 0
        }
        if (datal == 0) {
        }
        basic.pause(20)
    }
    if ((zwei == 0) && (ein == 0)) {
        if (datal === 0) (
            PCAmotor.MotorRun(PCAmotor.Motors.M1, 0)
        )
        if (datar === 0) (
            PCAmotor.MotorRun(PCAmotor.Motors.M4, 0)
        )
        if (datac === 0) (
            PCAmotor.MotorRun(PCAmotor.Motors.M1, 200)
            &&
            PCAmotor.MotorRun(PCAmotor.Motors.M4, -200)
        )
        basic.pause(20)
    }
    if ((zwei == 1) && (ein == 1)) {
        zwei = 0
        ein = 0
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
