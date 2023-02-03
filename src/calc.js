const calculator = {
  back: () => {
    let txt = form1.numFeild.value;

    form1.numFeild.value = txt.substring(0, txt.length - 1);
  },
};
