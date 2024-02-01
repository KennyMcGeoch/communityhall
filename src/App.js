import './App.css';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;


function App() {
  let councName = "Boyle"
  let pronoun = "I am"
  let pronounA = "I"
  let hall = "Uphall"
  let name = "John Smith"
  let letterOne = {
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
      {text:'1st February 2024',alignment:"right" },
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
  let docDefinition = {
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
    {text:'1st February 2024',alignment:"right" },
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

  async function createLetter(){
    await council("Boyle")
    councilTwo("Pearson")
   
    
    // await council("Cartmill")
    
    // councName = "Pearson"
    
    // councName = "Stafford"
    
    return
  }

  function council(name){
    councName = name
    docDefinition.content[11] = {text:`Dear Councillor ${councName},`}
    pdfMake.createPdf(docDefinition).download()
  }
  function councilTwo(name){
    councName = name
    letterOne.content[11] = {text:`Dear Councillor ${councName},`}
    pdfMake.createPdf(letterOne).download()
  }

  

  return (
    <div className="App">
      <header>Letters against Community Centre Budget Cuts for 2025/26 to 2027/28</header>
      <p/>
      <div>
        <label>Community Centre : </label>
        <select name="hall" id="hall">
          <option value="null">select hall</option>
        <option value="uphall">Uphall Station Village Hall</option>
        <option value="strathbrock">Strathbrock Community Centre</option>

      </select>
      </div>

      <div>
          <label>Councillors : </label>
          <select name="counc" id="counc">
            <option value="null">select ward</option>
            <option value="buw">Broxburn, Uphall and Winchburgh</option>
            <option value="bathgate">Bathgate</option>

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
      <button onClick={createLetter}>Create Letters to Councillors</button>
      </div>
      
    </div>

  );
}

export default App;
