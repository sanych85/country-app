export const getRightAnswers = (type1, type2, data) => {
    const rightAnswers = type1 === "rightAnswers" ? type1 : type2;
    if (type1 === "rightAnswers") {
      return (
        ((data[rightAnswers] + 1) / (data[type2] + data[type1] + 1)).toFixed(
          2
        ) * 100
      );
    } else {
      return (
        (data[rightAnswers] / (data[type2] + data[type1] + 1)).toFixed(2) * 100
      );
    }
  };

export const getAnswerCount = (type1, type2, data) => {
  return {
    ...data,
    [type1]: data[type1] + 1,
    totalAnswers: data[type1] +  data[type2]+1,
    rate: getRightAnswers(type1, type2, data),
  };
};


