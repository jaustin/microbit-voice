input.onButtonPressed(Button.A, function () {
    speak_microbitishly("yes")
    basic.showIcon(IconNames.Yes)
})
function speak_microbitishly (text: string) {
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
        InterpolationCurve.Linear
        ), music.PlaybackMode.UntilDone)
    }
}
input.onButtonPressed(Button.B, function () {
    speak_microbitishly("no")
    basic.showIcon(IconNames.No)
})
function codeToFreq (num: number) {
    return baseFrequency + jump * (num - baseCode)
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    speak_microbitishly("OOOEEEEE")
    speak_microbitishly("oooeeeee")
    basic.pause(200)
    speak_microbitishly("ZZZXYWWVUTTTTT")
    basic.pause(200)
    speak_microbitishly("hello this is a little language. Punctuation works!")
    simpleSpaces = false
    speak_microbitishly("hello this is a little language. Punctuation works!")
    basic.pause(200)
    speak_microbitishly("hello my name is micro:bit")
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
characterLength = 80
jump = 50
baseFrequency = 500
baseCode = "A".charCodeAt(0)
simpleSpaces = true
