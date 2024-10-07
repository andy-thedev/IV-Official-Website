export const commaJoinArray = (arrayToJoin) => {
  if (!arrayToJoin) {
    return null;
  }

  return arrayToJoin.join(', ');
};
