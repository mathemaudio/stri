type S = string|undefined;

const proto=String.prototype;

/**
 * fast way to cut away a last part split by smth, for instance
 * `"lalala/hahaha/bebebe".cutLast('/')` will return `"lalala/hahaha"`
 * @param	splitter
 */
proto.cutLast = function(splitter:S):S {
    const s=String(this);
    if (!s) return undefined;
    const arr = s.split(splitter||``);
    arr.pop();
    return arr.join(splitter);
}
/**
 * fast way to cut away a first part split by smth, for instance
 * `"lalala/hahaha/bebebe".cutFirst('/')` will return `"hahaha/bebebe"`
 * @param	splitter
 */
proto.cutFirst = function(splitter:S):S {
    const s=String(this);
    if (!s) return undefined;
    const arr = s.split(splitter||``);
    arr.shift();
    return arr.join(splitter);
}
/**
 * fast way to get the last part split by smth, for instance
 * `"lalala/hahaha/bebebe".getLast('/')` will return `"bebebe"`
 * @param	splitter
 */
proto.getLast = function(splitter:S):S {
    const s=String(this);
    if (!s) return undefined;
    return s.split(splitter||``).pop();
}
/**
 * fast way get the first part split by smth, for instance
 * `"lalala/hahaha/bebebe".getFirst('/')` will return `"lalala"`
 * @param	splitter
 */
proto.getFirst = function(splitter:S):S {
    const s=String(this);
    if (!s) return undefined;
    return s.split(splitter||``).shift();
}
/**
 * Replaces `from` with `to`
 * @param from what to replace
 * @param to to what to replace
 */
proto.swap=function(from:S, to:S){    return String(this).split(from||``).join(to);}
proto.has=function(what:string){    return String(this).indexOf(what)!=-1;}

/**
 * returns string between borderA and B. Gets between the first A and the LAST B
 * @param	borderA
 * @param	borderB
 */
proto.getBetween = function(borderA:S, borderB:S):S {
    return  String(this).between(borderA, borderB, true, false);
}

/**
 * returns string between borderA and B. Gets between the FIRST A and the FIRST B
 * @param	borderA
 * @param	borderB
 */
proto.getBetweenClose=function(borderA:S, borderB:S):S {
    return  String(this).between(borderA, borderB, true, true);
}

/**
 * Removes all `what`s in the string
 * In fact, same as `str.split(what).join('')`
 * @param what what to remove
 * @returns 
 */
proto.oust=function(what:S):boolean{
    const s=String(this);
    if (!s || !s.has(what)) return false;
    s.swap(what, ``);
    return true;
}



/**
 * returns string between borders
 * @param	borderA - left border
 * @param	borderB - right border
 * @param aIsFirst - true if borderA is first, false if is last
 * @param bIsFirst - true if borderB is first, false if is last
 */
proto.between = function(borderA:S, borderB:S, aIsFirst:boolean, bIsFirst:boolean):S {
    const s=String(this);
    if (!s) return undefined;
    if(s.has(borderA) && s.has(borderB)){
        const r = aIsFirst? s.cutFirst(borderA):s.getLast(borderA);
        return  bIsFirst? r?.getFirst(borderB):r?.cutLast(borderB);
    }
    else return undefined;
}


export class Stri {
    static includeMe(){
        return `thanks!`;
    }
/*    static testAll(){
        const assert=(code:()=>boolean)=>{
            const codeStr=code.toString(), ok=code();
            (ok?console.log:console.error)(codeStr+`...`+(ok?`fine`:`failed!`));
        }
        assert(()=>"lalala/hahaha/bebebe".cutFirst('/')=="hahaha/bebebe");
        assert(()=>"lalala/hahaha/bebebe".cutLast('/')=="lalala/hahaha");
        assert(()=>"lalala/hahaha/bebebe".getFirst('/')=="lalala");
        assert(()=>"lalala/hahaha/bebebe".getLast('/')=="bebebe");
        assert(()=>"lalala/hahaha/bebebe".getBetween(`/`, `be`)=="hahaha/bebe");
        assert(()=>"lalala/hahaha/bebebe".getBetweenClose(`/`, `be`)=="hahaha/");
        // console.log("lalala/hahaha/bebebe".getBetweenClose(`/`, `be`));
    }
*/



}


declare global {
    interface String {
        cutLast(splitter:S):S;
        cutFirst(splitter:S):S;
        getLast(splitter:S):S;
        getFirst(splitter:S):S;
        swap(what:S, withWhat:S):S;
        has(what:S):boolean;
        oust(what:S):boolean;
        getBetween(borderA:S, borderB:S):S;
        getBetweenClose(borderA:S, borderB:S):S;
        between(borderA:S, borderB:S, aIsFirst:boolean, bIsFirst:boolean):S;
    }
}

export {}