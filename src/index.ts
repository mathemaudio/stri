import { ObjSpread } from "obj-spread";


/**
 * string | undefined
 */
export type stringOrUndefined = string | undefined;





export class Stri {
    /**
     * needs to be called once in the very beginning of your app
     * @returns 
     */
    static includeMe() {
        return `thanks!`;
    }

    /**
     * fast way to cut away a last part split by smth, for instance
     * `"lalala/hahaha/bebebe".cutLast('/')` will return `"lalala/hahaha"`
     * @param	splitter
     */
    static cutLast(s: stringOrUndefined, splitter: stringOrUndefined): stringOrUndefined {
        if (!s) return undefined;
        const arr = s.split(splitter || ``);
        arr.pop();
        return arr.join(splitter);
    }
    /**
     * fast way to cut away a first part split by smth, for instance
     * `"lalala/hahaha/bebebe".cutFirst('/')` will return `"hahaha/bebebe"`
     * @param	splitter
     */
    static cutFirst(s: stringOrUndefined, splitter: stringOrUndefined): stringOrUndefined {
        if (!s) return undefined;
        const arr = s.split(splitter || ``);
        arr.shift();
        return arr.join(splitter);
    }
    /**
     * fast way to get the last part split by smth, for instance
     * `"lalala/hahaha/bebebe".getLast('/')` will return `"bebebe"`
     * @param	splitter
     */
    static getLast(s: stringOrUndefined, splitter: stringOrUndefined): stringOrUndefined {
        if (!s) return undefined;
        return s.split(splitter || ``).pop();
    }
    /**
     * fast way get the first part split by smth, for instance
     * `"lalala/hahaha/bebebe".getFirst('/')` will return `"lalala"`
     * @param	splitter
     */
    static getFirst(s: stringOrUndefined, splitter: stringOrUndefined): stringOrUndefined {
        if (!s) return undefined;
        return s.split(splitter || ``).shift();
    }
    /**
     * Replaces `from` with `to`
     * @param from what to replace
     * @param to to what to replace
     */
    static swap(s: stringOrUndefined, from: stringOrUndefined, to: stringOrUndefined) { return s?.split(from || ``).join(to); }
    /**
     * does this string contain `what`?
     * @param what 
     * @returns 
     */
    static has(s: stringOrUndefined, what: string) { return s?.indexOf(what) != -1; }

    /**
     * returns string between borderA and B. Gets between the first A and the LAST B
     * @param	borderA
     * @param	borderB
     */
    static getBetween(s: stringOrUndefined, borderA: stringOrUndefined, borderB: stringOrUndefined): stringOrUndefined {
        return s?.between(borderA, borderB, true, false);
    }

    /**
     * returns string between borderA and B. Gets between the FIRST A and the FIRST B
     * @param	borderA
     * @param	borderB
     */
    static getBetweenClose(s: stringOrUndefined, borderA: stringOrUndefined, borderB: stringOrUndefined): stringOrUndefined {
        return s?.between(borderA, borderB, true, true);
    }




    /**
     * returns string between borders
     * @param	borderA - left border
     * @param	borderB - right border
     * @param aIsFirst - true if borderA is first, false if is last
     * @param bIsFirst - true if borderB is first, false if is last
     */
    static between(s: stringOrUndefined, borderA: stringOrUndefined, borderB: stringOrUndefined, aIsFirst: boolean, bIsFirst: boolean): stringOrUndefined {
        if (!s) return undefined;
        if (s.has(borderA) && s.has(borderB)) {
            const r = aIsFirst ? s.cutFirst(borderA) : s.getLast(borderA);
            return bIsFirst ? r?.getFirst(borderB) : r?.cutLast(borderB);
        }
        else return undefined;
    }
    /**
     * Removes all `what`s in the string
     * In fact, same as `str.split(what).join('')`
     * @param what what to remove
     * @returns 
     */
    static oust(s: stringOrUndefined, what: stringOrUndefined): boolean {
        if (!s || !s.has(what)) return false;
        s.swap(what, ``);
        return true;
    }


}

new ObjSpread(Stri, String, s => String(s));

declare global {
    export interface String {
        cutLast(splitter: stringOrUndefined): stringOrUndefined;
        cutFirst(splitter: stringOrUndefined): stringOrUndefined;
        getLast(splitter: stringOrUndefined): stringOrUndefined;
        getFirst(splitter: stringOrUndefined): stringOrUndefined;
        swap(what: stringOrUndefined, withWhat: stringOrUndefined): stringOrUndefined;
        has(what: stringOrUndefined): boolean;
        oust(what: stringOrUndefined): boolean;
        getBetween(borderA: stringOrUndefined, borderB: stringOrUndefined): stringOrUndefined;
        getBetweenClose(borderA: stringOrUndefined, borderB: stringOrUndefined): stringOrUndefined;
        between(borderA: stringOrUndefined, borderB: stringOrUndefined, aIsFirst: boolean, bIsFirst: boolean): stringOrUndefined;
    }
}

