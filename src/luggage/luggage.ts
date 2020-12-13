type BaggageRule = [number, string]
type Bag = [string, BaggageRule[]]

import * as util from 'util';

export const bagsContaining = (rules : string[], term : string) : number =>
    collectBags(rules)
        .filter((bag, _, rules) => bagContains(bag, term, rules))
        .length;

export const totalBags = (rules : string[], term : string) : number => {
    const bags = collectBags(rules);
    const bag = bags.find(b => b[0] === term);
    return bag === undefined ? 0 : countContents(bag, bags);
}

const collectBags = (rules : string[]) : Bag[] =>
    rules.map(ruleToBag)

const ruleToBag = (rule : string) : Bag => {
    const [bag, contains] = rule.split('bags contain').map(s => s.trim());
    const searchRegex = /\d/;
    const bagsRegex = /.bag(s?)/;
    const rules = contains
        .replace('.', '')
        .split(',')
        .map(r => r.trim())
        .filter(r => r !== 'no other bags')
        .map((r) : BaggageRule => {
            const matches = r.match(searchRegex);
            const count = matches === null ? 0 : parseInt(matches[0]);
            const [_, bagType] = r.split(searchRegex);
            return [count, bagType.trim().replace(bagsRegex, '')];
        });
    return [bag, rules];
}

const bagContains = (bag : Bag, searchBag : string, rules : Bag[]) : boolean => {
    if (!bag[1].length) {
        return false;
    }
    return bag[1].filter(([_, b]) => {
        if (b === searchBag) {
            return true;
        }
        const found = rules.find(a => a[0] === b);
        return found !== undefined && bagContains(found, searchBag, rules)
    }).length !== 0;
};

const countContents = (bag : Bag, rules : Bag[]) : number => {
    if (!bag[1].length) {
        return 0;
    }

    return bag[1].reduce((acc, [count, bagName]) => {
        const found = rules.find(a => a[0] === bagName);
        if (found === undefined) {
            return acc;
        }
        return acc + count + (count * countContents(found, rules));
    }, 0);
}
