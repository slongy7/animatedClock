function clock() {
  const now = new Date();
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  // setup canvas
  ctx.save(); //save the default state

  ctx.restore(); //restore to default state
}

clock();
