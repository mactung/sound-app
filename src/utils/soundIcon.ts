// Map a sound/music name (or file_name) to a matching Ionicon, BetterSleep style.
const RULES: Array<[RegExp, string]> = [
    [/rain|drizzle/, 'rainy'],
    [/thunder|storm/, 'thunderstorm'],
    [/fire|flame|camp/, 'flame'],
    [/ocean|wave|sea/, 'water'],
    [/stream|river|creek|water|brook/, 'water-outline'],
    [/forest|tree|wood|leaf|grass|autumn|spring|flower/, 'leaf'],
    [/wind|breeze|air/, 'cloudy'],
    [/bird|chick|crow/, 'egg'],
    [/cricket|frog|bug|insect/, 'bug'],
    [/night|moon|sleep|dream|cloud/, 'moon'],
    [/snow|winter/, 'snow'],
    [/piano|guitar|music|melod|ambient|meditat|calm|relax|peace|mindful/, 'musical-notes'],
    [/vehicle|wheel|trolley|car|train/, 'car'],
    [/sun|morning|light|day/, 'sunny'],
    [/mountain/, 'triangle'],
];

export const soundIcon = (nameOrFile?: string): string => {
    const s = (nameOrFile || '').toLowerCase();
    for (const [re, icon] of RULES) {
        if (re.test(s)) {
            return icon;
        }
    }
    return 'musical-note';
};
