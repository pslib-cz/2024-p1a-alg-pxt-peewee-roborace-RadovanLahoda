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
let b = 0
let c = 0
let d = 0
let e = 0
let f = 0
let g = 0
let lCommand = 0
let kapr = 0
let komet = 0
let irl = 0
let irc = 0
let irr = 0
pins.setPull(IR.l, PinPullMode.PullNone);
pins.setPull(IR.c, PinPullMode.PullNone);
pins.setPull(IR.r, PinPullMode.PullNone);
basic.forever(function () {
    console.log(IR.c)
    irr = pins.digitalReadPin(IR.r);
    irl = pins.digitalReadPin(IR.l);
    irc = pins.digitalReadPin(IR.c);
    //radio.onReceivedString(function (ReceivedString) {
    //    let dilek = ReceivedString
    //    lCommand = parseInt(dilek)
    //    d = 0
    //})
    if (lCommand == 0) {
        //forward
        if (d == 0) {
            d = 1
            basic.showArrow(0, 20)
            basic.pause(20)
        }
        //if (irc && irl && irr == 0, a == 1){
        //    PCAmotor.MotorRun(PCAmotor.Motors.M1, 150)
        //    PCAmotor.MotorRun(PCAmotor.Motors.M4, -150)
        //    basic.pause(20)
        //} else 
        //if (irl == 0, irr == 1){
        //    PCAmotor.MotorRun(PCAmotor.Motors.M1, -150)
        //    PCAmotor.MotorRun(PCAmotor.Motors.M4, -150)
        //    basic.pause(20)
        //} else if (irr == 0, irl == 1) {
        //    PCAmotor.MotorRun(PCAmotor.Motors.M4, 150)
        //    PCAmotor.MotorRun(PCAmotor.Motors.M1, 150)
        //    basic.pause(20)
        //}
        //if (irc && irr && irl== 0, a == 1) {
        //    PCAmotor.MotorRun(PCAmotor.Motors.M1, 150)
        //    PCAmotor.MotorRun(PCAmotor.Motors.M4, -150)
        //    c = 0
        //    basic.pause(20)
        //} else 
        //if (irc == 1, irl && irr == 0, a == 1) {
        //    PCAmotor.MotorRun(PCAmotor.Motors.M1, 150)
        //    PCAmotor.MotorRun(PCAmotor.Motors.M4, -150)
        //    c = 0
        //    basic.pause(20)
        //} else 
        if (irl == 0, irr == 1) {
            e = e / 1.05
            f = 150
            PCAmotor.MotorRun(PCAmotor.Motors.M1, e)
            PCAmotor.MotorRun(PCAmotor.Motors.M4, f)
            basic.pause(20)
        } else if (irr == 0, irl == 1) {
            e = 150
            f = f / 1.05
            PCAmotor.MotorRun(PCAmotor.Motors.M4, -e)
            PCAmotor.MotorRun(PCAmotor.Motors.M1, -f)
            basic.pause(20)
        } else if (irc && irr && irl == 1) {
            PCAmotor.MotorRun(PCAmotor.Motors.M1, -e)
            PCAmotor.MotorRun(PCAmotor.Motors.M4, f)
        } else if (irc == 1) {
            e = 150
            f = 150
            PCAmotor.MotorRun(PCAmotor.Motors.M1, e)
            PCAmotor.MotorRun(PCAmotor.Motors.M4, -f)
        }
        if (irc == 0, b == 1) {
            a = 1
            b = 0
            basic.pause(20)
        }
    }
    //if (lCommand == 1){
    //    //left
    //    if (d == 0){
    //        d = 1
    //        basic.showArrow(6, 20)
    //    }
    //    if (irc && irl && irr == 1, a && c == 0) {
    //        PCAmotor.MotorRun(PCAmotor.Motors.M1, -150)
    //        PCAmotor.MotorRun(PCAmotor.Motors.M4, -150)
    //        c = 1
    //        basic.pause(20)
    //    }
    //    if (irl == 1) {
    //        PCAmotor.MotorRun(PCAmotor.Motors.M1, 150)
    //        basic.pause(20)
    //    }
    //    if (irr == 1, irl == 0) {
    //        PCAmotor.MotorRun(PCAmotor.Motors.M4, -150)
    //        basic.pause(20)
    //    }
    //    if (irc && irr && irl == 0, a == 1) {
    //        PCAmotor.MotorRun(PCAmotor.Motors.M1, 150)
    //        PCAmotor.MotorRun(PCAmotor.Motors.M4, -150)
    //        c = 0
    //        basic.pause(20)
    //    }
    //    if (irc == 1, irl && irr && a == 0) {
    //        PCAmotor.MotorRun(PCAmotor.Motors.M1, 150)
    //        PCAmotor.MotorRun(PCAmotor.Motors.M4, -150)
    //        c = 0
    //        basic.pause(20)
    //    }
    //    //konec oprav
    //    if (irc == 0, b == 1) {
    //        a = 1
    //        b = 0
    //        basic.pause(20)
    //    }
    //}
    //if (lCommand == 2){
    //    //right
    //    if (d == 0) {
    //        d = 1
    //        basic.showArrow(2, 20)
    //    }
    //    if (irc && irl && irr == 0, a && c == 0) {
    //        PCAmotor.MotorRun(PCAmotor.Motors.M1, 150)
    //        PCAmotor.MotorRun(PCAmotor.Motors.M4, 150)
    //        c = 1
    //        basic.pause(20)
    //    }
    //    if (irr == 0) {
    //        PCAmotor.MotorRun(PCAmotor.Motors.M4, -150)
    //        basic.pause(20)
    //    }
    //    if (irl == 0, irr == 1) {
    //        PCAmotor.MotorRun(PCAmotor.Motors.M1, 150)
    //        basic.pause(20)
    //    }
    //    if (irc && irr && irl && a == 1) {
    //        PCAmotor.MotorRun(PCAmotor.Motors.M1, 150)
    //        PCAmotor.MotorRun(PCAmotor.Motors.M4, -150)
    //        c = 0
    //        basic.pause(20)
    //    }
    //    if (irc == 0, irl && irr && a == 1) {
    //        PCAmotor.MotorRun(PCAmotor.Motors.M1, 150)
    //        PCAmotor.MotorRun(PCAmotor.Motors.M4, -150)
    //        c = 0
    //        basic.pause(20)
    //    }
    //    if (irc == 0, b == 1) {
    //        a = 1
    //        b = 0
    //        basic.pause(20)
    //    }
    //}
    //if (lCommand == 3) {
    //    //backward
    //    if (d == 0) {
    //        d = 1
    //        basic.showArrow(4, 20)
    //        basic.pause(20)
    //    }
    //    if (irc && irl && irr == 0, a && c == 0) {
    //        PCAmotor.MotorRun(PCAmotor.Motors.M1, 150)
    //        PCAmotor.MotorRun(PCAmotor.Motors.M4, 150)
    //        c = 1
    //        basic.pause(20)
    //    }
    //    if (irl == 0, irr == 1) {
    //        PCAmotor.MotorRun(PCAmotor.Motors.M4, 150)
    //        basic.pause(20)
    //    }
    //    if (irr == 0, irl == 1) {
    //        PCAmotor.MotorRun(PCAmotor.Motors.M1, -150)
    //        basic.pause(20)
    //    }
    //    if (irc && irr && irl && a == 1) {
    //        PCAmotor.MotorRun(PCAmotor.Motors.M1, 150)
    //        PCAmotor.MotorRun(PCAmotor.Motors.M4, -150)
    //        c = 0
    //        basic.pause(20)
    //    }
    //    if (irc == 0, irl && irr && a == 1) {
    //        PCAmotor.MotorRun(PCAmotor.Motors.M1, 150)
    //        PCAmotor.MotorRun(PCAmotor.Motors.M4, -150)
    //        c = 0
    //        basic.pause(20)
    //    }
    //    if (irc == 0, b == 1) {
    //        a = 1
    //        b = 0
    //        basic.pause(20)
    //    }
    //}
})