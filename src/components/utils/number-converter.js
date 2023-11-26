 export const convertNumberToTrillionsOrQuadrillions = (number) => {
    if (number >= 1000000000) {
      return (number / 1000000000).toFixed(2) + ' Trillion';
    } else if (number >= 1000000) {
      return (number / 1000000).toFixed(2) + ' Billion';
    } else {
      return (number / 1000).toFixed(2) + ' Million';
    }
  };


  