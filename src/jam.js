const date = new Date();
const currentTime = date.getHours();

let greeting;

if (currentTime >= 0 && currentTime <= 12) {
  greeting = "Selamat pagi";
} else if (currentTime > 12 && currentTime <= 15) {
  greeting = "Selamat Siang ";
} else if (currentTime > 15 && currentTime <= 18) {
  greeting = "Selamat Sore ";
} else {
  greeting = "Selamat Malam ";
}

export { greeting };
