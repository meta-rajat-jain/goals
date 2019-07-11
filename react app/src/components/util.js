class Util {
    static imageData = [
        {
          "Id": 0,
          "name": "image_1",
          "tags": ["tags 0", "tags 1"]
        },
        {
          "Id": 1,
          "name": "image_2",
          "tags": ["tags 1"]
        },
        {
          "Id": 2,
          "name": "image_3",
          "tags": ["tags 2"]
        },
        {
          "Id": 3,
          "name": "image_4",
          "tags": ["tags 3"]
        },
        {
          "Id": 4,
          "name": "image_1",
          "tags": ["tags 4"]
        }
      ];
    static calculateWinner(squares) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
      }
      static getImageData() {
          return this.imageData;
      }

      static getAllTags() {
        let tags = [];
        Util.getImageData().forEach(function (imgObj) {
            (imgObj.tags).forEach(function (tag) {
                if(tags.indexOf(tag) === -1) {
                    tags.push(tag);
                }
            })
        });
        console.log(tags);
        return tags;
    }
    static updateTags() {
        //let tags = [];
    }
}

export default Util;