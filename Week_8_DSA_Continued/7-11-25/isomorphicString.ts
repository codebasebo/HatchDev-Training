function isIsomorphic(s: string, t: string): boolean {
    // if (s.length !== t.length) return false;

    // const mapS: Record<string, string> = {};
    // const mapT: Record<string, string> = {};

    // for (let i = 0; i < s.length; i++) {
    //     const charS = s[i];
    //     const charT = t[i];

    //     if (!mapS[charS] && !mapT[charT]) {
    //         mapS[charS] = charT;
    //         mapT[charT] = charS;
    //     } else if (mapS[charS] !== charT || mapT[charT] !== charS) {
    //         return false;
    //     }
    // }

    // return true;

    if (s.length !== t.length) return false;
    let map = new Map();

    for (let i = 0; i < s.length; i++) {
        if (!map.has(s[i])) {
            map.set(s[i], t[i]);
        }
        else {
            if (map.get(s[i]) !== t[i]) {
                return false;
            }   
        }
        console.log(`Mapping: ${s[i]} -> ${t[i]}`);
        console.log(`${s[i]} is mapped to ${map.get(s[i])}`);
        console.log(`${s[i]} -> ${map.get(t[i])}, ${t[i]}`);

    }
    return true;
};