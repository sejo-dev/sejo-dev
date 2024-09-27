export function calculateYears(date) {
    const today = new Date();
    const DateObj = new Date(date);
    let age = today.getFullYear() - DateObj.getFullYear();
    const monthDiff = today.getMonth() - DateObj.getMonth();
  
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < DateObj.getDate())) {
      age--;
    }
  
    return age;
  }