function microbabble (text: string) {
    characterLength = 80
    jump = 50
    baseFrequency = 500
    baseCode = "A".charCodeAt(0)
    simpleSpaces = true
    if (0 < text.length) {
        lastFreq = codeToFreq(text.charCodeAt(0))
        lastVolume = 0
        for (let index = 0; index <= text.length - 1; index++) {
            freq = codeToFreq(text.charCodeAt(index + 1))
            // We want to delineate words, so we jump to silence for the space
            if (" ".charCodeAt(0) == text.charCodeAt(index + 1)) {
                volume = 0
                if (simpleSpaces) {
                    freq = lastFreq
                }
            } else {
                volume = 255
            }
            music.play(music.createSoundExpression(
            WaveShape.Sine,
            lastFreq,
            freq,
            lastVolume,
            volume,
            characterLength,
            SoundExpressionEffect.None,
            InterpolationCurve.Logarithmic
            ), music.PlaybackMode.InBackground)
            lastVolume = volume
            lastFreq = freq
        }
        music.play(music.createSoundExpression(
        WaveShape.Sine,
        lastFreq,
        freq,
        lastVolume,
        0,
        characterLength,
        SoundExpressionEffect.None,
        InterpolationCurve.Curve
        ), music.PlaybackMode.UntilDone)
    }
}
input.onButtonPressed(Button.A, function () {
    microbabble("yes")
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.B, function () {
    microbabble("no")
    basic.showIcon(IconNames.No)
})
function codeToFreq (num: number) {
    return baseFrequency + jump * (num - baseCode)
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    microbabble("hello this is a little \"language\". Words always sound the same.")
    basic.pause(500)
    microbabble("hello")
    basic.pause(500)
    microbabble("hello. You can hear \"hello\" in each clip here.")
    basic.pause(500)
    microbabble("hello my name is micro:bit")
    basic.pause(500)
})
let volume = 0
let freq = 0
let lastVolume = 0
let lastFreq = 0
let simpleSpaces = false
let baseCode = 0
let baseFrequency = 0
let jump = 0
let characterLength = 0
microbabble("oooeeee")
