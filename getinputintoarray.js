var array = $(".uk-form-label");
var output = "[\n";
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    var text = $(element).text().toLowerCase().trim().replace(" ", "_");
    output = output + '"' + text + '",\n';
  }
  console.log(output + "]");