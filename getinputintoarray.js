var array = $(".uk-form-label");
var output = "[\n";
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    var text = $(element).text().toLowerCase().trim().replace(/ /g, "_");
//  $(element2).next().children().attr("name",text);
    output = output + '"' + text + '",\n';
  }
  console.log(output + "]");
