import './App.css';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import councillorList from './councillors';
import hallsList from './halls';
import letters from './letters';
pdfMake.vfs = pdfFonts.pdfMake.vfs;


function App() {
 let hall

  
  
  function createLetter(){
    let feed = document.getElementById("feedback")
    let tempHall = document.getElementById("hall");
    if (tempHall.value === "null") return feed.innerHTML = "Please select a hall"
    else hall = hallsList[tempHall.value]
    let tempCounc = document.getElementById("counc")
    console.log(tempCounc.value)
    if (tempCounc.value === "null") return feed.innerHTML = "Please select a ward"
    else tempCounc = councillorList[tempCounc.value]
    console.log(tempCounc)

    for (let i=0; i< tempCounc.length; i++){
      council(letters[i],tempCounc[i], tempHall.value)
    }

    feed.innerHTML = `Letters to Councillors have been written and are ready to print`
    
      
    return
  }


  function council(doc,nameCounc, hallName){
    let councName = nameCounc
    for (let i=0; i<6; i++) doc.content[i+2] = hall[i]
    let telNo = document.getElementById("tel")
    if (telNo.value.length > 1) doc.content[10] = {text:`Contact Number: ${telNo.value}`,alignment:"right" }
    else doc.content[10] = ''
    doc.content[11] = {text:`Dear Councillor ${councName},`}
    switch(hallName){
      case "EastWhitburn": hallName = "East Whitburn"
      break;
      case "MidCalder": hallName = "Mid Calder"
      break;
      case "UphallStation": hallName = "Uphall Station"
      break;
      case "WestCalder" : hallName = "West Calder"
      break;
      case "Chalmers" : hallName = "Linlithgow Bridge"
      break;
      default: break;
    }
    doc.content[13] = `As you will no doubt be aware our community centre in ${hallName} plays a vital role by providing a facility allowing a variety of groups and users to come together to meet the Council's objectives in this service area i.e. unders 5s, young people, the elderly and much more. Our centre offers a lifeline to many in our community.
    `
    let sigName = document.getElementById("sig")
    if (sigName.value.length > 0) doc.content[24] = sigName.value
    else doc.content[24] = ''

    if (document.getElementById("group").checked){
      doc.content[15] = `We are writing to you regarding West Lothian Council's decision in February 2023 to cut the Community Centre's budget by £1m over the next 3 years from 2025/26.`
      doc.content[18] = `As it has been eight months since this decision, and because the recently formed Steering Group have been left disappointed in the lack of forthcoming information from the Council which they could then relay to Management Committees we would like to ask the following questions:`
    }
    else{
      doc.content[15] = `I am writing to you regarding West Lothian Council's decision in February 2023 to cut the Community Centre's budget by £1m over the next 3 years from 2025/26.`
      doc.content[18] = `As it has been eight months since this decision, and because the recently formed Steering Group have been left disappointed in the lack of forthcoming information from the Council which they could then relay to Management Committees I would like to ask the following questions:`
    }
    
    pdfMake.createPdf(doc).download(hallName + " " + councName)
  }

  

  return (
    <div className="App">
      <br/>
      <h1>Letters against Community Centre Budget Cuts for 2025/26 to 2027/28</h1>
      <p/>
      This website is made to automatically generate letters to be sent to councillors 
      from local wards. To use the site just enter the name of the Community Centre, the ward
      of the Councillors and any additional details you wish to add such as name and telephone
      number. It will then automatically generate pdfs of letters you can send to your local Councillors.
      None of the information on this site is recorded or stored by us.
      <p/>
      <div>
        <label>Community Centre : </label>
        <select name="hall" id="hall">
          <option value="null">select hall</option>
          <option value="Addiewell">Addiewell Community Centre</option>
          <option value="Bellsquarry">Bellsquarry Village Hall</option>
          <option value="Boghall">Boghall Community Wing</option>
          <option value="Bridgend">Bridgend Community Centre</option>
          <option value="Broxburn">Broxburn Old Town Centre</option>
          <option value="Carmondean">Carmondean Community Centre</option>
          <option value="Chalmers">Chalmers Hall (Linlithgow Bridge)</option>
          <option value="Craiginn">Craiginn Community Centre</option>
          <option value="Crofthead">Crofthead Community Centre</option>
          <option value="Dechmont">Dechmont Hall</option>
          <option value="EastWhitburn">East Whitburn Community Centre</option>
          <option value="Ecclesmachan">Ecclesmachan Village Hall</option>
          <option value="Forestbank">Forestbank Community Centre</option>
          <option value="Kirknewton">Kirknewton Village Hall</option>
          <option value="Lanthorn">Lanthorn Community Centre</option>
          <option value="Livingston">Livingston Station Community Centre</option>
          <option value="MidCalder">Mid Calder Community Centre</option>
          <option value="Murieston">Murieston Village Hall</option>
          <option value="Mosswood">Mosswood Community Centre</option>
          <option value="Newton">Newton Community Centre</option>
          <option value="Newyearfield">Newyearfield Farm Community Centre</option>
          <option value="Polbeth">Polbeth HUB</option>
          <option value="Philpstoun">Philpstoun Community Centre</option>
          <option value="Seafield">Seafield Community Centre</option>
          <option value="Stoneyburn">Stoneyburn Community Centre</option>
          <option value="Strathbrock">Strathbrock Community Centre</option>
          <option value="Torphichen">Torphichen Community Centre</option>
          <option value="UphallStation">Uphall Station Village Hall</option>
          <option value="Uphall">Uphall Community Centre</option>
          <option value="Winchburgh">Winchburgh Community Centre</option>
          <option value="WestCalder">West Calder Community Centre</option>
          <option value="Whitburn">Whitburn Community Centre</option>
      </select>
      </div>

      <div>
          <label>Councillors : </label>
          <select name="counc" id="counc">
            <option value="null">select ward</option>
            <option value="Linlithgow">Linlithgow</option>
            <option value="BUW">Broxburn, Uphall and Winchburgh</option>
            <option value="LivN">Livingston North</option>
            <option value="LivS">Livingston South</option>
            <option value="LivE">East Livingston and East Calder</option>
            <option value="Fauldhouse">Fauldhouse and the Breich Valley</option>
            <option value="Whitburn">Whitburn and Blackburn</option>
            <option value="Bathgate">Bathgate</option>
            <option value="Armadale">Armadale and Blackridge</option>

        </select>
      </div>
      <div>
        <form>
        <input type="radio" id="single" name="proNoun" value="single"/>
        <label for="single">Individual</label>
        <input type="radio" id="group" name="proNoun" value="group"/>
        <label for="css">Group</label>
        </form>
      </div>

      <div>
        <label>Signature (optional)</label>
        <input type="text" id="sig"></input>
      </div>
      <div>
        <label>Contact Number (optional)</label>
        <input type="tel" id="tel"></input>
      </div>
    <br/>
      <div>
      <button onClick={createLetter}>Create Letters to Councillors</button>
      </div>
      <br/>
      <div>
        <label id="feedback"></label>
      </div>
      
    </div>

  );
}

export default App;
