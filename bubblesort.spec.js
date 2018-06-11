describe('Bubble Sort', function(){
  beforeAll(function () {
    spyOn( sorter, 'swap').and.callThrough(); // replace existing `tootsiepop['lick']` method
  });
  it('swaps the correct number of times', function(){
    sorter.bubbleSort([4, 3, 2, 1]);
    expect(sorter.swap.calls.count()).toEqual(6);
  });
  it('handles an empty array', function(){
    expect(sorter.bubbleSort([]) ).toEqual( [] );
  });
  it('sorts an array', function(){
    expect( sorter.bubbleSort([5, 8, 2, 10, 2, 3, 8])).toEqual([2, 2, 3, 5, 8, 8, 10]);
  });
  it('sorts a pre-sorted array', function(){
    expect( sorter.bubbleSort([2, 2, 3, 5, 8, 8, 10])).toEqual([2, 2, 3, 5, 8, 8, 10]);
  });
  it('can handle custom comparator', function(){
    var comp = function (a, b) {
      if (a.age < b.age) return false; // returning `-1` means "a goes before b"
      if (a.age > b.age) return true;  // returning  `1` means "b goes before a"
      return 0; // returning 0 means "a and b are equivalent"
    };
    expect( sorter.bubbleSort([{ age: 4 }, { age: 8 }, { age: 2 }, { age: 9 }], comp)).toEqual([{ age: 2 }, { age: 4 }, { age: 8 }, { age: 9 }]);
  });
});
