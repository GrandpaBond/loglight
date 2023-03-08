let zero = input.lightLevel()
// initialise...
let logging = false
led.unplot(0, 2)
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    led.toggle(0, 2)
    if (logging) {
        logging = false
    } else {
        datalogger.deleteLog()
        datalogger.setColumnTitles("light")
        logging = true
    }
    
    pause(100)
})
pause(200)
// stabilise...
basic.forever(function on_forever() {
    let level: number;
    
    if (logging) {
        level = input.lightLevel()
        led.toggle(level / 40, 4)
        datalogger.log(datalogger.createCV("light", level))
        pause(20)
    }
    
})
