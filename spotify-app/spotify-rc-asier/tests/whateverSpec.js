describe('Shuffle', function () {
    var game;
    var arr = [12, 34, 646, 7, 68, 889, 56, 23];

    beforeEach(function () {
        game = arr.shuffle();
        console.log(game)
    });

    function compareOriginalArrayWithShuffleArrayWillBeTheSameNumbersDifferentOrder() {

        expect(game).not.toBe(!arr);

        console.log("game => "+game+" arr => "+ arr)
    }
    it(compareOriginalArrayWithShuffleArrayWillBeTheSameNumbersDifferentOrder.name, compareOriginalArrayWithShuffleArrayWillBeTheSameNumbersDifferentOrder);


    function compareOriginalArrayWithShuffleArrayHasSameNumbers() {

        expect(game).toContain(arr[0]);
        expect(game).toContain(arr[1]);
        expect(game).toContain(arr[2]);
        expect(game).toContain(arr[3]);
        expect(game).toContain(arr[4]);
        expect(game).toContain(arr[5]);
        expect(game).toContain(arr[6]);
        expect(game).toContain(arr[7]);


            console.log("game => "+game+" arr => "+ arr)
        }
        it(compareOriginalArrayWithShuffleArrayHasSameNumbers.name, compareOriginalArrayWithShuffleArrayHasSameNumbers);
    })