function mixArray(password: string, website: string) {
  const mixedPasswordArr = [];
  for (
    let index = 0;
    index < website.length || index < password.length;
    index++
  ) {
    mixedPasswordArr.push(password[index]);
    mixedPasswordArr.push(website[index]);
    // We mix string through array. otherwise it can be 'mixedpassword+undefined'
  }
  return mixedPasswordArr;
}

export default mixArray;
