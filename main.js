// RESISTOR VALUES

function makeResistor(n, v) {
    return {
        name: n,
        value: v,
    };
}

var RESISTORS = [];

function addResistor(n, v) {
    RESISTORS.push(makeResistor(n, v));
}

const RES_1     = addResistor("RES_1",     1);
const RES_1_2   = addResistor("RES_1_2",   1.2);
const RES_1_5   = addResistor("RES_1_5",   1.5);
const RES_1_8   = addResistor("RES_1_8",   1.8);
const RES_2_2   = addResistor("RES_2_2",   2.2);
const RES_2_7   = addResistor("RES_2_7",   2.7);
const RES_3_3   = addResistor("RES_3_3",   3.3);
const RES_3_9   = addResistor("RES_3_9",   3.9);
const RES_4_7   = addResistor("RES_4_7",   4.7);
const RES_5_6   = addResistor("RES_5_6",   5.6);
const RES_6_8   = addResistor("RES_6_8",   6.8);
const RES_8_2   = addResistor("RES_8_2",   8.2);
const RES_10    = addResistor("RES_10",    10);
const RES_12    = addResistor("RES_12",    12);
const RES_15    = addResistor("RES_15",    15);
const RES_18    = addResistor("RES_18",    18);
const RES_22    = addResistor("RES_22",    22);
const RES_27    = addResistor("RES_27",    27);
const RES_33    = addResistor("RES_33",    33);
const RES_39    = addResistor("RES_39",    39);
const RES_47    = addResistor("RES_47",    47);
const RES_56    = addResistor("RES_56",    56);
const RES_68    = addResistor("RES_68",    68);
const RES_82    = addResistor("RES_82",    82);
const RES_100   = addResistor("RES_100",   100);
const RES_120   = addResistor("RES_120",   120);
const RES_150   = addResistor("RES_150",   150);
const RES_180   = addResistor("RES_180",   180);
const RES_220   = addResistor("RES_220",   220);
const RES_270   = addResistor("RES_270",   270);
const RES_330   = addResistor("RES_330",   330);
const RES_390   = addResistor("RES_390",   390);
const RES_470   = addResistor("RES_470",   470);
const RES_560   = addResistor("RES_560",   560);
const RES_680   = addResistor("RES_680",   680);
const RES_820   = addResistor("RES_820",   820);
const RES_1K    = addResistor("RES_1K",    1000);
const RES_1_2K  = addResistor("RES_1_2K",  1200);
const RES_1_5K  = addResistor("RES_1_5K",  1500);
const RES_1_8K  = addResistor("RES_1_8K",  1800);
const RES_2_2K  = addResistor("RES_2_2K",  2200);
const RES_2_7K  = addResistor("RES_2_7K",  2700);
const RES_3_3K  = addResistor("RES_3_3K",  3300);
const RES_3_9K  = addResistor("RES_3_9K",  3900);
const RES_4_7K  = addResistor("RES_4_7K",  4700);
const RES_5_6K  = addResistor("RES_5_6K",  5600);
const RES_6_8K  = addResistor("RES_6_8K",  6800);
const RES_8_2K  = addResistor("RES_8_2K",  8200);
const RES_10K   = addResistor("RES_10K",   10000);
const RES_12K   = addResistor("RES_12K",   12000);
const RES_15K   = addResistor("RES_15K",   15000);
const RES_18K   = addResistor("RES_18K",   18000);
const RES_22K   = addResistor("RES_22K",   22000);
const RES_27K   = addResistor("RES_27K",   27000);
const RES_33K   = addResistor("RES_33K",   33000);
const RES_39K   = addResistor("RES_39K",   39000);
const RES_47K   = addResistor("RES_47K",   47000);
const RES_56K   = addResistor("RES_56K",   56000);
const RES_68K   = addResistor("RES_68K",   68000);
const RES_82K   = addResistor("RES_82K",   82000);
const RES_100K  = addResistor("RES_100K",  100000);
const RES_120K  = addResistor("RES_120K",  120000);
const RES_150K  = addResistor("RES_150K",  150000);
const RES_180K  = addResistor("RES_180K",  180000);
const RES_220K  = addResistor("RES_220K",  220000);
const RES_270K  = addResistor("RES_270K",  270000);
const RES_330K  = addResistor("RES_330K",  330000);
const RES_390K  = addResistor("RES_390K",  390000);
const RES_470K  = addResistor("RES_470K",  470000);
const RES_560K  = addResistor("RES_560K",  560000);
const RES_680K  = addResistor("RES_680K",  680000);
const RES_820K  = addResistor("RES_820K",  820000);
const RES_1M    = addResistor("RES_1M",    1000000);

// +Vin
// │
// │
// R1
// │
// +---- Vout
// │
// R2
// │
// │
// GND

function voltageDivider(Vin, Vout, minRes = 0.0, maxRes = Number.MAX_VALUE) {
    let ratio, r1, r2, idealR1, idealR2, aVout, a, wp;
    ratio = Vout / Vin;
    let i = 0, j = 0, bestDiff = Number.MAX_VALUE;

    for (i = 0; i < RESISTORS.length; i++) {
        for (j = 0; j< RESISTORS.length; j++) {
            r1 = RESISTORS[i].value;
            r2 = RESISTORS[j].value;
            if (r1 >= minRes && r1 <= maxRes && r2 >= minRes && r2 <= maxRes) {
                resRatio = r2 / (r2 + r1);
                let v = Vin * (r2 / (r2 + r1));
                
                console.log("Actual Vout:");
                console.log(v);
                
                diff = Math.abs(v - Vout);

                console.log("bestDiff:");
                console.log(bestDiff);

                if (diff < bestDiff) {
                    bestDiff = diff;
                    idealR1 = r1;
                    idealR2 = r2;
                    aVout = v;
                }
            }
            
        }
    }

    a = aVout / (idealR1 + idealR2);

    wp = a * Vout;

    return {
        R1: idealR1,
        R2: idealR2,
        actualVout: aVout,
        A: a,
        wastePower: wp,
    }
}

console.log(voltageDivider(5, 1.5, 1000));