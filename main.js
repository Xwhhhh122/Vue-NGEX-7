Vue.createApp({
    data() {
      return {
        availableTraits: [
          'Kind', 'Quiet', 'Protective', 'Empathetic', 'Brave', 'Adventurous', 'Independent',
          'Hardworking', 'Curious', 'Mischievous', 'Witty', 'Loyal', 'Dreamy', 'Ambitious', 'Funny', 'Magical', 'Mysterious'
        ],
        selectedTraits: [],
        result: null,
        noResult: false,
        characters: [
          {
            name: 'Totoro',
            traits: ['Kind', 'Quiet', 'Protective', 'Empathetic'],
            image: 'assets/totoro.png',
            description: 'Totoro is a gentle forest spirit who watches over children and brings joy and magic.'
          },
          {
            name: 'Kiki',
            traits: ['Brave', 'Adventurous', 'Independent', 'Hardworking'],
            image: 'assets/kiki.webp',
            description: 'Kiki is a young witch-in-training, brave and eager to find her place in the world.'
          },
          {
            name: 'Chihiro',
            traits: ['Curious', 'Brave', 'Kind', 'Empathetic'],
            image: 'assets/chihiro.png',
            description: 'Chihiro overcomes fear and shows great courage and kindness in a magical world.'
          },
          {
            name: 'Calcifer',
            traits: ['Mischievous', 'Protective', 'Witty'],
            image: 'assets/calcifer.jpeg',
            description: 'Calcifer is a fiery, funny spirit with a strong personality and a warm heart... literally!'
          },
          {
            name: 'Howl',
            traits: ['Mysterious', 'Brave', 'Dreamy', 'Witty'],
            image: 'assets/howl.jpg',
            description: 'Howl is a charming and enigmatic wizard who learns to love and protect selflessly.'
          },
          {
            name: 'San',
            traits: ['Brave', 'Loyal', 'Independent', 'Protective'],
            image: 'assets/san.jpg',
            description: 'San is a fierce warrior raised by wolves, deeply connected to nature and loyalty.'
          },
          {
            name: 'Ponyo',
            traits: ['Curious', 'Dreamy', 'Mischievous', 'Funny', 'Magical'],
            image: 'assets/ponyo.jpeg',
            description: 'Ponyo is a magical fish-girl with an adventurous heart and love for the surface world.'
          },
          {
            name: 'Arrietty',
            traits: ['Curious', 'Adventurous', 'Brave', 'Ambitious'],
            image: 'assets/arrietty.webp',
            description: 'Arrietty is a tiny borrower who dreams of exploring the world beyond her home.'
          }
        ]
      };
    },
    methods: {
      findCharacter() {
        this.result = null;
        this.noResult = false;
  
        let bestMatch = null;
        let highestScore = 0;
  
        for (const char of this.characters) {
          const matchCount = char.traits.filter(trait => this.selectedTraits.includes(trait)).length;
          if (matchCount > highestScore) {
            bestMatch = char;
            highestScore = matchCount;
          }
        }
  
        if (bestMatch && highestScore > 0) {
          this.result = bestMatch;
        } else {
          this.noResult = true;
        }
      }
    }
  }).mount("#app");
  