import './App.css';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import councillorList from './councillors';
import hallsList from './halls';
pdfMake.vfs = pdfFonts.pdfMake.vfs;


function App() {
  let councName = "Boyle"
  let pronoun = "I am"
  let pronounA = "I"
  let hall = "Uphall"
  let name = "John Smith"
  let letter0 = {
    content: [
      {text: 'Community Centre Budget Cuts 2025/26 to 2027/28', fontSize: 15, alignment:"centre" },
      ' ',
      {text:'Uphall Station Village Hall', alignment:"right" },
      {text:'14 Marrfield Terrace',alignment:"right" },
      {text:'Uphall Station',alignment:"right" },
      {text:'EH54 5PY',alignment:"right" },
      {text:'West Lothian',alignment:"right" },
      {text:'United Kingdom',alignment:"right" },
      ' ',
      {text:new Date().toLocaleDateString('en-GB'),alignment:"right" },
      {text:'Contact Number: ',alignment:"right" },
      {text:`Dear Councillor ${councName},`},
      ' ',
      `As you will no doubt be aware our community centre in ${hall} plays a vital role by providing a facility allowing a variety of groups and users to come together to meet the Council's objectives in this service area i.e. unders 5s, young people, the elderly and much more. Our centre offers a lifeline to many in our community.
      `,
      ' ',
      `${pronoun} writing to you regarding West Lothian Council's decision in February 2023 to cut the Community Centre's budget by £1m over the next 3 years from 2025/26.`,
      ' ',
      ' ',
      `As it has been eight months since this decision, and because the recently formed Steering Group have been left disappointed in the lack of forthcoming information from the Council which they could then relay to Management Committees ${pronounA} would like to ask the following questions:`,
      ' ',
      {
        ul: [
          'What progress has been made in developing budget cut plans',
          'Which Community Centres are at risk of closure',
          'What information has the Council used to target budget cuts',
          'What consultation plans are proposed to advise the Community Centres Management Committees on these budget cuts and the intention to close them',
        ]
      },
      ' ',
      'Yours Sincerely,',
      ' ',
      `${name}`,
  
    ]
    
  }
  let letter1 = {
    content: [
      {text: 'Community Centre Budget Cuts 2025/26 to 2027/28', fontSize: 15, alignment:"centre" },
      ' ',
      {text:'Uphall Station Village Hall', alignment:"right" },
      {text:'14 Marrfield Terrace',alignment:"right" },
      {text:'Uphall Station',alignment:"right" },
      {text:'EH54 5PY',alignment:"right" },
      {text:'West Lothian',alignment:"right" },
      {text:'United Kingdom',alignment:"right" },
      ' ',
      {text:new Date().toLocaleDateString('en-GB'),alignment:"right" },
      {text:'Contact Number: ',alignment:"right" },
      {text:`Dear Councillor ${councName},`},
      ' ',
      `As you will no doubt be aware our community centre in ${hall} plays a vital role by providing a facility allowing a variety of groups and users to come together to meet the Council's objectives in this service area i.e. unders 5s, young people, the elderly and much more. Our centre offers a lifeline to many in our community.
      `,
      ' ',
      `${pronoun} writing to you regarding West Lothian Council's decision in February 2023 to cut the Community Centre's budget by £1m over the next 3 years from 2025/26.`,
      ' ',
      ' ',
      `As it has been eight months since this decision, and because the recently formed Steering Group have been left disappointed in the lack of forthcoming information from the Council which they could then relay to Management Committees ${pronounA} would like to ask the following questions:`,
      ' ',
      {
        ul: [
          'What progress has been made in developing budget cut plans',
          'Which Community Centres are at risk of closure',
          'What information has the Council used to target budget cuts',
          'What consultation plans are proposed to advise the Community Centres Management Committees on these budget cuts and the intention to close them',
        ]
      },
      ' ',
      'Yours Sincerely,',
      ' ',
      `${name}`,
  
    ]
    
  }
  let letter2 = {
    content: [
      {text: 'Community Centre Budget Cuts 2025/26 to 2027/28', fontSize: 15, alignment:"centre" },
      ' ',
      {text:'Uphall Station Village Hall', alignment:"right" },
      {text:'14 Marrfield Terrace',alignment:"right" },
      {text:'Uphall Station',alignment:"right" },
      {text:'EH54 5PY',alignment:"right" },
      {text:'West Lothian',alignment:"right" },
      {text:'United Kingdom',alignment:"right" },
      ' ',
      {text:new Date().toLocaleDateString('en-GB'),alignment:"right" },
      {text:'Contact Number: ',alignment:"right" },
      {text:`Dear Councillor ${councName},`},
      ' ',
      `As you will no doubt be aware our community centre in ${hall} plays a vital role by providing a facility allowing a variety of groups and users to come together to meet the Council's objectives in this service area i.e. unders 5s, young people, the elderly and much more. Our centre offers a lifeline to many in our community.
      `,
      ' ',
      `${pronoun} writing to you regarding West Lothian Council's decision in February 2023 to cut the Community Centre's budget by £1m over the next 3 years from 2025/26.`,
      ' ',
      ' ',
      `As it has been eight months since this decision, and because the recently formed Steering Group have been left disappointed in the lack of forthcoming information from the Council which they could then relay to Management Committees ${pronounA} would like to ask the following questions:`,
      ' ',
      {
        ul: [
          'What progress has been made in developing budget cut plans',
          'Which Community Centres are at risk of closure',
          'What information has the Council used to target budget cuts',
          'What consultation plans are proposed to advise the Community Centres Management Committees on these budget cuts and the intention to close them',
        ]
      },
      ' ',
      'Yours Sincerely,',
      ' ',
      `${name}`,
  
    ]
    
  }
  let letter3 = {
    content: [
      {text: 'Community Centre Budget Cuts 2025/26 to 2027/28', fontSize: 15, alignment:"centre" },
      ' ',
      {text:'Uphall Station Village Hall', alignment:"right" },
      {text:'14 Marrfield Terrace',alignment:"right" },
      {text:'Uphall Station',alignment:"right" },
      {text:'EH54 5PY',alignment:"right" },
      {text:'West Lothian',alignment:"right" },
      {text:'United Kingdom',alignment:"right" },
      ' ',
      {text:new Date().toLocaleDateString('en-GB'),alignment:"right" },
      {text:'Contact Number: ',alignment:"right" },
      {text:`Dear Councillor ${councName},`},
      ' ',
      `As you will no doubt be aware our community centre in ${hall[0]} plays a vital role by providing a facility allowing a variety of groups and users to come together to meet the Council's objectives in this service area i.e. unders 5s, young people, the elderly and much more. Our centre offers a lifeline to many in our community.
      `,
      ' ',
      `${pronoun} writing to you regarding West Lothian Council's decision in February 2023 to cut the Community Centre's budget by £1m over the next 3 years from 2025/26.`,
      ' ',
      ' ',
      `As it has been eight months since this decision, and because the recently formed Steering Group have been left disappointed in the lack of forthcoming information from the Council which they could then relay to Management Committees ${pronounA} would like to ask the following questions:`,
      ' ',
      {
        ul: [
          'What progress has been made in developing budget cut plans',
          'Which Community Centres are at risk of closure',
          'What information has the Council used to target budget cuts',
          'What consultation plans are proposed to advise the Community Centres Management Committees on these budget cuts and the intention to close them',
        ]
      },
      ' ',
      'Yours Sincerely,',
      ' ',
      `${name}`,
  
    ]
    
  }

  let letters = [letter0, letter1, letter2, letter3]
  
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
      council(letters[i],tempCounc[i], tempHall.text)
    }

    feed.innerHTML = `Letters to Councillors have been written and are ready to print`
    
      
    return
  }


  function council(doc,nameCounc, hallName){
    councName = nameCounc
    for (let i=0; i<6; i++) doc.content[i+2] = hall[i]
    let telNo = document.getElementById("tel")
    if (telNo.value.length > 1) doc.content[10] = {text:`Contact Number: ${telNo.value}`,alignment:"right" }
    else doc.content[10] = ''
    doc.content[11] = {text:`Dear Councillor ${councName},`}
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
    
    pdfMake.createPdf(doc).download()
  }

  

  return (
    <div className="App">
      <header>Letters against Community Centre Budget Cuts for 2025/26 to 2027/28</header>
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
          <option value="UphallCom">Uphall Community Centre</option>
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
