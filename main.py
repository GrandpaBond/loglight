def on_button_pressed_a():
    global logging
    led.toggle(0, 2)
    if logging:
        logging = False
    else:
        datalogger.delete_log()
        datalogger.set_column_titles("light")
        logging = True
    pause(100)
    
def on_forever():
    global logging
    if logging:
        level = input.light_level()
        led.toggle(level/40, 4)
        datalogger.log(datalogger.create_cv("light",level))
        pause(20)

zero = input.light_level() #initialise...
logging = False
led.unplot(0, 2)
input.on_button_pressed(Button.A, on_button_pressed_a)
pause(200) #stabilise...
basic.forever(on_forever)