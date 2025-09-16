input.onButtonPressed(Button.A, function () {
    microbitsay("YES")
    basic.pause(200)
})
function microbitsay (text: string) {
    if (0 < text.length) {
        lastFreq = codeToFreq(text.charCodeAt(0))
        lastVolume = 0
        for (let index = 0; index <= text.length - 1; index++) {
            freq = codeToFreq(text.charCodeAt(index + 1))
            // We want to delineate words, so we jump to silence for the space
            if (" ".charCodeAt(0) == text.charCodeAt(index + 1)) {
                volume = 0
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
            ), music.PlaybackMode.UntilDone)
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
        InterpolationCurve.Linear
        ), music.PlaybackMode.UntilDone)
    }
}
input.onButtonPressed(Button.B, function () {
    microbitsay("NO")
})
function codeToFreq (num: number) {
    return baseFrequency + jump * (num - baseCode)
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    microbitsay("OOOEEEEE")
    basic.pause(200)
    microbitsay("ZZZXYWWVUTTTTT")
    basic.pause(200)
    microbitsay("hello this is a little language")
    basic.pause(200)
    microbitsay("hello my name is micro:bit")
})
let volume = 0
let freq = 0
let lastVolume = 0
let lastFreq = 0
let baseCode = 0
let baseFrequency = 0
let jump = 0
let characterLength = 0
characterLength = 60
jump = 100
baseFrequency = 1500
baseCode = "A".charCodeAt(0)
