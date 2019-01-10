// Code that generates the random lorem ipsum text

// Create a new object called loremIpsum by invoking the GenerateNewText constructor function
const loremIpsum = new GenerateNewText();

// Constructor function that creates an object with the sentences property
function GenerateNewText() {
  // Add property to the object
  this.sentences =
    [
      "اخشى انك ستجد ذلك صعبا.",
      "بالضبط، نريد ان تأتي الليلة بآخر قطار.",
      "سأكون بالتأكيد هناك.",
      "ولكن، سيدتي، إنني لم اقم بعد بالشيء الذي أتيت من أجله، وليس بإمكاني الرحيل إلى أن أرى الآلة.",
      "ماذا تفعل هناك؟",
      "سيكون ذلك رائعا، أليس كذلك؟",
      "ما الأمر يا جحا؟",
      "إن لديك من يشبهك سيدي",
      "وماذا يهمني؟",
      "أمضينا نصف ساعة نحاول إيقاظه",
      "بل إنه مريض.",
      "مرت الساعتان التاليتان كالحلم.",
      "في غضون ذلك، الملك يريد بعض الطعام للإفطار.",
      "إنها رائعة!",
      "كان صباح يوم السبت منعشا!",
      "وفي الحال توقف أحمد عن الطلاء",
      "سأعطيك تفاحتي",
      "هل استطيع الذهاب لكي ألعب الان؟",
      "لا يمكنك ان تفهم كيف أشعر",
      "في البداية كنت وحيداً جائعاً",
      "غادرنا لندن في شهر آذار",
   ];
}

// Method to the GenerateNewText constructor function that generates a random sentence
GenerateNewText.prototype.getRandomSentence = function() {
  let randomSentence = this.sentences[Math.floor(Math.random() * this.sentences.length)]
	return randomSentence;
}

// Method to the GenerateNewText constructor function that generates a paragraph from random sentences
GenerateNewText.prototype.getParagraph = function() {
  let paragraph = "";
  // Set the minimum number of words
  let minimumCharacterLength = 250;
  let firstSentence = true;
  while (paragraph.length < minimumCharacterLength) {
    if (firstSentence) {
      paragraph = paragraph.concat(this.getRandomSentence());
      firstSentence = false;
    } else {
      paragraph = paragraph.concat(" " + this.getRandomSentence());
    }
  }
  return paragraph;
}

// Method to the GenerateNewText constructor function that gerates multiple paragraphs from paragraphs
GenerateNewText.prototype.getAllParagraphs = function(numberOfParagraphs) {
  let allParagraphs = [];
  // Generate the number of paragraphs as specified by the user
  while (allParagraphs.length < numberOfParagraphs) {
    allParagraphs.push(this.getParagraph());
  }
  // Convert array into HTML string
  let paragraphHTML = "";
  allParagraphs.forEach(function (paragraph) {
    paragraphHTML += "<p>" + paragraph + "</p>";
  });
  return paragraphHTML;
}

module.exports = loremIpsum;