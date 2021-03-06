import {Stri} from "../index"
test(`All String Manipulations`, ()=>{
    Stri.includeMe();
    expect("lalala/hahaha/bebebe".cutFirst('/')).toBe("hahaha/bebebe");
    expect("lalala/hahaha/bebebe".cutLast('/')).toBe("lalala/hahaha");
    expect("lalala/hahaha/bebebe".getFirst('/')).toBe("lalala");
    expect("lalala/hahaha/bebebe".getLast('/')).toBe("bebebe");
    expect("lalala/hahaha/bebebe".getBetween(`/`, `be`)).toBe("hahaha/bebe");
    expect("lalala/hahaha/bebebe".getBetweenClose(`/`, `be`)).toBe("hahaha/");
});