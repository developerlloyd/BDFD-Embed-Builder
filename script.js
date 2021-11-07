function embed() {
 try {
  let = document.getElementById("new").innerHTML = ""

  const nomention = document.getElementById("nomention").value
  const content = document.getElementById("content").value
  const description = document.getElementById("description").value
  const title = document.getElementById("title").value
  const rawColor = document.getElementById("color").value
  const author = document.getElementById("author").value
  const authorIcon = document.getElementById("authorIcon").value
  const authorURL = document.getElementById("authorURL").value
  const footer = document.getElementById("footer").value
  const footerIcon = document.getElementById("footerIcon").value
  const thumbnail = document.getElementById("thumbnail").value
  const image = document.getElementById("image").value
  const index =
   document.getElementById("index").value == 1 ||
   document.getElementById("index").value == ""
    ? "]"
    : ";" + document.getElementById("index").value + "]"

  const fieldName1 = document.getElementById("fieldName1").value
  const fieldValue1 = document.getElementById("fieldValue1").value
  const fieldInline1 = document.getElementById("fieldInline1").value

  const fieldName2 = document.getElementById("fieldName2").value
  const fieldValue2 = document.getElementById("fieldValue2").value
  const fieldInline2 = document.getElementById("fieldInline2").value

  const fieldName3 = document.getElementById("fieldName3").value
  const fieldValue3 = document.getElementById("fieldValue3").value
  const fieldInline3 = document.getElementById("fieldInline3").value

  const fieldName4 = document.getElementById("fieldName4").value
  const fieldValue4 = document.getElementById("fieldValue4").value
  const fieldInline4 = document.getElementById("fieldInline4").value

  const fieldName5 = document.getElementById("fieldName5").value
  const fieldValue5 = document.getElementById("fieldValue5").value
  const fieldInline5 = document.getElementById("fieldInline5").value

  const fieldName6 = document.getElementById("fieldName6").value
  const fieldValue6 = document.getElementById("fieldValue6").value
  const fieldInline6 = document.getElementById("fieldInline6").value

  const fieldName7 = document.getElementById("fieldName7").value
  const fieldValue7 = document.getElementById("fieldValue7").value
  const fieldInline7 = document.getElementById("fieldInline7").value

  const fieldName8 = document.getElementById("fieldName8").value
  const fieldValue8 = document.getElementById("fieldValue8").value
  const fieldInline8 = document.getElementById("fieldInline8").value

  const fieldName9 = document.getElementById("fieldName9").value
  const fieldValue9 = document.getElementById("fieldValue9").value
  const fieldInline9 = document.getElementById("fieldInline9").value

  const fieldName10 = document.getElementById("fieldName10").value
  const fieldValue10 = document.getElementById("fieldValue10").value
  const fieldInline10 = document.getElementById("fieldInline10").value

  const fieldName11 = document.getElementById("fieldName11").value
  const fieldValue11 = document.getElementById("fieldValue11").value
  const fieldInline11 = document.getElementById("fieldInline11").value

  const fieldName12 = document.getElementById("fieldName12").value
  const fieldValue12 = document.getElementById("fieldValue12").value
  const fieldInline12 = document.getElementById("fieldInline12").value

  const fieldName13 = document.getElementById("fieldName13").value
  const fieldValue13 = document.getElementById("fieldValue13").value
  const fieldInline13 = document.getElementById("fieldInline13").value

  const fieldName14 = document.getElementById("fieldName14").value
  const fieldValue14 = document.getElementById("fieldValue14").value
  const fieldInline14 = document.getElementById("fieldInline14").value

  const fieldName15 = document.getElementById("fieldName15").value
  const fieldValue15 = document.getElementById("fieldValue15").value
  const fieldInline15 = document.getElementById("fieldInline15").value

  const fieldName16 = document.getElementById("fieldName16").value
  const fieldValue16 = document.getElementById("fieldValue16").value
  const fieldInline16 = document.getElementById("fieldInline16").value

  const fieldName17 = document.getElementById("fieldName17").value
  const fieldValue17 = document.getElementById("fieldValue17").value
  const fieldInline17 = document.getElementById("fieldInline17").value

  const fieldName18 = document.getElementById("fieldName18").value
  const fieldValue18 = document.getElementById("fieldValue18").value
  const fieldInline18 = document.getElementById("fieldInline18").value

  const fieldName19 = document.getElementById("fieldName19").value
  const fieldValue19 = document.getElementById("fieldValue19").value
  const fieldInline19 = document.getElementById("fieldInline19").value

  const fieldName20 = document.getElementById("fieldName20").value
  const fieldValue20 = document.getElementById("fieldValue20").value
  const fieldInline20 = document.getElementById("fieldInline20").value

  const fieldName21 = document.getElementById("fieldName21").value
  const fieldValue21 = document.getElementById("fieldValue21").value
  const fieldInline21 = document.getElementById("fieldInline21").value

  const fieldName22 = document.getElementById("fieldName22").value
  const fieldValue22 = document.getElementById("fieldValue22").value
  const fieldInline22 = document.getElementById("fieldInline22").value

  const fieldName23 = document.getElementById("fieldName23").value
  const fieldValue23 = document.getElementById("fieldValue23").value
  const fieldInline23 = document.getElementById("fieldInline23").value

  const fieldName24 = document.getElementById("fieldName24").value
  const fieldValue24 = document.getElementById("fieldValue24").value
  const fieldInline24 = document.getElementById("fieldInline24").value

  const fieldName25 = document.getElementById("fieldName25").value
  const fieldValue25 = document.getElementById("fieldValue25").value
  const fieldInline25 = document.getElementById("fieldInline25").value

  const cleanIndex = index.replace(/;|]/gi, "")
  const color = rawColor.replace("#", "")
  let output = null

  if (cleanIndex > 10 || cleanIndex < 0 || Number.isInteger(Number(cleanIndex)) == false) {
   alert("Invalid embed index! Please provide a valid integer between 1 and 10 for the embed index setting.")
   return
  }

  if (typeof color !== "string" && color.length !== 6 && isNaN(Number("0x" + color)) !== true || color != 0) {
   alert("Invalid color hex provided for embed color!")
   return
  }

  if (nomention == "yes") {
   output = output + "\n" + `\$nomention`
  }

  if (content != "") {
   output = output + "\n" + content
  }

  if (title != "") {
   output = output + "\n" + `\$title[${title}` + index
  }

  if (description != "") {
   output = output + "\n" + `\$description[${description}` + index
  }

  if (color != "") {
   output = output + "\n" + `\$color[${rawColor}` + index
  }

  if (author != "") {
   output = output + "\n" + `\$author[${author}` + index
  }

  if (authorIcon != "") {
   output = output + "\n" + `\$authorIcon[${authorIcon}` + index
  }

  if (authorURL != "") {
   output = output + "\n" + `\$authorURL[${authorURL}` + index
  }

  if (authorIcon != "") {
   output = output + "\n" + `\$authorIcon[${authorIcon}` + index
  }

  if (footer != "") {
   output = output + "\n" + `\$footer[${footer}` + index
  }

  if (footerIcon != "") {
   output = output + "\n" + `\$footerIcon[${footerIcon}` + index
  }

  if (thumbnail != "") {
   output = output + "\n" + `\$thumbnail[${thumbnail}` + index
  }

  if (image != "") {
   output = output + "\n" + `\$image[${image}` + index
  }

  if (fieldName1 != "" && fieldValue1 != "") {
   output =
    output +
    "\n" +
    `\$addField[${fieldName1}` +
    `\;${fieldValue1}` +
    `\;${fieldInline1}` +
    index
  }

  if (fieldName2 != "" && fieldValue2 != "") {
   output =
    output +
    "\n" +
    `\$addField[${fieldName2}` +
    `\;${fieldValue2}` +
    `\;${fieldInline2}` +
    index
  }

  if (fieldName3 != "" && fieldValue3 != "") {
   output =
    output +
    "\n" +
    `\$addField[${fieldName3}` +
    `\;${fieldValue3}` +
    `\;${fieldInline3}` +
    index
  }

  if (fieldName4 != "" && fieldValue4 != "") {
   output =
    output +
    "\n" +
    `\$addField[${fieldName4}` +
    `\;${fieldValue4}` +
    `\;${fieldInline4}` +
    index
  }

  if (fieldName5 != "" && fieldValue5 != "") {
   output =
    output +
    "\n" +
    `\$addField[${fieldName5}` +
    `\;${fieldValue5}` +
    `\;${fieldInline5}` +
    index
  }

  if (fieldName6 != "" && fieldValue6 != "") {
   output =
    output +
    "\n" +
    `\$addField[${fieldName6}` +
    `\;${fieldValue6}` +
    `\;${fieldInline6}` +
    index
  }

  if (fieldName7 != "" && fieldValue7 != "") {
   output =
    output +
    "\n" +
    `\$addField[${fieldName7}` +
    `\;${fieldValue7}` +
    `\;${fieldInline7}` +
    index
  }

  if (fieldName8 != "" && fieldValue8 != "") {
   output =
    output +
    "\n" +
    `\$addField[${fieldName8}` +
    `\;${fieldValue8}` +
    `\;${fieldInline8}` +
    index
  }

  if (fieldName9 != "" && fieldValue9 != "") {
   output =
    output +
    "\n" +
    `\$addField[${fieldName9}` +
    `\;${fieldValue9}` +
    `\;${fieldInline9}` +
    index
  }

  if (fieldName10 != "" && fieldValue10 != "") {
   output =
    output +
    "\n" +
    `\$addField[${fieldName10}` +
    `\;${fieldValue10}` +
    `\;${fieldInline10}` +
    index
  }

  if (fieldName11 != "" && fieldValue11 != "") {
   output =
    output +
    "\n" +
    `\$addField[${fieldName11}` +
    `\;${fieldValue11}` +
    `\;${fieldInline11}` +
    index
  }

  if (fieldName12 != "" && fieldValue12 != "") {
   output =
    output +
    "\n" +
    `\$addField[${fieldName12}` +
    `\;${fieldValue12}` +
    `\;${fieldInline12}` +
    index
  }

  if (fieldName13 != "" && fieldValue13 != "") {
   output =
    output +
    "\n" +
    `\$addField[${fieldName13}` +
    `\;${fieldValue13}` +
    `\;${fieldInline13}` +
    index
  }

  if (fieldName14 != "" && fieldValue14 != "") {
   output =
    output +
    "\n" +
    `\$addField[${fieldName14}` +
    `\;${fieldValue14}` +
    `\;${fieldInline14}` +
    index
  }

  if (fieldName15 != "" && fieldValue15 != "") {
   output =
    output +
    "\n" +
    `\$addField[${fieldName15}` +
    `\;${fieldValue15}` +
    `\;${fieldInline15}` +
    index
  }

  if (fieldName16 != "" && fieldValue16 != "") {
   output =
    output +
    "\n" +
    `\$addField[${fieldName16}` +
    `\;${fieldValue16}` +
    `\;${fieldInline16}` +
    index
  }

  if (fieldName17 != "" && fieldValue17 != "") {
   output =
    output +
    "\n" +
    `\$addField[${fieldName17}` +
    `\;${fieldValue17}` +
    `\;${fieldInline17}` +
    index
  }

  if (fieldName18 != "" && fieldValue18 != "") {
   output =
    output +
    "\n" +
    `\$addField[${fieldName18}` +
    `\;${fieldValue18}` +
    `\;${fieldInline18}` +
    index
  }

  if (fieldName19 != "" && fieldValue19 != "") {
   output =
    output +
    "\n" +
    `\$addField[${fieldName19}` +
    `\;${fieldValue19}` +
    `\;${fieldInline19}` +
    index
  }

  if (fieldName20 != "" && fieldValue20 != "") {
   output =
    output +
    "\n" +
    `\$addField[${fieldName20}` +
    `\;${fieldValue20}` +
    `\;${fieldInline20}` +
    index
  }

  if (fieldName21 != "" && fieldValue21 != "") {
   output =
    output +
    "\n" +
    `\$addField[${fieldName21}` +
    `\;${fieldValue21}` +
    `\;${fieldInline21}` +
    index
  }

  if (fieldName22 != "" && fieldValue22 != "") {
   output =
    output +
    "\n" +
    `\$addField[${fieldName22}` +
    `\;${fieldValue22}` +
    `\;${fieldInline22}` +
    index
  }

  if (fieldName23 != "" && fieldValue23 != "") {
   output =
    output +
    "\n" +
    `\$addField[${fieldName23}` +
    `\;${fieldValue23}` +
    `\;${fieldInline23}` +
    index
  }

  if (fieldName24 != "" && fieldValue24 != "") {
   output =
    output +
    "\n" +
    `\$addField[${fieldName24}` +
    `\;${fieldValue24}` +
    `\;${fieldInline24}` +
    index
  }

  if (fieldName25 != "" && fieldValue25 != "") {
   output =
    output +
    "\n" +
    `\$addField[${fieldName25}` +
    `\;${fieldValue25}` +
    `\;${fieldInline25}` +
    index
  }

  output = output.replace(null, "").replace(/\n\n/gi, "").trim()
  const resultDiv = document.getElementById("new")
  const result = document.createElement("p")
  resultDiv.appendChild(result)
  result.innerHTML =
   "<strong>Result</strong>" +
   `<pre> <code id="mainCode">` +
   output +
   `</code> </pre>`

  let button = document.getElementById("embed")
  button.innerText = "Edit Embed"
 } catch (err) {
  alert("Error!")
  console.log(err)
 }
}