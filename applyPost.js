id: "ef527c59-26e6-4983-8ad3-60255a80ca84"

let application = (applicant) => {
	fetch('https://ua-web-hiring.appspot.com/api/candidates', {
    method: 'POST',
    body: applicant,
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
   .then(json => console.log(json))
};

let applicantEntry = JSON.stringify({
      name: 'Sailor Winkelman',
      like: 'phones',
      positions: '1555700'
    });

application(applicantEntry);
