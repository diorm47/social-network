export let updateObjectInArray = (users, itemId, objPropName, newObjProps) => {
  users.map((u) => {
    if (u[objPropName] === itemId) {
      return { ...u, ...newObjProps };
    }
    return u;
  });
};
