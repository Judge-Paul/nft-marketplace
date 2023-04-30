export function formatNum(num) {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(2) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    } else if (num === null || undefined || NaN) {
      return 0
    } else {
        return num.toFixed(2)
    }
}

export function generateNumber(min, max) {
    const range = (max - min) / 5;
    const randomIndex = Math.floor(Math.random() * range);
    const randomNumber = min + randomIndex * 5;
    return randomNumber;
  }  