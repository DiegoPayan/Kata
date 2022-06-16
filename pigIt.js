const pigIt = (text) =>
  text
    .split(/\s/g)
    .map((t) => (/[a-zA-Z]+/gm.test(t) ? t.substring(1) + t[0] + "ay" : t))
    .join(" ");

// Tests

// It should properly pig the strings

console.log(pigIt("Pig latin is cool") === "igPay atinlay siay oolcay");
console.log(pigIt("This is my string") === "hisTay siay ymay tringsay");

// It should properly pig the strings even if it's just one letter

console.log(pigIt("Pig latin i am iron man") === "igPay atinlay iay maay roniay anmay");

// shouldn't apply the piggisation over punctuation marks

console.log(pigIt("Hello world !") === "elloHay orldway !");
console.log(pigIt("Super . long ! text @ with ? punctuation # marks'") === "uperSay . onglay ! exttay @ ithway ? unctuationpay # arksmay'");
