let status = 0
let strip = neopixel.create(DigitalPin.P0, 3, NeoPixelMode.RGB_RGB)
let stopper = strip.range(0, 1)
stopper.showColor(neopixel.colors(NeoPixelColors.Red))
let waiter = strip.range(1, 1)
waiter.showColor(neopixel.colors(NeoPixelColors.Yellow))
let goer = strip.range(2, 1)
goer.showColor(neopixel.colors(NeoPixelColors.Green))
basic.pause(2000)
lightChanger(status);
strip.showColor(neopixel.colors(NeoPixelColors.Black))
function lightChanger (status:Number) {
    if(status==0){
        stopper.showColor(neopixel.colors(NeoPixelColors.Red));
        waiter.showColor(neopixel.colors(NeoPixelColors.Black));
        goer.showColor(neopixel.colors(NeoPixelColors.Black));
        status=1;
    }else if(status==1){
        stopper.showColor(neopixel.colors(NeoPixelColors.Black));
        waiter.showColor(neopixel.colors(NeoPixelColors.Yellow));
        goer.showColor(neopixel.colors(NeoPixelColors.Black));
        status=2;
    }else{
        stopper.showColor(neopixel.colors(NeoPixelColors.Black));
        waiter.showColor(neopixel.colors(NeoPixelColors.Black));
        goer.showColor(neopixel.colors(NeoPixelColors.Green));
        status=0;
    }
    basic.pause(2000);
    lightChanger(status);
}
// strip.showColor(neopixel.colors(NeoPixelColors.Red))
basic.forever(function () {
	
})
