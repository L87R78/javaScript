function addItem() {
   let text = document.getElementById('newItemText');
   let value = document.getElementById('newItemValue');

   let allInput = text.value + " " + value.value;
   let option = document.createElement('option');

    option.textContent = allInput;
    document.getElementById('menu').appendChild(option);

    text.value = "";
    value.value = "";
}