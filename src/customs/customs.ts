import { groupInputs } from '../utils';

export const totalAnswers = (input : string[]) : number =>
    groupResponses(input)
        .map(r => Object.keys(r).length)
        .reduce((acc, val) => acc + val, 0);

const groupResponses = (input : string[]) : Customs.Response[] =>
    groupInputs(input)
        .map(binAnswers);

const binAnswers = (group : string[]) : Customs.Response =>
    group
        .map((s : string) : Customs.Question[] => <Customs.Question[]>s.split(''))
        .reduce((acc : Customs.Response, question) : Customs.Response => {
            question.forEach(q => {
                if (!acc[q]) {
                    acc[q] = 0;
                }
                acc[q]++;
            });
            return acc;
        }, <Customs.Response>{});

