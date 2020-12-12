import * as Customs from './customs';

describe('Customs', () => {
   it('should return the total number of people who answered yes to any question', () => {
      const input = `abc
        
        a
        b
        c
        
        ab
        ac
        
        a
        a
        a
        a
        
        b`.split('\n').map(s => s.trim());
      const result = Customs.totalAnswers(input);
      expect(result).toEqual(11);
   });
});